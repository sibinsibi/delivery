<template>
  <div class="pt-2">
    <div class="row mt-3 ps-2" style="width: 100%">
      <div class="col-1">
        <router-link to=""
          ><span class="material-icons back-icon cursor" @click="$router.go(-1)"
            >arrow_back</span
          >
        </router-link>
      </div>
      <div class="col-8 ps-3">
        {{ shop.name }} <span class="text-muted">({{ shop.localName }})</span>
      </div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-2 shadow-sm">
          <div class="row w-100">
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="both"
                name="veg-filter"
                @click="filterItemVeg('both')"
              />
              <label class="form-check-label" for="both">
                Both
              </label>
            </div>
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="veg"
                name="veg-filter"
                @click="filterItemVeg('veg')"
              />
              <label class="form-check-label" for="veg">
                Veg
              </label>
            </div>
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="non-veg"
                name="veg-filter"
                @click="filterItemVeg('non')"
              />
              <label class="form-check-label" for="non-veg">
                Non
              </label>
            </div>
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="clear"
                name="veg-filter"
                onclick="window.location.reload()"
              />
              <label class="form-check-label" for="clear">
                Clear
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="col-12 mt-2 rounded each-item"
          v-for="item in allItems"
          :key="item.id"
        >
          <div class="row mb-2">
            <div class="col-6">
              <span
                class="material-icons cursor fs-6"
                :style="item.veg ? 'color: green;' : 'color: red;'"
                >api</span
              >
              <h6 class="product-name mt-2">{{ item.name }}</h6>
              <h6 class="text-muted">({{ item.localName }})</h6>
              <h6 class="">₹{{ item.price }}</h6>
            </div>
            <div class="col-6 text-center">
              <img
                :src="item.photoUrl"
                class="mt-3 height-item each-item"
              /><br />
              <button class="mt-2 btn btn-outline-danger btn-sm shadow-sm">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Loader v-show="loader" />
  </div>
</template>

<script>
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

export default {
  components: { Loader },
  mixins: [auth],
  data() {
    return {
      db: getFirestore(),
      shopId: this.$route.params.id,
      shop: "",
      allItems: [],
      loader: false,
    };
  },
  async mounted() {
    this.loader = true;
    await this.checkAuth();
    document.getElementById("both").checked = true;
    this.getShop();
    this.getItems();
    this.loader = false;
  },
  methods: {
    getShop: async function() {
      const docRef = doc(this.db, "shops", this.shopId);
      const docSnap = await getDoc(docRef);
      this.shop = docSnap.data();
    },
    getItems: async function() {
      const q = query(
        collection(this.db, "items"),
        where("shopId", "==", this.shopId)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size) {
        const allItems = [];
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          if (item.active) {
            item.id = doc.id;
            allItems.push(item);
          }
        });
        this.allItems = allItems;
      }
    },
  },
};
</script>
