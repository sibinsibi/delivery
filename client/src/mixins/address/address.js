import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export default {
  data() {
    return {
      db: getFirestore(),
      customerName: "",
      mob: "",
      house: "",
      place: "",
      landmark: "",
      defaultFlag: false,
      allAddress: [],
      uid: "",
      loader: false,
    };
  },
  methods: {
    getAllAddress: async function(uid) {
      this.loader = true;
      const q = query(collection(this.db, "address"), where("id", "==", uid));
      const querySnapshot = await getDocs(q);
      const allAddress = [];
      querySnapshot.forEach((doc) => {
        const address = doc.data();
        address.id = doc.id;
        allAddress.push(address);
      });
      this.allAddress = allAddress;
      this.loader = false;
    },
    saveNewAddress: async function() {
      //get lat and lng
      if (!this.customerName || !this.mob || !this.house || !this.place) {
        this.$toast.error("Enter all rquired fields");
        return;
      }
      if (this.mob.toString().length !== 10) {
        this.$toast.error("Enter 10 digit mobile number");
        return;
      }
      this.loader = true;
      const address = {
        name: this.customerName,
        mob: this.mob,
        house: this.house,
        place: this.place,
        landmark: this.landmark,
        default: this.defaultFlag,
        latLng: "",
        id: this.$store.state.user.uid,
      };
      try {
        await addDoc(collection(this.db, "address"), address);
        this.loader = false;
        this.$router.push("/addresses");
      } catch (err) {
        this.loader = false;
        this.$toast.error(`Something went wrong` + err);
      }
    },
    deleteAddress: async function(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          background: "#fff",
          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            this.loader = true;
            await deleteDoc(doc(this.db, "address", id));
            await this.getAllAddress(this.$store.state.user.uid);
            this.loader = false;
            this.$toast.success(`Deleted successfully`);
          }
        });
    },
    gotoEditAddress: function(id) {
      this.$router.push(`/edit_address/${id}`);
    },
    getAddress: async function(id) {
      this.loader = true;
      const docRef = doc(this.db, "address", id);
      const docSnap = await getDoc(docRef);
      const address = docSnap.data();
      this.customerName = address.name;
      this.mob = address.mob;
      this.house = address.house;
      this.place = address.place;
      this.landmark = address.landmark;
      //update latLng
      this.loader = false;
    },
    updateAddress: async function(id) {
      this.loader = true;
      const address = {
        name: this.customerName,
        mob: this.mob,
        house: this.house,
        place: this.place,
        landmark: this.landmark,
        default: this.defaultFlag,
        latLng: "",
        id: this.$store.state.user.uid,
      };
      const addressRef = doc(this.db, "address", id);
      await updateDoc(addressRef, address);
      this.$toast.success(`Updated successfully`);
      this.loader = false;
      this.$router.push("/addresses");
    },
  },
};
