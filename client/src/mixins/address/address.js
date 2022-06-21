import { getFirestore, doc, collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      db: getFirestore(),
      customerName: "",
      mob: "",
      house: "",
      place: "",
      landmark: "",
      defaultFlag: true
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
      if(this.mob.toString().length !== 10){
        this.$toast.error("Enter 10 digit mobile number") 
        return
      }
      const address = {
        name: this.customerName,
        mob: this.mob,
        house: this.house,
        place: this.place,
        landmark: this.landmark,
        latLng: ''
      }
      try {
        const id = await doc(collection(this.db, "cities")).id;
        

        console.log(id,address)

        const custRef = doc(this.db, "customers", this.$store.state.user.uid);
      //   await addDoc(custRef, {
      //     "address": address
      // });

      //   this.$toast.success(`Updated successfully`);
      } catch (err) {
        this.$toast.error(`Something went wrong` + err);
      }
    },
  },
};
