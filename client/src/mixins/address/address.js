// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

  export default {
    data() {
      return {
      };
    },
    methods: {
        checkAddress: async function(){
            if(!this.$store.state.address){
                this.$router.push("/add_address");
            }
        }
    }
  };
  