<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5 mt-5 mt-sm-5 fs-5">
            Pending Orders
          </h1>

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
                      id="live-order-table"
                      class="table mb-0 text-left hover-table"
                    >
                      <thead>
                        <tr>
                          <th>Order Id</th>
                          <th>Date</th>
                          <th>Customer</th>
                          <th>Address</th>
                          <th>Shop</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(order, index) in allOrders" :key="index">
                          <td class="cell">{{ order.id }}</td>
                          <td class="cell">{{ order.date }}</td>
                          <td class="cell">
                            {{ order.customer.name }}
                            {{ order.customer.mob }}
                          </td>
                          <td class="cell">
                            {{ order.address.name }}, {{ order.address.mob }},
                            {{ order.address.house }},
                            {{ order.address.place }},
                            {{ order.address.landmark }}
                          </td>
                          <td class="cell">
                            {{ order.shop.name }}, {{ order.shop.address.mob }},
                            {{ order.shop.address.street }},
                            {{ order.shop.address.city }}
                          </td>
                          <td class="cell capitalize">{{ order.status }}</td>
                          <td class="cell capitalize">
                            <router-link to="" @click="gotoOrder(order.id)"
                              ><span class="material-icons">visibility</span>
                            </router-link>
                          </td>
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
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";
import moment from "moment";

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
            order.id = change.doc.id;
            order.date = moment(order.date).format("DD/MM/YYYY hh:mm");
            this.allOrders.push(order);
          }
          if (change.type === "modified") {
            console.log("Modified");
          }
          if (change.type === "removed") {
            console.log("Removed");
          }
        });
      });
    },
    gotoOrder: function(id) {
      this.$root.$router.push({
        path: `/order/${id}`,
      });
    },
  },
};
</script>
