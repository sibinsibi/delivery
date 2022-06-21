<template>
  <form class="add-address">
    <div class="mb-3 mt-3 row">
      <div class="col-1">
        <a href=""
          ><span
            class="material-icons md-18 common-icon mt-1 cursor"
            @click="$router.go(-1)"
            >arrow_back</span
          ></a
        >
      </div>
      <div class="col-10">
        <h4 class="text-center">New address</h4>
      </div>
    </div>
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
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="defaultFlag"
        name="defaultFlag"
        :value="defaultFlag"
        v-model="defaultFlag"
      />
      <label class="form-check-label">Set as default address</label>
    </div>
    <button type="button" class="add-address-button" @click="saveNewAddress">
      Save
    </button>
    <!-- <ul class="mt-3">
      <li>Please allow location access</li>
      <li>You can add address of your current location. We will update soon</li>
    </ul> -->
  </form>
</template>

<script>
import auth from "@/mixins/auth/auth.js";
import address from "@/mixins/address/address.js";

export default {
  components: {},
  mixins: [auth, address],
  data() {
    return {};
  },
  async mounted() {
    await this.setUserState();
  },
  methods: {},
};
</script>
