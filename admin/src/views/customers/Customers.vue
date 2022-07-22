<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Customers</h1>
          <button
            type="button"
            @click="getcustomers('all')"
            class="btn app-btn-primary"
          >
            Get All Customers
          </button>

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
                          <th>Email</th>
                          <th>Active</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(c, index) in allCustomers" :key="index">
                          <td class="cell">{{ c.name }}</td>
                          <td class="cell">{{ c.mobile }}</td>
                          <td class="cell">{{ c.email }}</td>
                          <td class="cell">
                            <div class="form-check form-switch mb-3">
                              <input
                                class="form-check-input cursor"
                                type="checkbox"
                                :id="'active' + c.id"
                                :checked="c.active"
                                @click="updateActive(c.id)"
                              />
                            </div>
                          </td>
                          <td class="cell">
                            <i
                              class="material-icons cursor icon-edit"
                              @click="showAddress(c.id)"
                              >home</i
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

    <div class="modal fade" id="addressModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Addresses</h4>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="container ps-4 pe-4 mt-2" v-if="allAddress.length">
              <div
                class="row shadow-sm p-3 mb-3 bg-body rounded"
                v-for="address in allAddress"
                :key="address.id"
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
                <div class="row d-none">
                  <div class="col-2"></div>
                  <div class="col-2">
                    <router-link
                      to=""
                      class="address-action"
                      @click="gotoEditAddress(address.id)"
                      >EDIT</router-link
                    >
                  </div>
                  <div class="col-2">
                    <router-link
                      to=""
                      class="address-action"
                      @click="deleteAddress(address.id)"
                      >DELETE</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
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

import {
  getFirestore,
  doc,
  getDocs,
  collection,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      allCustomers: [],
      loader: false,
      allAddress: [],
    };
  },
  methods: {
    getcustomers: async function(flag) {
      this.loader = true;

      let querySnapshot = "";
      const allCustomers = [];
      if (flag === "all") {
        querySnapshot = await getDocs(collection(this.db, "customers"));
      }
      if (querySnapshot.size) {
        querySnapshot.forEach((doc) => {
          const customer = doc.data();
          customer.id = doc.id;
          allCustomers.push(customer);
        });
        this.allCustomers = allCustomers;
      }

      this.loader = false;
    },
    updateActive: async function(id) {
      var chk = document.getElementById("active" + id);
      let active = false;
      if (chk.checked) {
        active = true;
      }
      const customersRef = doc(this.db, "customers", id);

      await updateDoc(customersRef, {
        active: active,
      });
      this.$toast.success(`Updated`);
    },
    showAddress: async function(uid) {
      this.allAddress = [];
      this.loader = true;
      const q = query(collection(this.db, "address"), where("id", "==", uid));
      const querySnapshot = await getDocs(q);
      const allAddress = [];
      querySnapshot.forEach((doc) => {
        const address = doc.data();
        address.id = doc.id;
        allAddress.push(address);
      });
      this.allAddress = allAddress;
      this.loader = false;
      window.$("#addressModal").modal("show");
    },
  },
};
</script>
