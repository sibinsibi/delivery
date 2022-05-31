<template>
  <div class="container-fluid mt-1">
    <div class="row">
      <div class="col-1">
        <span class="material-icons md-18 location-icon">location_on</span>
      </div>
      <div class="col-7">
          <h6 class="mt-1">My home</h6>
      </div>
      <div class="col-4 text-end">
        <span class="material-icons md-18 user-icon">account_circle</span>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/mixins/auth/auth.js";

export default {
  mixins: [auth],
  async mounted() {
    await this.setUserState();
  },
  methods: {},
};
</script>
