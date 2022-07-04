import {
  getFirestore,
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";

export default {
  data() {
    return {
      db: getFirestore(),
      loader: false,
      typesArr: [],
      allShops: [],
    };
  },
  methods: {
    getShopTypes: async function() {
      const docRef = doc(this.db, "shopTypes", "types");
      const docSnap = await getDoc(docRef);
      const types = docSnap.data();
      const typesArr = [];
      for (const key in types) {
        typesArr.push(key);
      }
      this.typesArr = typesArr;
    },
    getShops: async function(flag) {
      if (flag === "category" && !this.typesArr.length) {
        this.$toast.error(`Select one or more category`);
        return;
      }
      this.loader = true;

      let querySnapshot = "";
      const allShops = [];
      if (flag === "category" && this.typesArr.length) {
        var q = query(
          collection(this.db, "shops"),
          where("category", "array-contains-any", this.typesArr)
        );
        querySnapshot = await getDocs(q);
      } else if (flag === "all") {
        //this.typesArr = [];
        //window.$("#shop-form input:checkbox").prop("checked", false);
        q = query(collection(this.db, "shops"), where("active", "==", true));
        querySnapshot = await getDocs(q);
      }
      //open or not condition
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        shop.id = doc.id;
        allShops.push(shop);
      });
      this.allShops = allShops;
      this.loader = false;
    },
  },
};
