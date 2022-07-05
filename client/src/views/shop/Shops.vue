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
      <div class="col-8 ps-3">Shops</div>
      <div class="col-3 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <!--<div class="col-12 mt-3 text-end">
          <router-link to="" class="text-danger" @click="openFilterModal()">
            Filter
          </router-link>
        </div>
        -->

        <div class="col-12 p-2">
          <div class="row w-100">
            <div class="col-6">
              <button
                class="btn get-all-shop-button-shops font-size-filter fw-normal shadow-sm w-100"
                @click="getShops('all')"
              >
                All shops
              </button>
            </div>
            <div class="col-6">
              <button
                class="btn get-all-shop-button-shops font-size-filter shadow-sm w-100"
                @click="openFilterModal()"
              >
                Categories
              </button>
            </div>
            <div class="col-3 mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="veg"
                @click="updateTypeArr()"
              />
              <label class="form-check-label" for="veg">
                Veg
              </label>
            </div>
            <div class="col-3 mt-2">
             <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="non-veg"
                @click="updateTypeArr()"
              />
              <label class="form-check-label" for="non-veg">
                Non 
              </label>
            </div>
            <div class="col-3 mt-2">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="both"
                @click="updateTypeArr()"
              />
              <label class="form-check-label" for="both">
                Both 
              </label>
            </div>
            <div class="col-3 mt-2">Clear</div>
          </div>
        </div>

        <div class="col-6 mt-2" v-for="shop in allShops" :key="shop.id">
          <!-- Card -->
          <div class="card">
            <!--Card image-->
            <div>
              <img class="card-img-top" :src="shop.photoUrl" />
              <a href="">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <!--Card content-->
            <div class="card-body">
              <!--Title-->
              <h6 class="card-title shop-name fw-bolder">{{ shop.name }}</h6>
              <h6 class="card-title shop-name">({{ shop.localName }})</h6>
              <h6 class="card-title shop-name text-muted">
                {{ shop.address.street }}
              </h6>
            </div>
          </div>
          <!-- Card -->
        </div>
      </div>
    </div>

    <!-- The Modal -->
    <div class="modal fade" id="filterModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h2>Select your category</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div
                class="col-md-3 col-6"
                v-for="(item, index) in shopTypes"
                :key="item"
              >
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    :id="item"
                    @click="updateTypeArr(item, index)"
                    :checked="item == filter"
                  />
                  <label class="form-check-label" :for="item">
                    {{ item }}
                  </label>
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <button
                type="button"
                @click="getShops('category')"
                class="btn btn-outline-danger"
              >
                Get shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Loader v-show="loader" />
  </div>
</template>

<script>
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";
import shop from "@/mixins/shop/shop.js";

export default {
  components: { Loader },
  mixins: [auth, shop],
  data() {
    return {
      filter: this.$route.query.filter || "all",
    };
  },
  async mounted() {
    await this.checkAuth();

    if (this.filter === "all") {
      await this.getShops(this.filter);
    } else {
      this.typesArr.push(this.filter);
      await this.getShops("category");
    }
    await this.getShopTypes();
  },
  methods: {
    openFilterModal: async function() {
      window.$("#filterModal").modal("show");
    },
  },
};
</script>
