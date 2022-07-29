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
      <div class="col-8 ps-3">My Bookings</div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container ps-4 pe-4 mt-2" v-if="orders.length">
      <div
        class="row shadow p-3 mb-3 bg-body rounded cart-font-size-1"
        v-for="order in orders"
        :key="order.id"
        @click="gotoOrder(order.id)"
      >
        <div class="col-8 line-height-5">
          <h6 class="fw-bold text-body cart-font-size-1">
            {{ order.address.name }}
          </h6>
          <span class="text-secondary">
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
        <div class="col-12 text-muted mt-2">
          <span>{{ order.date }} </span>
        </div>
        <div class="col-12 mt-1" v-if="order.payment.total">
          ₹{{ order.payment.total }}
        </div>
        <div class="col-12 mt-1" v-else>Not Paid</div>
      </div>
    </div>

    <div class="container" v-if="!orders.length">
      <div class="row">
        <div class="col-12 text-center">
          <span class="material-icons common-icon cursor empty-address-icon"
            >business_center</span
          >
          <p>No Orders</p>
        </div>
      </div>
    </div>

    <div class="text-center" v-if="orders.length">
      <button @click="getOrders(uid)" class="goto-add-address-button">
        VIEW MORE ORDERS
      </button>
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
  orderBy,
  limit,
} from "firebase/firestore";
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";
import moment from "moment";

export default {
  components: { Loader },
  mixins: [auth],
  data() {
    return {
      db: getFirestore(),
      orders: [],
      uid: "",
    };
  },
  async mounted() {
    this.loader = true;
    const user = await this.checkAuth();
    this.uid = user.uid;
    await this.getOrders(user.uid, 5);
    this.loader = false;
  },
  methods: {
    getOrders: async function(uid, lmt) {
      this.loader = true;
      const q = query(
        collection(this.db, "svcorders"),
        where("customer.id", "==", uid),
        orderBy("date", "desc"),
        limit(lmt)
      );
      const querySnapshot = await getDocs(q);
      const orders = [];
      querySnapshot.forEach((doc) => {
        const order = doc.data();
        order.id = doc.id;
        order.date = moment(order.date).format("DD/MM/YYYY hh:mm A");
        orders.push(order);
      });
      this.orders = orders;
      this.loader = false;
    },
    gotoOrder: function(id) {
      this.$router.push(`/svcorder/${id}`);
    },
  },
};
</script>
