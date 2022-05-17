<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Edit Shop</h1>
          <div class="row g-4 settings-section">
            <form id="shop-form">
              <div class="col-12 col-md-12">
                <div class="app-card app-card-settings shadow-sm p-4">
                  <div class="app-card-body">
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          name="name"
                          v-model="name"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name in malayalam"
                          name="localName"
                          v-model="localName"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          name="email"
                          v-model="email"
                          autocomplete="off"
                        />
                      </div>
                      <div class="d-flex">
                        <div class="form-check form-switch mb-3 mt-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="settings-switch-1"
                            v-model="active"
                            :checked="active"
                          />
                          <label
                            class="form-check-label"
                            for="settings-switch-1"
                            >Active</label
                          >
                        </div>
                        <div class="form-check form-switch mb-3 mt-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="veg"
                            v-model="veg"
                            :checked="veg"
                          />
                          <label class="form-check-label" for="veg">Veg</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--//app-card-body-->
                </div>
                <!--//app-card-->
              </div>

              <div class="col-12 col-md-12 mt-3">
                <h6 class="notification-title mb-1">Address</h6>
                <div class="app-card app-card-settings shadow-sm p-4">
                  <div class="app-card-body">
                    <div class="row">
                      <div class="col-md-3 col-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Street"
                          name="street"
                          v-model="street"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-3 col-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="City"
                          name="city"
                          v-model="city"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-3 col-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="State"
                          name="state"
                          v-model="state"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-3 col-12">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Zip"
                          name="zip"
                          v-model="zip"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-3 col-12 div-mt">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Contact Number"
                          name="mob"
                          v-model="mob"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-3 col-12 div-mt">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Alternative Number"
                          name="mob1"
                          v-model="mob1"
                          autocomplete="off"
                        />
                      </div>
                      <div class="col-md-3 col-12 div-mt">
                        <input
                          type="number"
                          class="form-control"
                          step="0.01"
                          name="latitude"
                          v-model="latitude"
                          placeholder="Latitude"
                        />
                      </div>
                      <div class="col-md-3 col-12 div-mt">
                        <input
                          type="number"
                          class="form-control"
                          step="0.01"
                          name="longitude"
                          v-model="longitude"
                          placeholder="Longitude"
                        />
                      </div>
                    </div>
                  </div>
                  <!--//app-card-body-->
                </div>
                <!--//app-card-->
              </div>

              <div class="col-12 col-md-12 mt-3">
                <h6 class="notification-title mb-1">Categories</h6>
                <div class="app-card app-card-settings shadow-sm p-4">
                  <div class="app-card-body">
                    <div class="row">
                      <div
                        class="col-md-3 col-6"
                        v-for="(item) in types"
                        :key="item"
                      >
                        <div class="form-check mb-3">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            :id="item"
                            @click="updateTypeArr(item)"
                          />
                          <label class="form-check-label" for="{{item}}">
                            {{ item }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--//app-card-body-->
                </div>
                <!--//app-card-->
              </div>

              <div class="text-center mt-3">
                <button
                  type="button"
                  @click="saveNewShop"
                  class="btn app-btn-primary"
                >
                  Save
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  onclick="window.location.reload();"
                  class="btn btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </form>
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
import * as geofire from "geofire-common";
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";

import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      types: [],
      typesArr: [],
      name: "",
      localName: "",
      email: "",
      active: false,
      veg: false,
      street: "",
      city: "",
      state: "",
      zip: "",
      mob: "",
      mob1: "",
      latitude: "",
      longitude: "",
      loader: false,
      shopId: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.shopId = route.params.id;
    this.getData();
  },
  methods: {
    getData: async function() {
      const shopRef = doc(this.db, "shops", this.shopId);
      const shopSnap = await getDoc(shopRef);
      const shop = shopSnap.data();

      this.name = shop.name;
      this.localName = shop.localName;
      this.email = shop.email;
      this.active = shop.active;
      this.veg = shop.veg;
      this.street = shop.address.street;
      this.city = shop.address.city;
      this.state = shop.address.state;
      this.zip = shop.address.zip;
      this.mob = shop.address.mob;
      this.mob1 = shop.address.mob1;
      this.latitude = shop.address.lat;
      this.longitude = shop.address.lng;
      this.typesArr = shop.category;

      const docRef = doc(this.db, "shopTypes", "types");
      const docSnap = await getDoc(docRef);
      const types = docSnap.data();
      const typesArr = [];
      for (const key in types) {
        typesArr.push(key);
      }
      this.types = typesArr;

      setTimeout(async () => {
        await this.updateCategorycheckbox();
      }, 2000);
    },
    updateCategorycheckbox: async function() {
      for (var j = 0; j < this.types.length; j++) {
        for (var i = 0; i < this.typesArr.length; i++) {
          if (this.types[j] == this.typesArr[i]) {
            document.getElementById(this.typesArr[i]).checked = true;
          }
        }
      }
    },
    updateTypeArr: function(id) {
      var chk = document.getElementById(id);
      if (chk.checked) {
        this.typesArr.push(id);
      } else {
        const index = this.typesArr.indexOf(id);
        this.typesArr.splice(index, 1)

      }
    },
    saveNewShop: async function() {
      if (!this.name) {
        this.$toast.error(`Enter name`);
        return;
      }
      if (!this.street) {
        this.$toast.error(`Enter street`);
        return;
      }
      if (!this.city) {
        this.$toast.error(`Enter city`);
        return;
      }
      if (!this.state) {
        this.$toast.error(`Enter state`);
        return;
      }
      if (!this.zip) {
        this.$toast.error(`Enter zip`);
        return;
      }
      if (!this.state) {
        this.$toast.error(`Enter state`);
        return;
      }
      if (!this.mob) {
        this.$toast.error(`Enter mob`);
        return;
      }
      if (!this.latitude) {
        this.$toast.error(`Enter latitude`);
        return;
      }
      if (!this.longitude) {
        this.$toast.error(`Enter longitude`);
        return;
      }
      if (!this.typesArr.length) {
        this.$toast.error(`Select atleast one type`);
        return;
      }
      this.loader = true;

      const hash = geofire.geohashForLocation([this.latitude, this.longitude]);

      const address = {
        street: this.street,
        city: this.city,
        state: this.state,
        zip: this.zip,
        mob: this.mob,
        mob1: this.mob1,
        geohash: hash,
        lat: this.latitude,
        lng: this.longitude,
      };
      const shop = {
        name: this.name,
        localName: this.localName,
        email: this.email,
        active: this.active,
        veg: this.veg,
        address: address,
        photoUrl: "",
        open: false,
        category: this.typesArr,
      };

      try {
        const shopRef = doc(this.db, "shops", this.shopId);
        await updateDoc(shopRef, shop);

        //await updateDoc(collection(this.db, "shops", this.shopId), shop);
        this.$toast.success(`Updated successfully`);
      } catch (err) {
        this.$toast.error(`Something went wrong` + err);
      }
      this.loader = false;
    },
  },
};
</script>
