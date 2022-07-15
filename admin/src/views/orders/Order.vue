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
                  <h6 class="card-title fw-bolder">Shop</h6>
                  <div class="row order-font-size">
                    <div class="col-4 col-sm-4 col-md-4">Shop name:</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{ order.shop.name }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">Mobile:</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{ order.shop.address.mob }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">Place:</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{ order.shop.address.street }},
                      <p>{{ order.shop.address.city }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12 mt-1 mt-sm-1">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title fw-bolder">Items</h6>
                  <div class="row order-font-size">
                    <div
                      class="col-12 col-sm-12 col-md-4"
                      v-for="(item, index) in order.items"
                      :key="index"
                    >
                      <div class="p-2">
                        <div class="row border rounded-3">
                          <div class="col-3 col-sm-4 col-md-4 p-2">Name</div>
                          <div class="col-1 col-sm-1 col-md-1 p-2">:</div>
                          <div class="col-8 col-sm-7 col-md-7 p-2">
                            {{ item.name }}
                          </div>
                          <div class="col-3 col-sm-4 col-md-4 p-2">Price</div>
                          <div class="col-1 col-sm-1 col-md-1 p-2">:</div>
                          <div class="col-8 col-sm-7 col-md-7 p-2">
                            {{ item.price }}
                          </div>
                          <div class="col-3 col-sm-4 col-md-4 p-2">Qty</div>
                          <div class="col-1 col-sm-1 col-md-1 p-2">:</div>
                          <div class="col-8 col-sm-7 col-md-7 p-2">
                            {{ item.qty }}
                          </div>
                          <div class="col-3 col-sm-4 col-md-4 p-2 fw-bold">
                            Total
                          </div>
                          <div class="col-1 col-sm-1 col-md-1 p-2 fw-bold">
                            :
                          </div>
                          <div class="col-8 col-sm-7 col-md-7 p-2 fw-bold">
                            {{ item.total }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 mt-1 mt-sm-1">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title fw-bolder">Payment</h6>
                  <div class="row order-font-size">
                    <div class="col-4 col-sm-4 col-md-4">Method</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      {{
                        order.payment.method === "cod" ? "Cash on delivery" : ""
                      }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">D.Charge</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      ₹{{ order.payment.dc }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4">Extra Charge</div>
                    <div class="col-1 col-sm-1 col-md-1">:</div>
                    <div class="col-7 col-sm-7 col-md-7">
                      ₹{{ order.payment.extra }}
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 fw-bold">Total</div>
                    <div class="col-1 col-sm-1 col-md-1 fw-bold">:</div>
                    <div class="col-7 col-sm-7 col-md-7 fw-bold">
                      ₹{{ order.payment.total }}
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
                          v-for="(c, index) in constant.paymentStatus"
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
                          v-for="(c, index) in constant.orderStatus"
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
    <Loader v-show="loader" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";
import Constant from "@/constants/constant.json";

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      order: {
        customer: {},
        address: {},
        payment: {},
        shop: {
          address: {},
        },
        items: [],
      },
      orderId: "",
      loader: false,
      paymentStatus: -1,
      orderStatus: -1,
      constant:
        process.env.NODE_ENV === "development" ? Constant.dev : Constant.prod,
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
    updatePaymentStatus: async function() {
      if (this.paymentStatus === this.order.payment.status) return;
      if (confirm("Are you sure!") == true) {
        this.loader = true;
        try {
          const orderRef = doc(this.db, "orders", this.orderId);
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
      }
    },
    updateOrderStatus: async function() {
      if (this.orderStatus === this.order.status) return;
      if (confirm("Are you sure!") == true) {
        this.loader = true;
        try {
          const orderRef = doc(this.db, "orders", this.orderId);
          await updateDoc(orderRef, {
            "status": this.orderStatus,
          });
          this.orderStatus = -1;
          await this.getOrder();
          this.$toast.success(`Updated successfully`);
        } catch (err) {
          this.$toast.error(`Something went wrong` + err);
          this.loader = false;
        }
      }
    },
  },
};
</script>
