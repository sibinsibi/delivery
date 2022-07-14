<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Live Orders</h1>

          <div class="row g-4 settings-section">
            <div class="col-12 col-md-12">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
                  <!-- <div class="row">
                    <div class="col-12 col-md-4 offset-md-8">
                      <input
                        type="text"
                        id="search-orders"
                        name="searchorders"
                        class="form-control search-orders"
                        placeholder="Search"
                        v-model="searchQuery"
                      />
                    </div>
                  </div>-->
                  <div class="table-responsive">
                    <table
                      id="example"
                      class="table mb-0 text-left hover-table"
                    >
                      <thead>
                        <tr>
                          <th>Order Id</th>
                          <th>Date</th>
                          <th>Customer</th>
                          <th>Address</th>
                          <th>Shop</th>
                          <th>Order Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(order, index) in allOrders" :key="index">
                          <td class="cell">{{ order.a }}</td>
                          <td class="cell">{{ order.a }}</td>
                          <td class="cell">{{ order.a }}</td>
                          <td class="cell">{{ order.a }}</td>
                          <td class="cell">{{ order.a }}</td>
                          <td class="cell">{{ order.a }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";

import {
  getFirestore,
  doc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      loader: false,
      allOrders: [],
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders: async function() {
      const q = query(
        collection(this.db, "orders"),
        where("status", "==", "pending")
      );
      onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const order = change.doc.data();
            this.allOrders.push(order);
          }
          if (change.type === "modified") {
            console.log("Modified city: ");
          }
          if (change.type === "removed") {
            console.log("Removed city: ");
          }
        });
      });
    },
    updateTypeArr: function(id, index) {
      var chk = document.getElementById(id);
      if (chk.checked) {
        this.typesArr.push(id);
      } else {
        this.typesArr.splice(index, 1);
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
        this.typesArr = [];
        window.$("#shop-form input:checkbox").prop("checked", false);
        q = query(collection(this.db, "shops"), where("active", "==", true));
        querySnapshot = await getDocs(q);
      }
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        shop.id = doc.id;
        allShops.push(shop);
      });
      this.allShops = allShops;
      this.loader = false;
    },
    openItemModal: async function(shop) {
      this.selectedShop = shop;
      const q = query(
        collection(this.db, "items"),
        where("shopId", "==", shop.id)
      );
      const querySnapshot = await getDocs(q);
      const allItems = [];
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        item.id = doc.id;
        allItems.push(item);
      });
      this.allItems = allItems;
      window.$("#itemModal").modal("show");
    },
    updateActive: async function(id) {
      var chk = document.getElementById("active" + id);
      let active = false;
      if (chk.checked) {
        active = true;
      }
      const itemRef = doc(this.db, "items", id);

      await updateDoc(itemRef, {
        active: active,
      });
      this.$toast.success(`Updated`);
    },
    gotoEditShop: function(id) {
      window.$("#itemModal").modal("toggle");

      this.$root.$router.push({
        path: `/item/${id}`,
      });
    },
  },
};
</script>
