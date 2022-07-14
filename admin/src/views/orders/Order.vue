<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h5 class="app-page-title mt-md-5 mt-5 mt-sm-5 fs-5">ID: #{{orderId}}</h5>

          <div class="row">
            <div class="col-12 col-sm-12 col-md-6">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
                 
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>

             <div class="col-12 col-sm-12 col-md-6 mt-2 mt-sm-2">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
                 
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>

          </div>

          <!--//app-card-->
        </div>
        <!--//container-fluid-->
      </div>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";

import {
  getFirestore,
  doc,
  getDoc,
  // updateDoc,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      order: {},
      orderId: "",
      loader: false
    };
  },
  mounted() {
    const route = useRoute();
    this.orderId = route.params.id;
    this.getOrder();
  },
  methods: {
    getOrder: async function() {
      this.loader = true;
      const shopRef = doc(this.db, "orders", this.orderId);
      const orderSnap = await getDoc(shopRef);
      this.order = orderSnap.data();
      this.loader = false;
    },
    updateTypeArr: function(id) {
      var chk = document.getElementById(id);
      if (chk.checked) {
        this.typesArr.push(id);
      } else {
        const index = this.typesArr.indexOf(id);
        this.typesArr.splice(index, 1);
      }
    },
  },
};
</script>
