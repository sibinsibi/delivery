<template>
  <div>
    <Layout />
    <div class="app-wrapper">
      <div class="app-content pt-3 p-md-3 p-lg-4">
        <div class="container-xl">
          <h1 class="app-page-title mt-md-5">Add new role</h1>
          <div class="row g-4 settings-section">
            <div class="col-12 col-md-6">
              <div class="app-card app-card-settings shadow-sm p-4">
                <div class="app-card-body">
                  <form class="settings-form">
                    <div class="mb-3">
                      <label for="setting-input-1" class="form-label"
                        >Role Name</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="role_name"
                        v-model="roleName"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      class="btn app-btn-primary"
                      @click="saveNewRole()"
                    >
                      Save
                    </button>
                  </form>
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
  </div>
</template>

<script>
import Layout from "@/components/layout/layout.vue";
import role from "@/mixins/role/role_perm.js";

export default {
  components: { Layout },
  mixins: [role],
  data() {
    return {};
  },
};
</script>
