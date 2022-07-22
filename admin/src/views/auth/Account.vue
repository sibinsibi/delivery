<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Account</h1>
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
                      v-model="user.name"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-md-6 col-sm-6 ">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Mobile"
                      v-model="user.mobile"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-md-6 col-sm-6 mt-1">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      v-model="user.email"
                      autocomplete="off"
                      disabled
                    />
                  </div>
                  <div class="col-md-6 col-sm-6 mt-1">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Role"
                      v-model="user.role"
                      autocomplete="off"
                      disabled
                    />
                  </div>
                  <div class="col-md-6 col-sm-6 mt-1">
                    <div class="form-check form-switch mb-3 mt-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="settings-switch-1"
                        v-model="user.active"
                        :checked="user.active"
                        disabled
                      />
                      <label class="form-check-label" for="settings-switch-1"
                        >Active</label
                      >
                    </div>
                  </div>
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
import Layout from "@/components/layout/layout.vue";
import Loader from "@/components/loader";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  components: { Layout, Loader },
  data() {
    return {
      db: getFirestore(),
      loader: false,
      user: {},
    };
  },
  async mounted() {
    this.getUser();
  },
  methods: {
    getUser: async function() {
      const auth = getAuth();

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(this.db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let userObj = {};
            userObj = docSnap.data();
            userObj.uid = docSnap.id;
            this.user = userObj;
          }
        }
      });
    },
    saveItem: async function() {
      if (!this.user.name) {
        this.$toast.error(`Enter name`);
        return;
      }
      if (!this.user.mobile) {
        this.$toast.error(`Enter mobile`);
        return;
      }

      this.loader = true;

      try {
        const userRef = doc(this.db, "users", this.user.uid);
        delete this.user.uid;

        await updateDoc(userRef, this.user);

        this.$toast.success(`Updated successfully`);
      } catch (err) {
        this.$toast.error(`Something went wrong` + err);
      }
      this.loader = false;
    },
  },
};
</script>
