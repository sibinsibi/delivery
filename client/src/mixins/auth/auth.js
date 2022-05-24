import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
export default {
  data() {
    return {
      showReg: false,
      email: "",
      password: "",
      name: "",
      signupEmail: "",
      signupPassword: "",
      cPassword: "",
      db: getFirestore(),
      loader: false,
      showPwd: false,
    };
  },
  methods: {
    login: function() {
      if (!this.email || !this.password) {
        this.$toast.error(`Enter Email/Password`);
        return;
      }
      this.loader = true;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          const docRef = doc(this.db, "customers", userCredential.user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let userObj = {};
            userObj = docSnap.data();
            userObj.uid = docSnap.id;
            this.$store.dispatch("SET_USER", userObj);
            this.setUser(userObj);
          } else {
            this.$router.push("/login");
          }
        })
        .catch(() => {
          this.loader = false;
          this.$toast.error("Email/Password error");
        });
    },
    signup: function() {
      if (
        !this.name ||
        !this.signupEmail ||
        !this.signupPassword ||
        !this.cPassword
      ) {
        this.$toast.error("All fields are rquired");
        return;
      }
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!this.signupEmail.match(validRegex)) {
        this.$toast.error("Invalid email address!");
        return;
      }

      if(this.signupPassword.length < 5){
        this.$toast.error("Password length should be greater than 5");
        return;
      }

      // const pwdValidation = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      // if (!pwdValidation.test(this.signupPassword)) {
      //   this.$toast.error(
      //     " Min 8 letter password, with at least a symbol, upper and lower case letters and a number"
      //   );
      //   return;
      // }

      if (this.signupPassword !== this.cPassword) {
        this.$toast.error("Password mismatch");
        return;
      }
      this.loader = true;
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.signupEmail,
        this.signupPassword
      )
        .then((userCredential) => {
          const user = userCredential.user;
          this.createUser(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          this.loader = false;
          this.$toast.error(errorMessage);
        });
    },
    createUser: async function(user) {
      const userObj = {
        name: this.name || user.displayName,
        mobile: "",
        email: user.email,
        active: true,
        //loggedIn: true,
      };
      //set tokenid
      try {
        await setDoc(doc(this.db, "customers", user.uid), userObj);
        userObj.uid = user.uid;
        this.setUser(user);
      } catch (error) {
        console.log(error);
        this.loader = false;
        this.$toast.error("Something went wrong. Try after some time");
      }
    },
    setUser: function(user) {
      this.$store.dispatch("SET_USER", user);
      this.loader = false;
      this.$router.push("/");
    },
    logout: function() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$store.dispatch("SET_USER", "");
          this.$router.push("/login");
        })
        .catch(() => {
          this.$toast.error("Something went wrong. Try after sometime");
        });
    },
    setUserState: function() {
      const auth = getAuth();

      onAuthStateChanged(auth, async (user) => {
        //console.log(user);
        if (user) {
          const docRef = doc(this.db, "customers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let userObj = {};
            userObj = docSnap.data();
            userObj.uid = docSnap.id;
            this.$store.dispatch("SET_USER", userObj);

            if (!userObj.active) {
              this.$router.push("/denied");
              return;
            } else {
              if (
                this.$router.currentRoute._value.path == "/denied" ||
                this.$router.currentRoute._value.path == "/login"
              )
                this.$router.push("/");
            }
          } else {
            this.$store.dispatch("SET_USER", "");
            this.logout();
          }
        } else this.logout();
      });
    },
    checkAuth: function() {
      if (!this.$store.getters.user) this.$router.push("/login");
      if (!this.$store.getters.user.active) this.$router.push("/denied");
    },
    showPassword: function(flag) {
      flag ? (this.showPwd = !this.showPwd) : (this.showPwd = !this.showPwd);

      const x = document.getElementById("signupPassword");
      const y = document.getElementById("cPassword");
      if (x.type === "password") {
        x.type = "text";
        y.type = "text";
      } else {
        x.type = "password";
        y.type = "password";
      }
    },
    signInWithGoogle: async function() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithRedirect(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //const credential = GoogleAuthProvider.credentialFromResult(result);
          //const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          this.createUser(user);
        })
        .catch((error) => {
          // Handle Errors here.
          //const errorCode = error.code;
          //const errorMessage = error.message;
          // The email of the user's account used.
          //const email = error.customData.email;
          // The AuthCredential type that was used.
         // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...

          console.log(error)
        });

    },
  },
};
