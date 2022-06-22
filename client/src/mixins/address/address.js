import { getFirestore, doc, updateDoc, arrayUnion } from "firebase/firestore";

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
    };
  },
  methods: {
    checkAddress: async function() {
      if (!this.$store.state.user.address) {
        this.$router.push("/add_address");
      }
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
      const address = {
        name: this.customerName,
        mob: this.mob,
        house: this.house,
        place: this.place,
        landmark: this.landmark,
        default: this.defaultFlag,
        latLng: "",
        id: `ADS${new Date().getTime()}`
      };
      try {
        const custRef = doc(this.db, "customers", this.$store.state.user.uid);
        await updateDoc(custRef, {
          address: arrayUnion(address),
        });
        this.$toast.success(`Saved successfully`);
        //goto all address apge
      } catch (err) {
        this.$toast.error(`Something went wrong` + err);
      }
    },
  },
};
