<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4 pb-sm-3 pb-3">
        <div class="container-xl">
          <h5 class="app-page-title mt-md-5 mt-5 mt-sm-5 fs-5">
            ID: #{{ orderId }}
          </h5>

          <div class="row m-auto">
            <div class="col-12 col-sm-12 col-md-6 mt-1 mt-sm-1">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title fw-bolder">Customer</h6>
                  <div class="row order-font-size">
                    <div class="col-4 col-sm-4 col-md-4">Ordered by</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{ order.customer.name }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">Mobile:</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{ order.customer.mob }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">Address:</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{ order.address.name }}, {{ order.address.mob }},
                      <p>
                        {{ order.address.house }}, {{ order.address.place }},
                        {{ order.address.landmark }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 mt-1 mt-sm-1">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-8 col-sm-8 col-md-8">
                      <h6 class="card-title fw-bolder">Payment</h6>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#amountModal"
                        class="btn btn-sm btn-success text-white"
                      >
                        Update Amount
                      </button>
                    </div>
                  </div>
                  <div class="row order-font-size">
                    <div class="col-4 col-sm-4 col-md-4">Amount</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      ₹{{ order.payment.total }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">Commission</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      ₹{{ order.payment.commission }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 fw-bold">Total</div>
                    <div class="col-1 col-sm-1 col-md-1 fw-bold">:</div>
                    <div class="col-7 col-sm-7 col-md-7 fw-bold">
                      ₹{{ order.payment.total + order.payment.commission }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 fw-bold">Status</div>
                    <div class="col-1 col-sm-1 col-md-1 fw-bold">:</div>
                    <div class="col-7 col-sm-7 col-md-7 fw-bold capitalize">
                      {{ order.payment.status }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 mt-1">Update</div>
                    <div class="col-1 col-sm-1 col-md-1 mt-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7 mt-1">
                      <select
                        class="form-select"
                        v-model="paymentStatus"
                        @change="updatePaymentStatus"
                      >
                        <option value="-1" selected disabled
                          >Update status</option
                        >
                        <option
                          class="capitalize"
                          :value="c"
                          v-for="(c, index) in constant.svcPaymentStatus"
                          :key="index"
                        >
                          {{ c }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 mt-1 mt-sm-1">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title fw-bolder">Order</h6>
                  <div class="row order-font-size-1">
                    <div class="col-4 col-sm-4 col-md-4 fw-bold">Status</div>
                    <div class="col-1 col-sm-1 col-md-1 fw-bold">:</div>
                    <div class="col-7 col-sm-7 col-md-7 fw-bold capitalize">
                      {{ order.status }}
                      <h6
                        class="fw-normal order-font-size"
                        v-show="order.status === 'cancelled'"
                      >
                        ({{ order.cReason }})
                      </h6>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 mt-1">Update</div>
                    <div class="col-1 col-sm-1 col-md-1 mt-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7 mt-1">
                      <select
                        class="form-select"
                        v-model="orderStatus"
                        @change="updateOrderStatus"
                      >
                        <option value="-1" selected disabled
                          >Update status</option
                        >
                        <option
                          class="capitalize"
                          :value="c"
                          v-for="(c, index) in constant.svcOrderStatus"
                          :key="index"
                        >
                          {{ c }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--//app-card-->
        </div>
        <!--//container-fluid-->
      </div>
    </div>

    <!-- The Modal -->
    <div
      class="modal fade"
      id="amountModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">
              Update Amount
            </h4>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
            ></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form>
              Amount
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                  v-model="paymentTotal"
                />
              </div>
              <div class="mb-3">
                Commission
                <input
                  type="number"
                  class="form-control"
                  placeholder="Commission"
                  v-model="paymentCommission"
                />
              </div>
              <div class="mb-3 text-center fs-4 fw-bold">
                ₹{{ this.paymentTotal + this.paymentCommission }}
              </div>
              <button class="btn btn-primary text-white" @click="updateAmount">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Loader v-show="loader" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";
import Constants from "@/mixins/constant/constant.js";

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  mixins: [Constants],
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      order: {
        customer: {},
        address: {},
        payment: {},
      },
      orderId: "",
      loader: false,
      paymentStatus: -1,
      orderStatus: -1,
      gst: 0,
      totalItemAmount: 0,
      allItems: [],
      paymentCommission: 0,
      paymentTotal: 0,
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
      const orderRef = doc(this.db, "svcorders", this.orderId);
      const orderSnap = await getDoc(orderRef);
      this.order = orderSnap.data();
      this.loader = false;
    },
    updatePaymentStatus: async function() {
      if (this.paymentStatus === this.order.payment.status) return;

      this.$swal
        .fire({
          title: "Are you sure?",
          text: "",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          background: "#fff",
          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            this.loader = true;
            try {
              const orderRef = doc(this.db, "svcorders", this.orderId);
              await updateDoc(orderRef, {
                "payment.status": this.paymentStatus,
              });
              this.paymentStatus = -1;
              await this.getOrder();
              this.$toast.success(`Updated successfully`);
            } catch (err) {
              this.$toast.error(`Something went wrong` + err);
              this.loader = false;
            }
          } else this.paymentStatus = -1;
        });
    },
    updateOrderStatus: async function() {
      if (this.orderStatus === this.order.status) return;

      this.$swal
        .fire({
          title: "Are you sure?",
          text: "",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          background: "#fff",
          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            if (this.orderStatus === "cancelled") {
              var reason = prompt("Please enter reason:");
              if (reason == null || reason == "") {
                this.orderStatus = -1;
                return;
              }
            }
            this.loader = true;
            try {
              const orderRef = doc(this.db, "svcorders", this.orderId);
              if (reason) {
                await updateDoc(orderRef, {
                  status: this.orderStatus,
                  cReason: reason,
                });
              } else {
                await updateDoc(orderRef, {
                  status: this.orderStatus,
                  cReason: "",
                });
              }

              await this.getOrder();
              this.$toast.success(`Updated successfully`);
            } catch (err) {
              this.$toast.error(`Something went wrong` + err);
              this.loader = false;
            }
          } else this.orderStatus = -1;
        });
    },
    updateAmount: async function() {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes",
          background: "#fff",
          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
        })
        .then(async (result) => {
          window.$("#amountModal").modal("hide");

          if (result.isConfirmed) {
            this.loader = true;
            try {
              const orderRef = doc(this.db, "svcorders", this.orderId);
              await updateDoc(orderRef, {
                "payment.total": this.paymentTotal,
                "payment.commission": this.paymentCommission,
              });
              this.paymentTotal = 0;
              this.paymentCommission = 0;

              await this.getOrder();
              this.$toast.success(`Updated successfully`);
            } catch (err) {
              this.$toast.error(`Something went wrong` + err);
              this.loader = false;
            }
          } else {
            this.paymentTotal = 0;
            this.paymentCommission = 0;
          }
        });
    },
  },
};
</script>
