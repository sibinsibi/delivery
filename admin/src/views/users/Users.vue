<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Users</h1>
          <button
            type="button"
            @click="getUsers('all')"
            class="btn app-btn-primary"
          >
            Get All Users
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(c, index) in allUsers" :key="index">
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
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      allUsers: [],
      loader: false,
    };
  },
  methods: {
    getUsers: async function(flag) {

      this.loader = true;

      let querySnapshot = "";
      const allUsers = [];
      if (flag === "all") {
        querySnapshot = await getDocs(collection(this.db, "users"));
      }
      if (querySnapshot.size) {
        querySnapshot.forEach((doc) => {
          const customer = doc.data();
          customer.id = doc.id;
          allUsers.push(customer);
        });
        this.allUsers = allUsers;
      }

      this.loader = false;
    },
    updateActive: async function(id) {
      var chk = document.getElementById("active" + id);
      let active = false;
      if (chk.checked) {
        active = true;
      }
      const userRef = doc(this.db, "users", id);

      await updateDoc(userRef, {
        active: active,
      });
      this.$toast.success(`Updated`);
    },
  },
};
</script>
