<template>
  <div>
    <div class="container-fluid mt-1">
      <div class="row header-box">
        <div class="col-1">
          <!-- <span class="material-icons md-18 location-icon mt-1"
            >location_on</span
          > -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style=" fill:#000000;"
          >
            <path
              fill="#f80"
              d="M30,43H9c-2.209,0-4-1.791-4-4V18c0-2.209,1.791-4,4-4h21c2.209,0,4,1.791,4,4v21 C34,41.209,32.209,43,30,43z M28,34V23c0-1.657-1.343-3-3-3H14c-1.657,0-3,1.343-3,3v11c0,1.657,1.343,3,3,3h11 C26.657,37,28,35.657,28,34z"
            ></path>
            <path
              d="M34,27v8h-6.18c0.12-0.31,0.18-0.65,0.18-1v-7H34z"
              opacity=".07"
            ></path>
            <path
              d="M34,27.5v7h-6.05C27.99,34.34,28,34.17,28,34v-6.5H34z"
              opacity=".07"
            ></path>
            <path
              fill="#25a2e5"
              d="M39,5H18c-2.21,0-4,1.79-4,4v5h6c0-1.66,1.34-3,3-3h11c1.66,0,3,1.34,3,3v11c0,1.66-1.34,3-3,3H23 c-1.66,0-3-1.34-3-3v-5h-6v10c0,2.21,1.79,4,4,4h21c2.21,0,4-1.79,4-4V9C43,6.79,41.21,5,39,5z"
            ></path>
            <path
              d="M20.18,13C20.06,13.31,20,13.65,20,14h-6.02v-1H20.18z"
              opacity=".05"
            ></path>
            <path
              d="M20.05,13.5C20.01,13.66,20,13.83,20,14h-6.02v-0.5H20.05z"
              opacity=".07"
            ></path>
            <rect
              width="6.019"
              height="1"
              x="13.981"
              y="20"
              opacity=".05"
              transform="rotate(-180 16.99 20.5)"
            ></rect>
            <rect
              width="6.019"
              height=".5"
              x="13.981"
              y="20"
              opacity=".07"
              transform="rotate(-180 16.99 20.25)"
            ></rect>
          </svg>
        </div>
        <div class="col-7">
          <!-- <h6 class="mt-2">My home</h6> -->
        </div>
        <div class="col-4 text-end">
          <router-link class="app-logo" to="/account">
            <span class="material-icons md-18 user-icon">account_circle</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container-fluid pb-3">
      <div class="row">
        <div class="col-12 p-3">
          <div id="demo" class="carousel slide" data-bs-ride="carousel">
            <!-- Indicators/dots -->
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="0"
                class="active"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#demo"
                data-bs-slide-to="2"
              ></button>
            </div>

            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://www.gstatic.com/webp/gallery/1.webp"
                  alt="Los Angeles"
                  class="img-fluid rounded d-block"
                  style="width:100%"
                />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.gstatic.com/webp/gallery/5.webp"
                  alt="Los Angeles"
                  class="img-fluid rounded d-block"
                  style="width:100%"
                />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.gstatic.com/webp/gallery/4.webp"
                  alt="Los Angeles"
                  class="img-fluid rounded d-block"
                  style="width:100%"
                />
                <div class="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
            </div>

            <!-- Left and right controls/icons -->
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="text-center text2 fw-bold text-danger">
              Delivery with in {{ constant.deliveryLimitKm }} Km only
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6 class="side-head mt-3">What do you like?</h6>
          </div>
          <div class="col-12">
            <div class="row">
              <div
                class="col-3 text-center"
                v-for="(food, index) in constant.foodCategories"
                :key="index"
                v-show="food.active"
              >
                <img :src="food.url" class="w-100 rounded-circle shadow-sm" />
                <span class="cart-font-size-1">{{ food.name }}</span>
              </div>
            </div>
          </div>
        </div>
<div class="row">
        <h5 class="side-head mt-3">Shops types</h5>
        <div
          class="col-4 pt-2"
          v-for="(types, index) in shopTypes"
          :key="index"
          @click="gotoShops(types)"
        >
          <div class="chip text-nowrap">
            <div class="chip-content text-capitalize text-nowrap">
              {{ types }}
            </div>
          </div>
        </div>
      </div>

      <!-- Fish/Chicken -->
      <div class="row">
        <div class="col-8">
          <h6 class="side-head mt-3">Fish and Chicken</h6>
        </div>
        <div class="col-4 mt-3 text-end"></div>

        <div
          class="col-6 mt-2"
          v-for="shop in allShops"
          :key="shop.id"
          v-show="shop.category.every((i) => ['fish', 'chicken'].includes(i))"
          @click="gotoShop(shop.id)"
        >
          <!-- Card -->
          <div class="card" :class="{ blackWhite: !shop.open }">
            <!--Card image-->
            <div>
              <img class="card-img-top" :src="shop.photoUrl" />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h6 class="card-title shop-name fw-bolder">{{ shop.name }}</h6>
              <h6 class="card-title shop-name">({{ shop.localName }})</h6>
              <h6 class="card-title shop-name text-muted">
                {{ shop.address.street }}
              </h6>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>

      <!-- Fish/Chicken end-->

      <div class="row">
        <div class="col-8"><h6 class="side-head mt-3">Your partners</h6></div>
        <div class="col-4 mt-3 text-end">
          <router-link to="" class="text-danger" @click="gotoShops('all')">
            View all
          </router-link>
        </div>

        <div
          class="col-6 mt-2"
          v-for="shop in allShops"
          :key="shop.id"
          v-show="!shop.category.every((i) => ['fish', 'chicken'].includes(i))"
          @click="gotoShop(shop.id)"
        >
          <!-- Card -->
          <div class="card" :class="{ blackWhite: !shop.open }">
            <!--Card image-->
            <div>
              <img class="card-img-top" :src="shop.photoUrl" />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h6 class="card-title shop-name fw-bolder">{{ shop.name }}</h6>
              <h6 class="card-title shop-name">({{ shop.localName }})</h6>
              <h6 class="card-title shop-name text-muted">
                {{ shop.address.street }}
              </h6>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>
    </div>
    <div class="cart-div">
      <router-link to="/cart">
        <span class="count" v-show="cartLength">{{ cartLength }}</span>
        <span class="material-icons md-18 cart-icon">shopping_cart</span>
      </router-link>
    </div>

    <!-- Modal -->
    <div
      class="modal fade animate"
      id="order-modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog bottom-modal">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-black fs-6" id="exampleModalLabel">
              Current Orders
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bottom-modal-scroll">
            <div class="container ps-4 pe-4 mt-2" v-if="orders.length">
              <div
                class="row shadow p-3 mb-3 bg-body rounded cart-font-size-1"
                v-for="order in orders"
                :key="order.id"
                @click="gotoOrder(order.id)"
              >
                <div class="col-8 line-height-5">
                  <h6 class="fw-bold text-body cart-font-size-1">
                    {{ order.shop.name }}
                  </h6>
                  <span class="text-secondary">
                    {{ order.shop.address.street }}
                  </span>
                </div>
                <div class="col-4 capitalize text-center">
                  {{ order.status }}<br />
                  <router-link to="" v-show="order.status === 'confirmed'"
                    ><span
                      class="material-icons delivered-icon cursor text-danger"
                      >recommend</span
                    >
                  </router-link>
                  <router-link to="" v-show="order.status === 'outForDelivery'"
                    ><span
                      class="material-icons delivered-icon cursor text-danger"
                      >directions_bike</span
                    >
                  </router-link>
                  <router-link to="" v-show="order.status === 'pending'"
                    ><span
                      class="material-icons delivered-icon cursor text-danger"
                      >pending_actions</span
                    >
                  </router-link>
                </div>
                <div class="col-12 mt-2">
                  <span v-for="item in order.items" :key="item.id">
                    {{ item.name }} ({{ item.qty }}),
                  </span>
                </div>
                <div class="col-12 text-muted">
                  <span>{{ order.date }} </span>
                </div>
                <div class="col-12 mt-1">₹{{ order.payment.total }}</div>
                {{ order.timer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Loader v-show="loader" />
    <div class="home-bottom-order w-100" v-show="orders.length">
      <button class="fancyshrink" @click="getOrders()">
        Current Orders
        <router-link to="" class="home-current-button"
          ><span class="mt-2 material-icons text-white">arrow_forward_ios</span>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import auth from "@/mixins/auth/auth.js";
import shop from "@/mixins/shop/shops.js";
import Loader from "@/components/loader";
import moment from "moment";

export default {
  mixins: [auth, shop],
  components: { Loader },
  data() {
    return {
      db: getFirestore(),
      cartLength: 0,
      orders: [],
    };
  },
  async mounted() {
    const user = await this.checkAuth();
    this.getShopTypes();
    this.getShops("all");
    let items =
      window.sessionStorage.getItem("cartItems") &&
      JSON.parse(window.sessionStorage.getItem("cartItems"));
    if (items) this.cartLength = items.length;
    await this.getOrders(user.uid, true);
  },
  methods: {
    gotoShops: function(flag) {
      this.$router.push({ path: "/shops", query: { filter: flag } });
    },
    gotoShop: function(id) {
      this.$router.push(`/shop/${id}`);
    },
    getOrders: async function(uid = this.$store.state.user.uid, flag) {
      this.loader = true;
      let sDate = new Date();
      sDate.setHours(0, 0, 0, 0);
      sDate = sDate.getTime();
      const q = query(
        collection(this.db, "orders"),
        where("customer.id", "==", uid),
        where("date", ">=", sDate),
        where("status", "in", ["pending", "confirmed", "outForDelivery"])
      );
      const querySnapshot = await getDocs(q);
      const orders = [];
      querySnapshot.forEach(async (doc) => {
        const order = doc.data();
        order.id = doc.id;
        order.date = moment(order.date).format("DD/MM/YYYY hh:mm A");
        orders.push(order);
      });
      this.orders = orders;
      this.loader = false;
      if (!flag) window.$("#order-modal").modal("show");
    },
    gotoOrder: function(id) {
      window.$("#order-modal").modal("hide");
      setTimeout(() => {
        this.$router.push(`/order/${id}`);
      }, 1000);
    },
  },
};
</script>
