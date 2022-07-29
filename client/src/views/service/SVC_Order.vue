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
      <div class="col-8 ps-3 fw-bold">#{{ orderId }} <br /></div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container pb-5 ps-4 pe-4">
      <div class="row mt-3 border pt-3 pb-3">
        <div class="col-8 line-height-5">
          <h6 class="fw-bold text-body cart-font-size">
            {{ order.address.name }}
          </h6>
          <span class="text-secondary cart-font-size-1">
            {{ order.address.place }}
          </span>
        </div>
        <div class="col-4 capitalize display-inline ">
          {{ order.status }}
          <router-link to="" v-show="order.status === 'completed'"
            ><span class="material-icons delivered-icon cursor"
              >check_circle</span
            >
          </router-link>
          <router-link to="" v-show="order.status === 'cancelled'"
            ><span class="material-icons delivered-icon cursor text-danger"
              >cancel</span
            >
          </router-link>
        </div>
        <div class="col-12 text-muted mt-2 cart-font-size">
          <span>{{ order.date }} </span>
        </div>
        <div class="col-12 mt-1" v-if="order.payment.total">
          ₹{{ order.payment.total }}
        </div>
        <div class="col-12 mt-1" v-else>Not Paid</div>
        <div class="col-12 mt-1 cart-font-size">{{order.service}} Service</div>
      </div>

      <div class="row mt-2 text-secondary fs-6 fw-bolder">Bill Details</div>
      <div class="row mt-2 border pt-1 pb-2 cart-font-size">
        <div class="row cart-font-size-1">
          <div class="col-7 capitalize mt-2">
            Payment Status: {{ order.payment.status }}
          </div>
          <div class="col-5 text-end mt-2 fw-bold">
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
      const orderRef = doc(this.db, "svcorders", this.orderId);
      const orderSnap = await getDoc(orderRef);
      this.order = orderSnap.data();
      this.order.date = moment(this.order.date).format("DD/MM/YYYY hh:mm A");
      this.loader = false;
    },
  },
};
</script>
