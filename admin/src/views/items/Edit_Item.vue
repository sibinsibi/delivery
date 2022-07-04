<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Edit Item</h1>
          <div class="row g-4 settings-section">
            <div class="app-card app-card-settings shadow-sm p-4">
              <form id="item-form">
                <div class="row">
                  <div class="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      name="name"
                      v-model="name"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-md-6 col-sm-6">
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
                      <option selected="" value="">Select unit</option>
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

                  <div class="d-flex">
                    <div class="form-check form-switch mb-3 mt-4">
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

                    <div class="form-check form-switch mb-3 mt-4">
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

                <div class="col-12 col-md-12">
                  <h6 class="notification-title mb-1">Item photo</h6>
                  <div class="row">
                    <div class="col-md-12 col-12" v-if="photoUrl">
                      <img :src="photoUrl" class="w-50" />
                    </div>
                    <div class="col-md-12 col-12 mt-5">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="photoUrl"
                        name="photoUrl"
                        v-model="photoUrl"
                        autocomplete="off"
                      />
                    </div>
                  </div>
                  <!--//app-card-->
                </div>
              </form>
            </div>
          </div>
          <!--//app-card-->
        </div>

        <div class="text-center mt-3">
          <button type="button" @click="saveItem" class="btn app-btn-primary">
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
        <!--//container-fluid-->
      </div>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";

import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      name: "",
      localName: "",
      active: false,
      veg: false,
      eatable: false,
      unit: "",
      price: "",
      itemId: "",
      photoUrl: "",
    };
  },
  mounted() {
    const route = useRoute();
    this.itemId = route.params.id;
    this.getData();
  },
  methods: {
    getData: async function() {
      const itemRef = doc(this.db, "items", this.itemId);
      const itemSnap = await getDoc(itemRef);
      const item = itemSnap.data();

      this.name = item.name;
      this.localName = item.localName;
      this.active = item.active;
      this.veg = item.veg;
      this.eatable = item.eatable;
      this.price = item.price;
      this.unit = item.unit;
      this.photoUrl = item.photoUrl;
    },
    saveItem: async function() {
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
      this.loader = true;
      const item = {
        name: this.name,
        localName: this.localName,
        unit: this.unit,
        price: this.price,
        veg: this.veg,
        active: this.active,
        eatable: this.eatable,
        photoUrl: this.photoUrl,
      };

      try {
        const itemRef = doc(this.db, "items", this.itemId);
        await updateDoc(itemRef, item);

        this.$toast.success(`Updated successfully`);
      } catch (err) {
        this.$toast.error(`Something went wrong` + err);
      }
      this.loader = false;
    },
  },
};
</script>
