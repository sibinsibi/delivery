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
      <div class="col-8 ps-3">My Address</div>
      <div class="col-1 ps-3 text-end">
        <router-link to="/add_address"
          ><span class="material-icons common-icon cursor">add_circle</span>
        </router-link>
      </div>
      <div class="col-1 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>

    <div class="container ps-4 pe-4 mt-2" v-if="allAddress.length">
      <div
        class="row shadow p-3 mb-3 bg-body rounded"
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
        <div class="row">
          <div class="col-2"></div>
          <div class="col-2">
            <router-link to="" class="address-action" @click="gotoEditAddress(address.id)">EDIT</router-link>
          </div>
          <div class="col-2">
            <router-link
              to=""
              class="address-action"
              @click="deleteAddress(address.id)"
              >DELETE</router-link
            >
          </div>
          <!-- <div class="col-6 text-end">
            <input type="checkbox"  class="default-address-checkbox">
          </div> -->
        </div>
      </div>
    </div>

    <div class="container" v-if="!allAddress.length">
      <div class="row">
        <div class="col-12 text-center">
          <span class="material-icons common-icon cursor empty-address-icon"
            >house</span
          >
          <p>No address found</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <router-link to="/add_address" class="text-decoration-null">
        <button type="button" class="goto-add-address-button">
          Add new address
        </button>
      </router-link>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";
import address from "@/mixins/address/address.js";

export default {
  components: { Loader },
  mixins: [auth, address],
  data() {
    return {};
  },
  async mounted() {
    this.loader = true;
    const user = await this.checkAuth();
    this.uid = user.uid;
    await this.getAllAddress(user.uid);
    this.loader = false;
  },
  methods: {},
};
</script>
