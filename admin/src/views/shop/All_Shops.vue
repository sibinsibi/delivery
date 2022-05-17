<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Shops</h1>
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
                      class="table app-table-hover mb-0 text-left"
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Mob</th>
                          <th>Place</th>
                          <th>Open</th>
                          <th>Active</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in allShops" :key="index">
                          <td class="cell">{{ item.name }}</td>
                          <td class="cell">{{ item.address.mob }}</td>
                          <td class="cell">{{ item.address.street }}</td>
                          <td class="cell">
                            <input
                              class="form-check-input cursor"
                              type="checkbox"
                              @click="updateOpen(item.id)"
                              :id="item.id"
                              :checked="item.open"
                            />
                          </td>
                          <td class="cell">
                            <div class="form-check form-switch mb-3">
                              <input
                                class="form-check-input cursor"
                                type="checkbox"
                                :id="'active' + item.id"
                                :checked="item.active"
                                @click="updateActive(item.id)"
                              />
                            </div>
                          </td>
                          <td class="cell">
                            <i
                              class="material-icons cursor icon-edit"
                              @click="gotoEditShop(item.id)"
                              >edit</i
                            >
                          </td>
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
    <Loader v-show="loader" />
  </div>
</template>

<script>
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
  updateDoc,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      types: [],
      typesArr: [],
      allShops: [],
      loader: false,
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
        const q = query(
          collection(this.db, "shops"),
          where("category", "array-contains-any", this.typesArr)
        );
        querySnapshot = await getDocs(q);
      } else if (flag === "all") {
        querySnapshot = await getDocs(collection(this.db, "shops"));
      }
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        shop.id = doc.id;
        allShops.push(shop);
      });
      this.allShops = allShops;
      this.loader = false;
    },
    updateOpen: async function(id) {
      var chk = document.getElementById(id);
      let open = false;
      if (chk.checked) {
        open = true;
      }
      const shopRef = doc(this.db, "shops", id);

      await updateDoc(shopRef, {
        open: open,
      });
      this.$toast.success(`Updated`);
    },
    updateActive: async function(id) {
      var chk = document.getElementById("active" + id);
      let active = false;
      if (chk.checked) {
        active = true;
      }
      const shopRef = doc(this.db, "shops", id);

      await updateDoc(shopRef, {
        active: active,
      });
      this.$toast.success(`Updated`);
    },
    gotoEditShop: function(id) {
      this.$root.$router.push({
        path: `/shop/${id}`,
      });
    },
  },
};
</script>
