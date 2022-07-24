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
      <div class="col-8 ps-3 fw-bold">
        #{{ orderId }} <br />
        <div class="text-muted capitalize cart-font-size-1 fw-lighter">
          {{ order.status }}, {{ order.items.length }} Items, ₹{{
            order.payment.total
          }}
        </div>
      </div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container pb-5 ps-4 pe-4">
      <div class="row mt-3 border pt-3 pb-3">
        <div class="col-sm-2 col-2">
          <div class="row">
            <div class="col-sm-12 col-12 text-center">
              <router-link to=""
                ><span class="material-icons cursor order-details-icon"
                  >location_on</span
                >
              </router-link>
            </div>
            <div class="col-sm-12 col-12 text-center mt-2">
              <span class="vl"></span>
            </div>
            <div class="col-sm-12 col-12 text-center mt-4">
              <router-link to=""
                ><span class="material-icons cursor order-details-icon"
                  >house</span
                >
              </router-link>
            </div>
            <div
              class="col-sm-12 col-12 text-center mt-4"
              v-show="
                order.status === 'delivered' || order.status === 'cancelled'
              "
            >
              <router-link to="" v-show="order.status === 'delivered'"
                ><span
                  class="material-icons delivered-icon cursor"
                  >check_circle</span
                >
              </router-link>
              <router-link to="" v-show="order.status === 'cancelled'"
                ><span
                  class="material-icons delivered-icon cursor text-danger"
                  >cancel</span
                >
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-9">
          <div class="row">
            <div class="col-12 col-sm-12 line-height-5">
              <h6 class="fw-bolder text-danger cart-font-size">
                {{ order.shop.name }} ({{ order.shop.localName }})
              </h6>
              <span class="text-muted cart-font-size-1">
                {{ order.shop.address.street }}, {{ order.shop.address.city }}
              </span>
            </div>
            <div class="col-12 col-sm-12 line-height-5 mt-5 border-bottom pb-3">
              <h6 class="fw-bolder cart-font-size">
                {{ order.address.house }}
              </h6>
              <span class="text-muted cart-font-size-1">
                {{ order.address.place }},{{ order.address.landmark }},
              </span>
            </div>
            <div
              class="col-12 col-sm-12 line-height-5 mt-3"
              v-show="
                order.status === 'delivered' || order.status === 'cancelled'
              "
            >
              <span class="text-muted cart-font-size-1">
                Order
                {{ order.status === "delivered" ? "delivered" : "cancelled" }}
                on {{ order.date }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="col-sm-12 col-12"
          v-show="
            order.status === 'pending' ||
              order.status === 'confirmed' ||
              order.status === 'outForDelivery'
          "
        >
          <div class="progress-track">
            <ul id="progressbar">
              <li
                class="step0"
                id="step1"
                :class="{
                  'active-progress':
                    order.status === 'pending' ||
                    order.status === 'confirmed' ||
                    order.status === 'outForDelivery',
                }"
              >
                Pending
              </li>
              <li
                class="step0"
                id="step2"
                :class="{
                  'active-progress':
                    order.status === 'confirmed' ||
                    order.status === 'outForDelivery',
                }"
              >
                <span class="">Order Confirmed </span>
              </li>
              <li
                class="step0 text-center "
                id="step3"
                :class="{
                  'active-progress': order.status === 'outForDelivery',
                }"
              >
                <div class="progress-out-for-delivery">Dispatched</div>
              </li>
              <li class="step0 text-end" id="step4">Delivered</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mt-2 text-secondary fs-6 fw-bolder">Bill Details</div>
      <div class="row mt-2 border pt-3 pb-3 cart-font-size">
        <div
          class="row cart-font-size mt-1"
          v-for="item in order.items"
          :key="item.id"
        >
          <div class="col-1">
            <span
              class="material-icons cursor fs-6"
              :style="item.veg ? 'color: green;' : 'color: red;'"
              >api</span
            >
          </div>
          <div class="col-7 text-secondary">
            {{ item.name }} x {{ item.qty
            }}{{ item.unit == "kg" ? " Kg" : item.unit == "lt" ? " L" : "" }}
            <br />
            <span class="cart-font-size-1">{{ item.localName }}</span>
          </div>
          <div class="col-4 text-secondary text-end">
            ₹{{ item.price * item.qty }}
          </div>
        </div>
        <div class="row"><hr class="dashed-border m-2" /></div>
        <div class="row cart-font-size-1">
          <div class="col-7 text-secondary">
            Item Total
          </div>
          <div class="col-5 text-secondary text-end">₹{{ itemTotal }}</div>
          <div class="col-7 text-secondary">
            Delivery Charge
          </div>
          <div class="col-5 text-secondary text-end">
            ₹{{ order.payment.dc }}
          </div>
          <div class="col-7 capitalize mt-2">
            Payment Method: {{ order.payment.method }}<br />
            Payment Status: {{ order.payment.status }}
          </div>
          <div class="col-5 text-end mt-3 fw-bold">
            Total: ₹{{ order.payment.total }}
          </div>
        </div>
      </div>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import moment from "moment";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";

export default {
  components: { Loader },
  mixins: [auth],
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
      orderId: useRoute().params.id,
      itemTotal: 0,
    };
  },
  async mounted() {
    this.loader = true;
    await this.checkAuth();
    this.getOrder();
    this.loader = false;
  },
  methods: {
    getOrder: async function() {
      this.loader = true;
      const orderRef = doc(this.db, "orders", this.orderId);
      const orderSnap = await getDoc(orderRef);
      this.order = orderSnap.data();
      this.order.date = moment(this.order.date).format("DD/MM/YYYY hh:mm A");
      this.itemTotal = this.order.items.reduce((accumulator, item) => {
        return accumulator + item.qty * item.price;
      }, 0);
      this.loader = false;
    },
  },
};
</script>
