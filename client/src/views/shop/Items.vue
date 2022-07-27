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
      <div class="col-8 ps-3 fw-bold text-uppercase">{{ category }}</div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container ps-4 pe-4 mt-2 pb-2" v-if="items.length">
      <div
        class="row shadow p-3 mb-3 bg-body rounded"
        v-for="item in items"
        :key="item.id" @click="gotoShop(item.shop)" :class="{ blackWhite: !item.shop.open }"
      >
        <div class="col-5">
          <img :src="item.photoUrl" class="w-100 rounded" />
        </div>
        <div class="col-7">
          <h6 class="fw-bold text-body">
            <span
              class="material-icons cursor fs-6"
              :style="item.veg ? 'color: green;' : 'color: red;'"
              >api</span
            >
            {{ item.shop.name }}
          </h6>
          <h6 class="text-body cart-font-size-1 text-muted">
            {{ item.shop.address.street }}
          </h6>
          <h6 class="text-body cart-font-size-1 fw-bolder">{{ item.name }}</h6>
          <h6 class="cart-font-size-1 fw-bolder text-danger">
            Order for <span class="fs-6 mt-1">₹{{ item.price }}</span>
          </h6>
        </div>
      </div>
    </div>

    <div class="container" v-if="!items.length">
      <div class="row">
        <div class="col-12 text-center">
          <span class="material-icons common-icon cursor empty-address-icon"
            >restaurant</span
          >
          <p>No Items Found</p>
        </div>
      </div>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";

export default {
  components: { Loader },
  mixins: [auth],
  data() {
    return {
      category: this.$route.params.category,
      items: [],
      db: getFirestore(),
    };
  },
  async mounted() {
    this.loader = true;
    await this.checkAuth();
    await this.getItems();
    this.loader = false;
  },
  methods: {
    getItems: async function() {
      const q = query(
        collection(this.db, "items"),
        where("category", "==", this.category),
        where("active", "==", true)
      );
      const querySnapshot = await getDocs(q);
      const items = [];
      const shops = {};

      for (let i = 0; i < querySnapshot.docs.length; i++) {
        const item = querySnapshot.docs[i].data();
        item.id = querySnapshot.docs[i].id;

        if (!shops[item.shopId]) {
          const docRef = doc(this.db, "shops", item.shopId);
          const docSnap = await getDoc(docRef);
          var shop = docSnap.data();
          shop.id = docSnap.id
          item.shop = shop;
          shops[item.shopId] = shop;
        } else {
          item.shop = shops[item.shopId];
        }
        items.push(item);
      }
      this.items = items;
    },
    gotoShop: function(shop) {
      if (!shop.open) {
        this.$toast.error(`${shop.name} not opened yet!`);
      }
      this.$router.push(`/shop/${shop.id}`);
    },
  },
};
</script>
