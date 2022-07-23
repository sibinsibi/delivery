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

    <div class="container-fluid pb-5" v-if="allItems.length">
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
                <div class="col-4">
                  <h6
                    class="product-name mt-2 cart-font-size-1"
                    :class="{ 'text-black-50': !item.active }"
                  >
                    {{ item.name }}
                  </h6>
                  <h6 class="text-muted cart-font-size-1">
                    ({{ item.localName }})
                  </h6>
                </div>
                <div
                  class="col-4 cart-font-size-1 display-inline pt-2 text-center"
                >
                  <router-link to="" @click="updateCartItem('dec', item)"
                    ><span
                      class="material-icons common-icon cursor add-item-qty-1"
                      >do_not_disturb_on</span
                    >
                  </router-link>
                  {{ item.qty
                  }}{{
                    item.unit == "kg" ? "/Kg" : item.unit == "lt" ? "/L" : ""
                  }}

                  <router-link to="" @click="updateCartItem('inc', item)"
                    ><span
                      class="material-icons common-icon cursor add-item-qty-1"
                      >add_circle</span
                    >
                  </router-link>
                </div>
                <div class="col-2 text-center pt-2">
                  <h6 class="cart-font-size-1" v-show="item.active">
                    ₹{{ item.price * item.qty }}
                  </h6>
                  <h6 class="not-availble-cart" v-show="!item.active">
                    Currently not available
                  </h6>
                </div>
                <div class="col-1">
                  <router-link to="" @click="deleteItem(item)"
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

      <div class="row ps-2 pe-2 mt-1">
        <div class="container ps-2 pe-2 mt-2">
          <div class="row shadow p-3 mb-3 bg-body rounded">
            <div class="col-8">
              <h6 class="text-body cart-font-size">Item Total</h6>
            </div>
            <div class="col-4">
              <h6 class="text-body cart-font-size">₹{{ totalItemAmount }}</h6>
            </div>
            <div class="col-8">
              <h6 class="text-body cart-font-size">Delivery Charge</h6>
            </div>
            <div class="col-4">
              <h6 class="text-body cart-font-size">
                ₹{{ this.constant.deliveryCharge }}
              </h6>
            </div>
            <!--   <div class="col-8 border-bottom">
              <h6 class="text-body cart-font-size">Taxes and charges</h6>
            </div>
            <div class="col-4 border-bottom">
              <h6 class="text-body cart-font-size">₹100</h6>
            </div> -->
            <div class="col-8 mt-2">
              <h6 class="text-body cart-font-size fw-bold">To Pay</h6>
            </div>
            <div class="col-4 mt-2">
              <h6 class="text-body cart-font-size fw-bold">
                ₹ {{ totalItemAmount + constant.deliveryCharge }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <h6 class="fw-bolder">Payment Options</h6>
      </div>

      <div class="row ps-2 pe-2 mt-2">
        <div class="col-12">
          <div class="row each-item">
            <div class="col-12 mt-2 border-bottom">
              <div class="row w-100 mb-2">
                <div class="col-1">
                  <router-link to=""
                    ><span class="material-icons common-icon cursor fs-1"
                      >payments</span
                    >
                  </router-link>
                </div>
                <div class="col-8 ps-3 pt-1 cart-font-size">
                  Pay on Delivery
                </div>
                <div class="col-3 text-center">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="cod"
                    id="cash-on-delivery"
                    name="payment-method"
                    v-model="paymentMethod"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12">
          <button class="btn btn-sm add-address-button" @click="placeOrder()">
            Make Your Order
          </button>
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

    <!-- Modal all address-->
    <div class="modal fade" id="address-modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" v-if="allAddress.length">
              Select your address
            </h6>
            <h6 class="modal-title" v-else>
              Add new address
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
            <div class="container text-center" v-else>No address found</div>
          </div>
          <div class="modal-footer">
            <button
              @click="openNewAddressModal"
              class="btn btn-outline-danger btn-sm"
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal new address-->
    <div class="modal fade" id="new-address-modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">
              Add new address
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form class="add-address">
              <div class="mb-3 mt-3 form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  autocomplete="off"
                  v-model="newAddress.customerName"
                />
              </div>
              <div class="mb-3 mt-3 form-group">
                <input
                  type="number"
                  class="form-control"
                  id="mobile"
                  placeholder="Mobile"
                  name="mobile"
                  autocomplete="off"
                  v-model="newAddress.mob"
                />
              </div>
              <div class="mb-3 mt-3 form-group">
                <input
                  type="text"
                  class="form-control"
                  id="house"
                  placeholder="House/Flat Name/No"
                  name="house"
                  autocomplete="off"
                  v-model="newAddress.house"
                />
              </div>
              <div class="mb-3 mt-3 form-group">
                <input
                  type="text"
                  class="form-control"
                  id="place"
                  placeholder="Place"
                  name="place"
                  autocomplete="off"
                  v-model="newAddress.place"
                />
              </div>
              <div class="mb-3 mt-3 form-group">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  name="text"
                  placeholder="Landmark/ Direction to reach (Optional)"
                  v-model="newAddress.landmark"
                ></textarea>
              </div>

              <button
                type="button"
                class="add-address-button"
                @click="saveNewAddress"
              >
                Save
              </button>
            </form>
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
import constant from "@/constants/constant.json";
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
  setDoc,
  addDoc,
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
      constant:
        process.env.NODE_ENV === "development" ? constant.dev : constant.prod,
      totalItemAmount: 0,
      paymentMethod: "",
      gst: 0,
      extraCharge: 0,
      newAddress: {
        name: "",
        mob: "",
        house: "",
        place: "",
        landmark: "",
        defaultFlag: false,
      },
    };
  },
  async mounted() {
    this.loader = true;
    await this.checkAuth();
    this.getCartFromLocal();
    this.loader = false;
    window.$("#new-address-modal").on("hidden.bs.modal", () => {
      this.openAddressModal()
    });
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
    openNewAddressModal: async function() {
      window.$("#address-modal").modal("hide");
      window.$("#new-address-modal").modal("show");
    },
    saveNewAddress: async function() {
      //get lat and lng
      if (
        !this.newAddress.customerName ||
        !this.newAddress.mob ||
        !this.newAddress.house ||
        !this.newAddress.place
      ) {
        this.$toast.error("Enter all rquired fields");
        return;
      }
      if (this.newAddress.mob.toString().length !== 10) {
        this.$toast.error("Enter 10 digit mobile number");
        return;
      }
      this.loader = true;
      const address = {
        name: this.newAddress.customerName,
        mob: this.newAddress.mob,
        house: this.newAddress.house,
        place: this.newAddress.place,
        landmark: this.newAddress.landmark,
        default: this.newAddress.defaultFlag,
        latLng: "",
        id: this.$store.state.user.uid,
      };
      try {
        await addDoc(collection(this.db, "address"), address);
        this.loader = false;
        window.$("#new-address-modal").modal("hide");
        await this.openAddressModal();
        this.newAddress = {
          name: "",
          mob: "",
          house: "",
          place: "",
          landmark: "",
          defaultFlag: false,
        };
      } catch (err) {
        this.loader = false;
        this.$toast.error(`Something went wrong! Try later`);
      }
    },
    selectAddress: function(address) {
      //check latlng in future
      this.selectedAddress = address;
      window.$("#address-modal").modal("hide");
    },
    getShop: async function(shopId) {
      const docRef = doc(this.db, "shops", shopId);
      const docSnap = await getDoc(docRef);
      this.shop = docSnap.data();
      this.shop.id = shopId;
    },
    getItemFromDB: async function(id) {
      const docRef = doc(this.db, "items", id);
      const docSnap = await getDoc(docRef);
      const item = docSnap.data();
      return item;
    },
    getCartFromLocal: async function() {
      this.loader = true;
      this.allItems = [];
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
          itemFromDB.id = item.id;
          itemFromDB.total = itemFromDB.price * itemFromDB.qty;
          allItems.push(itemFromDB);
          if (itemFromDB.active) await this.calculateTotal(itemFromDB.total);
        }
        this.allItems = allItems;
      } else {
        this.showEmpty = true;
      }
      this.loader = false;
    },
    calculateTotal: async function(amount) {
      this.totalItemAmount = this.totalItemAmount + amount;
    },
    deleteItem: async function(item) {
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
            let items =
              window.sessionStorage.getItem("cartItems") &&
              JSON.parse(window.sessionStorage.getItem("cartItems"));
            if (items && items.length) {
              const newItemArr = items.filter((object) => {
                return object.id !== item.id;
              });
              window.sessionStorage.setItem(
                "cartItems",
                JSON.stringify(newItemArr)
              );
              this.totalItemAmount = 0;
              await this.getCartFromLocal();
              this.loader = false;
            }
          }
        });
    },
    updateCartItem: async function(type, selectedItem) {
      this.loader = true;
      let items =
        window.sessionStorage.getItem("cartItems") &&
        JSON.parse(window.sessionStorage.getItem("cartItems"));
      if (items && items.length) {
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          let itemQty = item.qty;
          if (item.id === selectedItem.id) {
            if (type === "inc") {
              //limit qty by adding
              if (
                selectedItem.unit === "nb" ||
                selectedItem.unit === "lt" ||
                (selectedItem.unit === "kg" && selectedItem.eatable)
              ) {
                itemQty = itemQty + 1;
              } else if (selectedItem.unit === "kg" && !selectedItem.eatable) {
                itemQty = itemQty + 0.5;
              }
            } else {
              if (
                selectedItem.unit === "nb" ||
                selectedItem.unit === "lt" ||
                (selectedItem.unit === "kg" && selectedItem.eatable)
              ) {
                itemQty !== 1 ? (itemQty = itemQty - 1) : null;
              } else if (selectedItem.unit === "kg" && !selectedItem.eatable) {
                itemQty !== 0.5 ? (itemQty = itemQty - 0.5) : null;
              }
            }

            items[i].qty = itemQty;
            this.totalItemAmount = 0;
            window.sessionStorage.setItem("cartItems", JSON.stringify(items));
            await this.getCartFromLocal();
            break;
          }
        }
      }
    },
    placeOrder: async function() {
      if (this.constant.minimumCartAmount > this.totalItemAmount) {
        this.$toast.error(
          `Minimum cart amount is ${this.constant.minimumCartAmount}. Please add items to continue`
        );
        return;
      }
      if (!this.selectedAddress) {
        this.$toast.error(`Select your address`);
        return;
      }
      if (!this.paymentMethod) {
        this.$toast.error(`Select payment method`);
        return;
      }

      this.loader = true;

      const order = {
        status: "pending",
        date: new Date().getTime(),
        dbBoy: "",
        type: "",
      };
      order.customer = {
        id: this.$store.state.user.uid,
        name: this.$store.state.user.name,
        mob: this.$store.state.user.mobile,
      };
      order.shop = {
        id: this.shop.id,
        name: this.shop.name,
        localName: this.shop.localName,
        address: {
          street: this.shop.address.street,
          mob: this.shop.address.mob,
          city: this.shop.address.city,
        },
      };
      const orderId = "ORD" + order.date;
      order.payment = {
        dc: this.constant.deliveryCharge,
        extra: this.extraCharge,
        total:
          this.totalItemAmount +
          this.constant.deliveryCharge +
          this.extraCharge +
          this.gst,
        method: this.paymentMethod,
        status: "pending",
        id: "",
      };

      delete this.selectedAddress.default;
      order.address = this.selectedAddress;

      for (let i = 0; i < this.allItems.length; i++) {
        delete this.allItems[i].active;
        //delete this.allItems[i].eatable;
        delete this.allItems[i].photoUrl;
        delete this.allItems[i].shopId;
      }

      order.items = this.allItems;

      try {
        await setDoc(doc(this.db, "orders", orderId), order);
        this.loader = false;
        window.sessionStorage.setItem("cartItems", JSON.stringify(""));
        this.$toast.success(`Order placed successfully`);
        this.$router.push("/");
      } catch (err) {
        this.$toast.error(`Something went wrong! Try later` + err);
        this.loader = false;
      }

      //check total amount and item amount from database
    },
  },
};
</script>
