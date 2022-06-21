// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {};
  },
  methods: {
    checkAddress: async function() {
      if (!this.$store.state.address) {
        this.$router.push("/add_address");
      }
    },
    saveNewAddress: function(){
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
        },
        error => {
          console.log(error.message);
        },
      )
    }
  },
};
