<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5 mt-5 mt-sm-5 fs-5">
            Filter Orders
          </h1>

          <div class="row">
            <div class="col-6 col-md-2 col-sm-6 mt-1">
              <button
                class="btn btn-sm btn-warning text-white w-100 btn-font-size-10"
                @click="getOrders('today')"
              >
                Today`s Orders
              </button>
            </div>
            <div class="col-6 col-md-2 col-sm-6 mt-1">
              <button
                class="btn btn-sm btn-warning text-white w-100 btn-font-size-10"
                @click="getOrders('yesterday')"
              >
                Yesterday`s Orders
              </button>
            </div>
            <div class="col-6 col-md-2 col-sm-6 mt-1">
              <button
                class="btn btn-sm btn-warning text-white w-100 btn-font-size-10"
                @click="getOrders('week')"
              >
                This week Orders
              </button>
            </div>
            <div class="col-6 col-md-2 col-sm-6 mt-1">
              <button
                class="btn btn-sm btn-warning text-white w-100 btn-font-size-10"
                @click="getOrders('pweek')"
              >
                Previous week Orders
              </button>
            </div>
            <div class="col-6 col-md-2 col-sm-6 mt-1">
              <button
                class="btn btn-sm btn-warning text-white w-100 btn-font-size-10"
                @click="getOrders('month')"
              >
                This Month Orders
              </button>
            </div>
            <div class="col-6 col-md-2 col-sm-6 mt-1">
              <button
                class="btn btn-sm btn-warning text-white w-100 btn-font-size-10"
                @click="getOrders('pmonth')"
              >
                Pre Month Orders
              </button>
            </div>
          </div>

          <div class="row g-4 settings-section mt-1">
            <div class="col-12 col-md-12">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
                  <div class="row">
                    <div class="col-6 col-md-3 col-sm-6 mt-1">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="filterOrder"
                        id="orderId"
                      />
                      <label
                        class="form-check-label cursor"
                        for="orderId"
                        @click="showFilterFunc('orderId')"
                        >OrderID</label
                      >
                    </div>
                    <div
                      class="col-6 col-md-3 col-sm-6 mt-1"
                      @click="showFilterFunc('pStatus')"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="filterOrder"
                        id="pStatus"
                      />
                      <label class="form-check-label cursor" for="pStatus"
                        >Payment Status</label
                      >
                    </div>
                    <div
                      class="col-6 col-md-3 col-sm-6 mt-1"
                      @click="showFilterFunc('oStatus')"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="filterOrder"
                        id="oStatus"
                      />
                      <label class="form-check-label cursor" for="oStatus"
                        >Order Status</label
                      >
                    </div>
                    <div
                      class="col-6 col-md-3 col-sm-6 mt-1"
                      @click="showFilterFunc('days')"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="filterOrder"
                        id="days"
                      />
                      <label class="form-check-label cursor" for="days"
                        >Date</label
                      >
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div
                      class="col-12 col-md-4 col-sm-12 mt-1"
                      v-show="showFilter.orderId"
                    >
                      <input
                        type="text"
                        v-model="orderIdFilter"
                        class="form-control"
                        placeholder="Order ID"
                        autocomplete="off"
                      />
                    </div>

                    <div class="col-12 col-md-12 col-sm-12">
                      <div class="row">
                        <div
                          class="col-12 col-md-4 col-sm-12 mt-1"
                          v-show="showFilter.pStatus"
                        >
                          <select class="form-select" v-model="paymentStatus">
                            <option value="-1" selected disabled
                              >Select status</option
                            >
                            <option
                              class="capitalize"
                              :value="c"
                              v-for="(c, index) in constant.paymentStatus"
                              :key="index"
                            >
                              {{ c }}
                            </option>
                          </select>
                        </div>
                        <div
                          class="col-12 col-md-4 col-sm-12 mt-1"
                          v-show="showFilter.oStatus"
                        >
                          <select class="form-select" v-model="orderStatus">
                            <option value="-1" selected disabled
                              >Select status</option
                            >
                            <option
                              class="capitalize"
                              :value="c"
                              v-for="(c, index) in constant.orderStatus"
                              :key="index"
                            >
                              {{ c }}
                            </option>
                          </select>
                        </div>
                        <div
                          class="col-12 col-md-4 col-sm-12 mt-1"
                          v-show="
                            showFilter.pStatus ||
                              showFilter.oStatus ||
                              showFilter.days
                          "
                        >
                          <input
                            type="date"
                            class="form-control"
                            id="start-date"
                            v-model="sDate"
                          />
                        </div>
                        <div
                          class="col-12 col-md-4 col-sm-12 mt-1"
                          v-show="
                            showFilter.pStatus ||
                              showFilter.oStatus ||
                              showFilter.days
                          "
                        >
                          <input
                            type="date"
                            class="form-control"
                            id="end-date"
                            v-model="eDate"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-12 col-md-12 col-sm-12 mt-3 text-center"
                      v-show="
                        showFilter.orderId ||
                          showFilter.pStatus ||
                          showFilter.oStatus ||
                          showFilter.days
                      "
                    >
                      <button
                        class="btn btn-sm btn-primary text-white"
                        @click="getFilteredOrders"
                      >
                        Get Orders
                      </button>
                    </div>
                  </div>
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
            </div>
          </div>

          <div class="row g-4 settings-section mt-1">
            <div class="col-12 col-md-12">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
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
                          <th>O.Status</th>
                          <th>P.Status</th>
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
                            {{ order.payment.status }}
                          </td>
                          <td class="cell">
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
import Constant from "@/constants/constant.json";

import {
  getFirestore,
  query,
  where,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import moment from "moment";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      loader: false,
      allOrders: [],
      showFilter: {
        orderId: false,
        pStatus: false,
        oStatus: false,
        days: false,
      },
      orderIdFilter: "",
      constant:
        process.env.NODE_ENV === "development" ? Constant.dev : Constant.prod,
      paymentStatus: -1,
      orderStatus: -1,
      eDate: "",
      sDate: "",
    };
  },
  methods: {
    getFilteredOrders: async function() {
      this.allOrders = [];
      if (!this.showFilter.orderId) {
        if (!this.sDate || !this.eDate) {
          this.$toast.error(`Date can't be empty`);
          return;
        }
        var sDate = new Date(this.sDate);
        sDate.setHours(0, 0, 0, 0);
        sDate = sDate.getTime();
        var eDate = new Date(this.eDate);
        eDate.setHours(23, 59, 59, 999);
        eDate = eDate.getTime();

        const start = moment(sDate);
        const end = moment(eDate);
        const diff = end.diff(start, "days");
        if (diff > 31) {
          this.$toast.error(`Days can't be more than 31 days`);
          return;
        }
      }
      if (this.showFilter.orderId) {
        if (!this.orderIdFilter) {
          this.$toast.error(`Enter order ID`);
          return;
        }
        this.loader = true;
        const orderRef = doc(this.db, "orders", this.orderIdFilter);
        const orderSnap = await getDoc(orderRef);
        const order = orderSnap.data();
        if (order) {
          order.id = this.orderIdFilter;
          order.date = moment(order.date).format("DD/MM/YYYY hh:mm");
          this.allOrders.push(order);
        }
        this.loader = false;
      } else if (
        this.showFilter.pStatus ||
        this.showFilter.oStatus ||
        this.showFilter.days
      ) {
        if (this.showFilter.pStatus && this.paymentStatus == -1) {
          this.$toast.error(`Select payment status`);
          return;
        }
        if (this.showFilter.oStatus && this.orderStatus == -1) {
          this.$toast.error(`Select payment status`);
          return;
        }
        this.loader = true;
        let q;
        if (this.showFilter.pStatus) {
          q = query(
            collection(this.db, "orders"),
            where("payment.status", "==", this.paymentStatus),
            where("date", ">=", sDate),
            where("date", "<=", eDate)
          );
        } else if (this.showFilter.oStatus) {
          q = query(
            collection(this.db, "orders"),
            where("status", "==", this.orderStatus),
            where("date", ">=", sDate),
            where("date", "<=", eDate)
          );
        } else {
          q = query(
            collection(this.db, "orders"),
            where("date", ">=", sDate),
            where("date", "<=", eDate)
          );
        }

        const querySnapshot = await getDocs(q);
        const orders = [];
        querySnapshot.forEach((doc) => {
          const order = doc.data();
          order.id = doc.id;
          order.date = moment(order.date).format("DD/MM/YYYY hh:mm A");
          orders.push(order);
        });
        this.allOrders = orders;
        this.loader = false;
      }
    },
    showFilterFunc: function(filter) {
      Object.entries(this.showFilter).forEach(([key]) => {
        filter === key
          ? (this.showFilter[key] = true)
          : (this.showFilter[key] = false);
      });
    },
    gotoOrder: function(id) {
      this.$root.$router.push({
        path: `/order/${id}`,
      });
    },
    getOrders: async function(flag) {
      let sDate, eDate;
      if (flag === "today") {
        sDate = new Date();
        sDate.setHours(0, 0, 0, 0);
        sDate = sDate.getTime();
        eDate = new Date();
        eDate.setHours(23, 59, 59, 999);
        eDate = eDate.getTime();
      } else if (flag === "yesterday") {
        sDate = moment()
          .subtract(1, "days")
          .startOf("day");
        sDate = moment(sDate).format("x");
        eDate = moment()
          .subtract(1, "days")
          .endOf("day");
        eDate = moment(eDate).format("x");
      } else if (flag === "week") {
        sDate = moment().startOf("week");
        sDate = moment(sDate).format("x");
        eDate = moment().endOf("week");
        eDate = moment(eDate).format("x");
      } else if (flag === "pweek") {
        sDate = moment()
          .subtract(1, "weeks")
          .startOf("week")
          .format("x");

        eDate = moment()
          .subtract(1, "weeks")
          .endOf("week")
          .format("x");
      }
      else if (flag === "month") {
        sDate = moment().startOf("month");
        sDate = moment(sDate).format("x");
        eDate = moment().endOf("month");
        eDate = moment(eDate).format("x");
      }else{
         sDate = moment()
          .subtract(1, "months")
          .startOf("month")
          .format("x");

        eDate = moment()
          .subtract(1, "months")
          .endOf("month")
          .format("x");
      }

      this.allOrders = [];
      this.loader = true;
      const q = query(
        collection(this.db, "orders"),
        where("date", ">=", +sDate),
        where("date", "<=", +eDate)
      );
      const querySnapshot = await getDocs(q);
      const orders = [];
      querySnapshot.forEach((doc) => {
        const order = doc.data();
        order.id = doc.id;
        order.date = moment(order.date).format("DD/MM/YYYY hh:mm A");
        orders.push(order);
      });
      this.allOrders = orders;
      this.loader = false;
    },
  },
};
</script>
