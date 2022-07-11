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
      shopTypes: [],
      tempShops: [],
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
      this.shopTypes = typesArr;
    },
    updateTypeArr: function(id) {
      var chk = document.getElementById(id);
      if (chk.checked) {
        this.typesArr.push(id);
      } else {
        this.typesArr = this.typesArr.filter((e) => e !== id);
      }
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
      if (querySnapshot.size) {
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          shop.id = doc.id;
          if(shop.active)
          allShops.push(shop);
        });
      }
      window.$("#filterModal").modal("hide");
      this.allShops = allShops;
      this.tempShops = this.allShops;
      await this.filterShopsVeg('both');
      const exist = document.getElementById("both");
      if(exist) document.getElementById("both").checked = true;
      this.loader = false;
    },
    filterShopsVeg: async function(val){
      if(val === 'both'){
        this.allShops = this.tempShops;
        return
      }
      let flag = true;
      if(val === 'veg'){
        flag = true;
      }
      else if(val === 'non'){
        flag = false;
      }
      this.allShops = this.tempShops.filter((shop)=> shop.veg === flag)
    }
  },
};
