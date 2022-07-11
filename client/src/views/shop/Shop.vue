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
        {{ shop.name }} <span class="text-muted">({{ shop.localName }})</span>
      </div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
        <router-link to="/cart">
          <span class="count-1" v-show="cartLength">{{ cartLength }}</span>
          <span class="material-icons common-icon cursor">shopping_cart</span>
        </router-link>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-2 shadow-sm">
          <div class="row w-100">
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="both"
                name="veg-filter"
                @click="filterItemsVeg('both')"
              />
              <label class="form-check-label" for="both">
                Both
              </label>
            </div>
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="veg"
                name="veg-filter"
                @click="filterItemsVeg('veg')"
              />
              <label class="form-check-label" for="veg">
                Veg
              </label>
            </div>
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="non-veg"
                name="veg-filter"
                @click="filterItemsVeg('non')"
              />
              <label class="form-check-label" for="non-veg">
                Non
              </label>
            </div>
            <div class="col-3 mt-2 text-center">
              <input
                class="form-check-input"
                type="radio"
                id="clear"
                name="veg-filter"
                onclick="window.location.reload()"
              />
              <label class="form-check-label" for="clear">
                Clear
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        class="example1"
        v-if="
          shop.category.every((i) => ['fish', 'chicken'].includes(i)) &&
            shop.open
        "
      >
        <h6>★ Price will be change according to the market price ★</h6>
      </div>
      <div class="text-center pendulam-base" v-show="showPendulam">
        <div class="thread">
          <div class="pendulum">
            <router-link to=""
              ><span class="material-icons common-icon cursor">lock</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row ps-2 pe-2">
        <div
          class="col-12 mt-2 rounded each-item"
          v-for="item in allItems"
          :key="item.id"
        >
          <div class="row mb-2">
            <div class="col-7">
              <span
                class="material-icons cursor fs-6"
                :style="item.veg ? 'color: green;' : 'color: red;'"
                >api</span
              >
              <h6 class="product-name mt-2">{{ item.name }}</h6>
              <h6 class="text-muted">({{ item.localName }})</h6>
              <h6 class="">
                ₹{{ item.price }}
                {{ item.unit == "kg" ? "/Kg" : item.unit == "lt" ? "/L" : "" }}
              </h6>
            </div>
            <div class="col-5 text-center" :class="{ blackWhite: !shop.open }">
              <img
                :src="item.photoUrl"
                class="mt-3 height-item each-item"
              /><br />
              <button
                class="mt-2 btn btn-outline-danger btn-sm shadow-sm"
                @click="openCartModal(item)" :disabled="!shop.open"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="cart-modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              {{ selectedItem.name }}
            </h6>
            <h6 class="text-muted mt-2 fs-7">({{ selectedItem.localName }})</h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12 text-center">
                <img :src="selectedItem.photoUrl" class="w-50" />
              </div>
            </div>
            <div
              class="d-flex justify-content-center mt-2"
              v-show="!selectedItem.eatable || selectedItem.unit === 'nb'"
            >
              <div class="p-2 bd-highlight">
                <router-link
                  to=""
                  @click="
                    updateCartItem(
                      'dec',
                      selectedItem.unit,
                      selectedItem.eatable
                    )
                  "
                  ><span class="material-icons common-icon cursor add-item-qty"
                    >do_not_disturb_on</span
                  >
                </router-link>
              </div>
              <div class="p-2 bd-highlight">
                {{ itemQty }}
                {{ selectedItem.unit == "kg" ? selectedItem.unit : "" }}
              </div>
              <div class="p-2 bd-highlight">
                <router-link
                  to=""
                  @click="
                    updateCartItem(
                      'inc',
                      selectedItem.unit,
                      selectedItem.eatable
                    )
                  "
                  ><span class="material-icons common-icon cursor add-item-qty"
                    >add_circle</span
                  >
                </router-link>
              </div>
            </div>

            <div class="row">
              <div class="col-12 text-center">
                ₹{{ selectedItem.price * itemQty }}
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
            <button
              type="button"
              class="btn btn-danger btn-sm"
              @click="addTocart()"
            >
              ADD
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
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

export default {
  components: { Loader },
  mixins: [auth],
  data() {
    return {
      db: getFirestore(),
      shopId: this.$route.params.id,
      shop: { category: [] },
      allItems: [],
      loader: false,
      tempItems: [],
      selectedItem: "",
      itemQty: 1,
      cartLength: 0,
      showPendulam: false
    };
  },
  async mounted() {
    this.loader = true;
    await this.checkAuth();
    document.getElementById("both").checked = true;
    this.getShop();
    this.getItems();
    this.getCartFromLocal();
    this.loader = false;
  },
  methods: {
    getShop: async function() {
      const docRef = doc(this.db, "shops", this.shopId);
      const docSnap = await getDoc(docRef);
      this.shop = docSnap.data();
      if(!this.shop.open)this.showPendulam = true
    },
    getItems: async function() {
      const q = query(
        collection(this.db, "items"),
        where("shopId", "==", this.shopId)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.size) {
        const allItems = [];
        querySnapshot.forEach((doc) => {
          const item = doc.data();
          if (item.active) {
            item.id = doc.id;
            allItems.push(item);
          }
        });
        this.allItems = allItems;
        this.tempItems = this.allItems;
      }
    },
    getCartFromLocal: async function() {
      let items =
        window.sessionStorage.getItem("cartItems") &&
        JSON.parse(window.sessionStorage.getItem("cartItems"));
      if (items && items.length) this.cartLength = items.length;
      return items;
    },
    filterItemsVeg: async function(val) {
      if (val === "both") {
        this.allItems = this.tempItems;
        return;
      }
      let flag = true;
      if (val === "veg") {
        flag = true;
      } else if (val === "non") {
        flag = false;
      }
      this.allItems = this.tempItems.filter((item) => item.veg === flag);
    },
    openCartModal: async function(item) {
      //if(!this.shop.open) return
      this.itemQty = 1;
      this.selectedItem = item;
      const items = await this.getCartFromLocal();
      if (items && items.length) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].id === this.selectedItem.id) {
            this.itemQty = items[i].qty;
          }
        }
      }
      window.$("#cart-modal").modal("show");
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
