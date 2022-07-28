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
                  <div class="row">
                    <div class="col-6 col-sm-6 col-md-6">
                      <h6 class="card-title fw-bolder">Items</h6>
                    </div>
                    <div
                      class="col-6 col-sm-6 col-md-6 text-end"
                      v-show="order.status === 'pending'"
                    >
                      <router-link to=""  @click="openItems()"
                        ><span
                          class="material-icons common-icon cursor add-item-qty fs-1"
                          >add_shopping_cart</span
                        >
                      </router-link>
                    </div>
                  </div>
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
                            <div class="row">
                              <div
                                class="col-3 col-sm-3 col-md-3"
                                v-show="order.status === 'pending'"
                              >
                                <router-link
                                  to=""
                                  @click="updateCartItem('dec', item)"
                                  ><span
                                    class="material-icons common-icon cursor add-item-qty"
                                    >do_not_disturb_on</span
                                  >
                                </router-link>
                              </div>
                              <div
                                class="col-6 col-sm-6 col-md-6"
                                :class="{
                                  'text-center': order.status === 'pending',
                                }"
                              >
                                {{ item.qty }}
                                {{ item.unit == "kg" ? item.unit : "" }}
                              </div>
                              <div
                                class="col-3 col-sm-3 col-md-3"
                                v-show="order.status === 'pending'"
                              >
                                <router-link
                                  to=""
                                  @click="updateCartItem('inc', item)"
                                  ><span
                                    class="material-icons common-icon cursor add-item-qty"
                                    >add_circle</span
                                  >
                                </router-link>
                              </div>
                            </div>
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
                          <div
                            class="col-12 col-sm-12 col-md-12 text-end"
                            v-show="order.status === 'pending'"
                          >
                            <router-link to="" @click="deleteItem(item)"
                              ><span class="material-icons text-danger"
                                >delete</span
                              >
                            </router-link>
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
                      <h6 class="fw-normal order-font-size" v-show="order.status === 'cancelled'">({{order.cReason}})</h6>
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

    <!-- The Modal -->
    <div class="modal fade" id="itemModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">
              Add Items from : {{ this.order.shop.name }}
            </h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="table-responsive">
              <table id="example" class="table app-table-hover mb-0 text-left">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Photo</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in allItems" :key="index">
                    <td class="cell">{{ item.name }}</td>
                    <td class="cell">{{ item.price }}</td>
                    <td>
                      <img :src="item.photoUrl" class="item-img-size" />
                    </td>
                    <td class="cell">
                      <i
                        class="material-icons common-icon cursor add-item-qty"
                        @click="addNewItem(item)"
                        >verified</i
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  query,
  getDocs,
  collection,
  where,
} from "firebase/firestore";

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
        shop: {
          address: {},
        },
        items: [],
      },
      orderId: "",
      loader: false,
      paymentStatus: -1,
      orderStatus: -1,
      gst: 0,
      totalItemAmount: 0,
      allItems: [],
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
      const orderRef = doc(this.db, "orders", this.orderId);
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
              const orderRef = doc(this.db, "orders", this.orderId);
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
    deleteItem: async function(item) {
      if (this.order.items.length < 2) {
        this.$swal("Items cannot be empty or cancel the order");
        return;
      }
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          background: "#fff",
          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            this.loader = true;
            const newItemArr = this.order.items.filter((object) => {
              return object.id !== item.id;
            });

            const orderRef = doc(this.db, "orders", this.orderId);
            await updateDoc(orderRef, {
              items: newItemArr,
              "payment.total": this.order.payment.total - item.total,
            });
            await this.getOrder();
          }
        });
    },
    updateCartItem: async function(type, selectedItem) {
      this.totalItemAmount = 0;
      this.loader = true;

      for (let i = 0; i < this.order.items.length; i++) {
        if (this.order.items[i].id === selectedItem.id) {
          if (type === "inc") {
            //limit qty by adding
            if (
              selectedItem.unit === "nb" ||
              selectedItem.unit === "lt" ||
              (selectedItem.unit === "kg" && selectedItem.eatable)
            ) {
              this.order.items[i].qty = this.order.items[i].qty + 1;
            } else if (selectedItem.unit === "kg" && !selectedItem.eatable) {
              this.order.items[i].qty = this.order.items[i].qty + 0.5;
            }
          } else {
            if (
              selectedItem.unit === "nb" ||
              selectedItem.unit === "lt" ||
              (selectedItem.unit === "kg" && selectedItem.eatable)
            ) {
              this.order.items[i].qty !== 1
                ? (this.order.items[i].qty = this.order.items[i].qty - 1)
                : null;
            } else if (selectedItem.unit === "kg" && !selectedItem.eatable) {
              this.order.items[i].qty !== 0.5
                ? (this.order.items[i].qty = this.order.items[i].qty - 0.5)
                : null;
            }
          }

          this.order.items[i].total =
            this.order.items[i].qty * this.order.items[i].price;
        }

        this.totalItemAmount = this.totalItemAmount + this.order.items[i].total;
        if (i === this.order.items.length - 1) {
          await this.calculateAmount();
        }
      }
    },
    calculateAmount: async function() {
      const total =
        this.totalItemAmount +
        this.gst +
        this.order.payment.dc +
        this.order.payment.extra;

      const orderRef = doc(this.db, "orders", this.orderId);
      await updateDoc(orderRef, {
        items: this.order.items,
        "payment.total": total,
      });
      await this.getOrder();
    },
    openItems: async function() {
      const q = query(
        collection(this.db, "items"),
        where("shopId", "==", this.order.shop.id),
        where("active", "==", true)
      );
      const querySnapshot = await getDocs(q);
      const allItems = [];
      querySnapshot.forEach((doc) => {
        const item = doc.data();
        item.id = doc.id;
        allItems.push(item);
      });

      this.allItems = allItems.filter(
        ({ id: id1 }) => !this.order.items.some(({ id: id2 }) => id2 === id1)
      );

      window.$("#itemModal").modal("show");
    },
    addNewItem: async function(item) {
      let qty = prompt("Please enter Qty:");
      if (qty == null || qty == "" || isNaN(qty)) {
        return;
      }

      window.$("#itemModal").modal("hide");
      this.loader = true;

      delete item.photoUrl;
      delete item.active;
      delete item.shopId;

      item.qty = +qty;
      item.total = item.price * item.qty;

      this.order.items.push(item);

      const orderRef = doc(this.db, "orders", this.orderId);
      await updateDoc(orderRef, {
        items: this.order.items,
        "payment.total": this.order.payment.total + item.total,
      });
      await this.getOrder();
    },
  },
};
</script>
