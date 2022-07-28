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
      <div class="col-8 ps-3">My Account</div>
    </div>
    <div class="container ps-4 pe-4 mt-2">
      <div class="row shadow p-3 mb-5 bg-body rounded">
        <div class="col-8">
          <h4 class="fw-bold">{{ $store.state.user.name }}</h4>
          <span class="text-secondary">
            {{ $store.state.user.email }}<br />
            {{ $store.state.user.mobile }}
          </span>
        </div>
        <div class="col-4 text-center">
          <router-link class="" to=""
            ><span class="material-icons md-18 account-user-icon mt-1 cursor"
              >account_circle</span
            ></router-link
          >
        </div>
      </div>

      <router-link
        class="text-decoration-none a-text-decoration-color"
        to="/orders"
      >
        <div class="row shadow p-3 mb-2 bg-body rounded">
          <div class="col-2">
            <router-link to="/orders" class="text-end"
              ><span class="material-icons md-18 common-icon cursor"
                >shopping_bag</span
              ></router-link
            >
          </div>
          <div class="col-8">
            Your orders
          </div>
          <div class="col-2">
            <router-link to="/orders" class=""
              ><span class="material-icons md-18 mt-1 cursor text-black-50"
                >keyboard_arrow_right</span
              ></router-link
            >
          </div>
        </div>
      </router-link>

      <router-link
        class="text-decoration-none a-text-decoration-color"
        to="/svcorders"
      >
        <div class="row shadow p-3 bg-body rounded">
          <div class="col-2">
            <router-link to="/svcorders" class="text-end"
              ><span class="material-icons md-18 cursor common-icon"
                >business_center</span
              ></router-link
            >
          </div>
          <div class="col-8">
            Booked Services
          </div>
          <div class="col-2">
            <router-link to="/svcorders" class=""
              ><span class="material-icons md-18 mt-1 cursor text-black-50"
                >keyboard_arrow_right</span
              ></router-link
            >
          </div>
        </div>
      </router-link>

      <router-link
        class="text-decoration-none a-text-decoration-color"
        to="/addresses"
      >
        <div class="row shadow p-3 bg-body rounded mt-2">
          <div class="col-2">
            <router-link to="/addresses" class="text-end"
              ><span class="material-icons md-18 cursor common-icon"
                >house</span
              ></router-link
            >
          </div>
          <div class="col-8">
            Addresses
          </div>
          <div class="col-2">
            <router-link to="/addresses" class=""
              ><span class="material-icons md-18 mt-1 cursor text-black-50"
                >keyboard_arrow_right</span
              ></router-link
            >
          </div>
        </div>
      </router-link>

      <router-link
        class="text-decoration-none a-text-decoration-color"
        to=""
        @click="gotoLogout"
      >
        <div class="row shadow p-3 bg-body rounded mt-2">
          <div class="col-2">
            <router-link class="text-end" to="" @click="gotoLogout"
              ><span class="material-icons md-18 cursor common-icon"
                >exit_to_app</span
              ></router-link
            >
          </div>
          <div class="col-8">
            Logout
          </div>
          <div class="col-2">
            <router-link to="/addresses" class=""
              ><span class="material-icons md-18 mt-1 cursor text-black-50"
                >keyboard_arrow_right</span
              ></router-link
            >
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import auth from "@/mixins/auth/auth.js";

export default {
  components: {},
  mixins: [auth],
  data() {
    return {};
  },
  async mounted() {
    await this.checkAuth();
  },
  methods: {
    gotoLogout: function() {
      this.$swal
        .fire({
          title: "Are you sure?",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Logout",
          background: "#fff",
          backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat `,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            this.logout();
          }
        });
    },
  },
};
</script>
