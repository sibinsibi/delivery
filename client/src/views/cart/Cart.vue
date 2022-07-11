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
      <div class="col-8 ps-3">
        {{ shop.name }}
        <span class="text-muted" v-if="shop">({{ shop.localName }})</span>
      </div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container-fluid" v-if="allItems.length">
      <div class="row ps-2 pe-2 mt-2">
        <div class="col-12">
          <div class="row each-item">
            <div
              class="col-12 mt-2 border-bottom"
              v-for="item in allItems"
              :key="item.id"
            >
              <div class="row w-100 mb-2">
                <div class="col-1">
                  <span
                    class="material-icons cursor mt-2 fs-6"
                    :style="item.veg ? 'color: green;' : 'color: red;'"
                    >api</span
                  >
                </div>
                <div class="col-6">
                  <h6 class="product-name mt-2 cart-font-size">
                    {{ item.name }}
                  </h6>
                  <h6 class="text-muted cart-font-size">
                    ({{ item.localName }})
                  </h6>
                </div>
                <div class="col-2 cart-font-size">
                  {{ item.qty }}
                </div>
                <div class="col-2">
                  <h6 class="cart-font-size">
                    ₹{{ item.price * item.qty }}
                    {{
                      item.unit == "kg" ? "/Kg" : item.unit == "lt" ? "/L" : ""
                    }}
                  </h6>
                </div>
                <div class="col-1">
                  <router-link to="/"
                    ><span class="material-icons common-icon cursor"
                      >delete</span
                    >
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row ps-2 pe-2 mt-4">
        <button
          type="button"
          class="btn btn-outline-danger btn-sm w-100"
          v-show="!selectedAddress"
          @click="openAddressModal"
        >
          Select address
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm w-100"
          v-show="selectedAddress"
          @click="openAddressModal"
        >
          Update address
        </button>
      </div>

      <div class="row ps-2 pe-2 mt-1" v-show="selectedAddress">
        <div class="container ps-2 pe-2 mt-2">
          <div class="row shadow p-3 mb-3 bg-body rounded">
            <div class="col-2">
              <router-link to="" class="text-end"
                ><span class="material-icons md-18 cursor common-icon"
                  >house</span
                ></router-link
              >
            </div>
            <div class="col-10">
              <h6 class="fw-bold text-body">{{ selectedAddress.house }}</h6>
              <span class="text-secondary">
                {{ selectedAddress.name }} - {{ selectedAddress.mob }}<br />
                {{ selectedAddress.place }}, {{ selectedAddress.landmark
                }}<br />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <h6 class="fw-bolder">Bill Details</h6>
      </div>

      <div class="row ps-2 pe-2 mt-1" v-show="selectedAddress">
        <div class="container ps-2 pe-2 mt-2">
          <div class="row shadow p-3 mb-3 bg-body rounded">
            <div class="col-8">
              <h6 class="text-body cart-font-size">Item Total</h6>
            </div>
            <div class="col-4">
              <h6 class="text-body cart-font-size">₹100</h6>
            </div>
            <div class="col-8">
              <h6 class="text-body cart-font-size">Delivery fee</h6>
            </div>
            <div class="col-4">
              <h6 class="text-body cart-font-size">₹100</h6>
            </div>
            <div class="col-8 border-bottom">
              <h6 class="text-body cart-font-size">Taxes and charges</h6>
            </div>
            <div class="col-4 border-bottom">
              <h6 class="text-body cart-font-size">₹100</h6>
            </div>
            <div class="col-8 mt-2">
              <h6 class="text-body cart-font-size fw-bold">To Pay</h6>
            </div>
            <div class="col-4 mt-2">
              <h6 class="text-body cart-font-size fw-bold">₹100</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid text-center" v-show="showEmpty">
      <router-link to="/">
        <span class="material-icons cart-icon empty-cart">shopping_cart</span>
      </router-link>
      <br />
      <router-link to="/" class="btn btn-outline-danger">
        HOME
      </router-link>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="address-modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              Select your address
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container ps-4 pe-4 mt-2" v-if="allAddress.length">
              <div
                class="row shadow p-3 mb-3 bg-body rounded"
                v-for="address in allAddress"
                :key="address.id"
                @click="selectAddress(address)"
              >
                <div class="col-2">
                  <router-link to="" class="text-end"
                    ><span class="material-icons md-18 cursor common-icon"
                      >house</span
                    ></router-link
                  >
                </div>
                <div class="col-10">
                  <h6 class="fw-bold text-body">{{ address.house }}</h6>
                  <span class="text-secondary">
                    {{ address.name }} - {{ address.mob }}<br />
                    {{ address.place }}, {{ address.landmark }}<br />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <Loader v-show="loader" />
  </div>
</template>

<script>
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";

export default {
  components: { Loader },
  mixins: [auth],
  data() {
    return {
      db: getFirestore(),
      shop: "",
      allItems: [],
      loader: false,
      showEmpty: false,
      allAddress: [],
      selectedAddress: false,
    };
  },
  async mounted() {
    this.loader = true;
    await this.checkAuth();
    this.getCartFromLocal();
    //this.getAddress(this.$store.state.user.uid);
    this.loader = false;
  },
  methods: {
    openAddressModal: async function() {
      const q = query(
        collection(this.db, "address"),
        where("id", "==", this.$store.state.user.uid)
      );
      const querySnapshot = await getDocs(q);
      const allAddress = [];
      querySnapshot.forEach((doc) => {
        const address = doc.data();
        address.id = doc.id;
        allAddress.push(address);
      });
      this.allAddress = allAddress;
      window.$("#address-modal").modal("show");
    },
    selectAddress: function(address) {
      this.selectedAddress = address;
      window.$("#address-modal").modal("hide");
    },
    getShop: async function(shopId) {
      const docRef = doc(this.db, "shops", shopId);
      const docSnap = await getDoc(docRef);
      this.shop = docSnap.data();
    },
    getItemFromDB: async function(id) {
      const docRef = doc(this.db, "items", id);
      const docSnap = await getDoc(docRef);
      const item = docSnap.data();
      return item;
    },
    getCartFromLocal: async function() {
      let items =
        window.sessionStorage.getItem("cartItems") &&
        JSON.parse(window.sessionStorage.getItem("cartItems"));
      if (items && items.length) {
        this.getShop(items[0].shopId);
        const allItems = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemFromDB = await this.getItemFromDB(item.id);
          itemFromDB.qty = item.qty;
          itemFromDB.total = itemFromDB.price * itemFromDB.qty;
          allItems.push(itemFromDB);
        }
        this.allItems = allItems;
        if (!this.allItems) this.showEmpty = true;
      }
    },
    updateCartItem: function(type, unit, eatable) {
      if (type === "inc") {
        //limit qty by adding
        if (unit === "nb" || unit === "lt" || (unit === "kg" && eatable)) {
          this.itemQty = this.itemQty + 1;
        } else if (unit === "kg" && !eatable) {
          this.itemQty = this.itemQty + 0.5;
        }
      } else {
        if (unit === "nb" || unit === "lt" || (unit === "kg" && eatable)) {
          this.itemQty !== 1 ? (this.itemQty = this.itemQty - 1) : null;
        } else if (unit === "kg" && !eatable) {
          this.itemQty !== 0.5 ? (this.itemQty = this.itemQty - 0.5) : null;
        }
      }
    },
    addTocart: async function() {
      let items = await this.getCartFromLocal();

      if (items && items.length) {
        const item = items[0];
        if (item.shopId !== this.selectedItem.shopId) {
          this.$swal
            .fire({
              title: "Replace cart item",
              text: `Your cart contains items from ${item.shop.name}. Do you want to discard the selection and add items from ${this.shop.name}`,
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Replace",
              background: "#fff",
              backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
            })
            .then(async (result) => {
              if (result.isConfirmed) {
                //replce item if different shops
                items = [];
                this.addItem(items);
              } else return false;
            });
        } else {
          this.addItem(items);
        }
      } else {
        // add first item
        this.addItem(items);
      }
    },
    addItem: async function(items) {
      let itemArr = [];
      if (items && items.length) {
        itemArr = items;
        for (let i = 0; i < itemArr.length; i++) {
          if (itemArr[i].id === this.selectedItem.id) {
            itemArr[i].qty = this.itemQty;
            window.sessionStorage.setItem("cartItems", JSON.stringify(itemArr));
            window.$("#cart-modal").modal("hide");
            this.$toast.success(`${itemArr[i].name} added to cart`);
            this.itemQty = 1;
            this.selectedItem = "";
            return;
          }
        }
      }
      const item = this.selectedItem;
      item.qty = this.itemQty;
      item.shop = this.shop;
      itemArr.push(item);
      window.sessionStorage.setItem("cartItems", JSON.stringify(itemArr));
      window.$("#cart-modal").modal("hide");
      this.itemQty = 1;
      this.selectedItem = "";
      this.$toast.success(`${item.name} added to cart`);
      await this.getCartFromLocal();
    },
  },
};
</script>
