<template>
  <div>
    <div class="row mt-3 ps-2" style="width: 100%">
      <div class="col-1">
        <router-link to=""
          ><span class="material-icons back-icon cursor" @click="$router.go(-1)"
            >arrow_back</span
          >
        </router-link>
      </div>
      <div class="col-6 ps-3">Edit address</div>
      <div class="col-4 ps-3 text-end">
        <router-link to="/addresses" class="text-danger">
          All address
        </router-link>
      </div>
    </div>
    <form class="add-address">
      <div class="mb-3 mt-3 form-group">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          name="name"
          autocomplete="off"
          v-model="customerName"
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
          v-model="mob"
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
          v-model="house"
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
          v-model="place"
        />
      </div>
      <div class="mb-3 mt-3 form-group">
        <textarea
          class="form-control"
          rows="5"
          id="comment"
          name="text"
          placeholder="Landmark/ Direction to reach (Optional)"
          v-model="landmark"
        ></textarea>
      </div>
      <!-- <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="defaultFlag"
          name="defaultFlag"
          :value="defaultFlag"
          v-model="defaultFlag"
        />
        <label class="form-check-label">Set as default address</label>
      </div> -->
      <button type="button" class="add-address-button" @click="updateAddress(this.addressId)">
        Update
      </button>
      <!-- <ul class="mt-3">
      <li>Please allow location access</li>
      <li>You can add address of your current location. We will update soon</li>
    </ul> -->
    </form>
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
    return {
      addressId: this.$route.params.id
    };
  },
  async mounted() {
    await this.checkAuth();
    await this.getAddress(this.addressId)
  },
  methods: {},
};
</script>
