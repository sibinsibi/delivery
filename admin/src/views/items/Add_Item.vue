<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5 mt-5 mt-sm-5 fs-5">Add New Item</h1>
          <button
            type="button"
            @click="getShops('all')"
            class="btn app-btn-primary"
          >
            Get all shops
          </button>
          <div class="row g-4 settings-section mt-1">
            <form id="shop-form">
              <div class="col-12 col-md-12">
                <h6 class="notification-title mb-1">Categories</h6>
                <div class="app-card app-card-settings shadow-sm p-4">
                  <div class="app-card-body">
                    <div class="row">
                      <div
                        class="col-md-3 col-6"
                        v-for="(item, index) in types"
                        :key="item"
                      >
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            :id="item"
                            @click="updateTypeArr(item, index)"
                          />
                          <label class="form-check-label" for="{{item}}">
                            {{ item }}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="text-center mt-3">
                      <button
                        type="button"
                        @click="getShops('category')"
                        class="btn app-btn-primary"
                      >
                        Get shop
                      </button>
                    </div>
                  </div>
                  <!--//app-card-body-->
                </div>
                <!--//app-card-->
              </div>
            </form>
          </div>

          <div class="row g-4 settings-section mt-1">
            <div class="col-12 col-md-12">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
                  <!-- <div class="row">
                    <div class="col-12 col-md-4 offset-md-8">
                      <input
                        type="text"
                        id="search-orders"
                        name="searchorders"
                        class="form-control search-orders"
                        placeholder="Search"
                        v-model="searchQuery"
                      />
                    </div>
                  </div>-->
                  <div class="table-responsive">
                    <table
                      id="example"
                      class="table mb-0 text-left hover-table"
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Mob</th>
                          <th>Type</th>
                          <th>Place</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in allShops"
                          :key="index"
                          class="cursor"
                          @click="openItemModal(item)"
                        >
                          <td class="cell">{{ item.name }}</td>
                          <td class="cell">{{ item.address.mob }}</td>
                          <td class="cell">{{ item.category }}</td>
                          <td class="cell">{{ item.address.street }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!--//app-card-body-->
              </div>
              <!--//app-card-->
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
            <h4 class="modal-title">Add Item for : {{ selectedShop.name }}</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form id="item-form">
              <div class="row">
                <div class="col-md-6 col-sm-6 div-mt">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    name="name"
                    v-model="name"
                    autocomplete="off"
                  />
                </div>
                <div class="col-md-6 col-sm-6  div-mt">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name in malayalam"
                    name="localName"
                    v-model="localName"
                    autocomplete="off"
                  />
                </div>

                <div class="col-md-6 col-sm-6 div-mt">
                  <select class="form-select" v-model="unit">
                    <option selected="" value="" disabled>Select unit</option>
                    <option value="kg">Kilogram</option>
                    <option value="lt">Litre</option>
                    <option value="nb">Numbers</option>
                  </select>
                </div>

                <div class="col-md-6 col-sm-6 div-mt">
                  <input
                    type="number"
                    class="form-control"
                    step="0.01"
                    name="price"
                    v-model="price"
                    placeholder="Price per unit"
                  />
                </div>

                <div class="col-md-6 col-sm-6 div-mt">
                  <select class="form-select" v-model="itemCategory">
                    <option selected="" value="" disabled
                      >Select category</option
                    >
                    <option
                      :value="c.name"
                      v-for="(c, index) in constant.foodCategories"
                      :key="index"
                      >{{ c.name }}</option
                    >
                  </select>
                </div>

                <div class="col-md-6 col-sm-6 div-mt">
                  <div class="d-flex">
                    <div class="form-check form-switch mb-3 mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="settings-switch-1"
                        v-model="active"
                        :checked="active"
                      />
                      <label class="form-check-label" for="settings-switch-1"
                        >Active</label
                      >
                    </div>
                    <div class="form-check form-switch mb-3 mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="veg"
                        v-model="veg"
                        :checked="veg"
                      />
                      <label class="form-check-label" for="veg">Veg</label>
                    </div>

                    <div class="form-check form-switch mb-3 mt-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="eatable"
                        v-model="eatable"
                        :checked="eatable"
                      />
                      <label class="form-check-label" for="eatable"
                        >Eatable</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button
              type="button"
              @click="saveNewItem"
              class="btn app-btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <Loader v-show="loader" />
  </div>
</template>

<script>
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";
import Constants from "@/mixins/constant/constant.js";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  addDoc,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  mixins: [Constants],

  data() {
    return {
      db: getFirestore(),
      types: [],
      typesArr: [],
      allShops: [],
      loader: false,
      selectedShop: {},
      name: "",
      localName: "",
      unit: "",
      price: "",
      active: false,
      veg: false,
      eatable: false,
      itemCategory: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData: async function() {
      const docRef = doc(this.db, "shopTypes", "types");
      const docSnap = await getDoc(docRef);
      const types = docSnap.data();
      const typesArr = [];
      for (const key in types) {
        typesArr.push(key);
      }
      this.types = types;
    },
    updateTypeArr: function(id, index) {
      var chk = document.getElementById(id);
      if (chk.checked) {
        this.typesArr.push(id);
      } else {
        this.typesArr.splice(index, 1);
      }
    },
    getShops: async function(flag) {
      if (flag === "category" && !this.typesArr.length) {
        this.$toast.error(`Select one or more category`);
        return;
      }
      this.loader = true;

      let querySnapshot = "";
      const allShops = [];
      if (flag === "category" && this.typesArr.length) {
        var q = query(
          collection(this.db, "shops"),
          where("category", "array-contains-any", this.typesArr)
        );
        querySnapshot = await getDocs(q);
      } else if (flag === "all") {
        this.typesArr = [];
        window.$("#shop-form input:checkbox").prop("checked", false);
        q = query(collection(this.db, "shops"), where("active", "==", true));
        querySnapshot = await getDocs(q);
      }
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        shop.id = doc.id;
        allShops.push(shop);
      });
      this.allShops = allShops;
      this.loader = false;
    },
    openItemModal: function(shop) {
      this.selectedShop = shop;
      window.$("#itemModal").modal("show");
    },
    saveNewItem: async function() {
      if (!this.name) {
        this.$toast.error(`Enter name`);
        return;
      }
      if (!this.unit) {
        this.$toast.error(`Select unit`);
        return;
      }
      if (this.price == 0) {
        if (confirm("Price is zero. Continue?")) {
          console.log("");
        } else {
          return;
        }
      }

      const item = {
        name: this.name,
        localName: this.localName,
        unit: this.unit,
        price: this.price,
        veg: this.veg,
        active: this.active,
        eatable: this.eatable,
        photoUrl: "",
        shopId: this.selectedShop.id,
        category: this.itemCategory,
      };

      try {
        await addDoc(collection(this.db, "items"), item);

        document.getElementById("item-form").reset();
        (this.name = ""),
          (this.localName = ""),
          (this.unit = ""),
          (this.price = ""),
          (this.active = false),
          (this.veg = false),
          (this.eatable = false),
          this.$toast.success(`Updated successfully`);
      } catch (err) {
        this.$toast.error(`Something went wrong` + err);
      }
    },
  },
};
</script>
