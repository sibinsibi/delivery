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
      <div class="col-7 ps-3">Book Service</div>
      <div class="col-4 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>
    <div class="add-address text-end mt-2">
      <div class="pe-2">
        <button
          class="btn btn-outline-danger btn-sm"
          @click="openAddressModal()"
        >
          Addresses
        </button>
      </div>

      <div class="mb-3 mt-3 form-group">
        <select class="form-select" v-model="selectedService">
          <option value="" disabled>Select Service</option>
          <option
            :value="service.name"
            v-for="(service, index) in constant.serviceTypes"
            :key="index"
            v-show="service.active"
            >{{ service.name }}</option
          >
        </select>
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
          rows="3"
          id="comment"
          name="text"
          placeholder="Landmark/ Direction to reach (Optional)"
          v-model="landmark"
        ></textarea>
      </div>
      <button class="add-address-button" @click="bookNewService">
        Save
      </button>
    </div>

    <!-- Modal all address-->
    <div class="modal fade" id="address-modal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" v-if="allAddress.length">
              Select your address
            </h6>
            <h6 class="modal-title" v-else>
              Add new address
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container ps-4 pe-4 mt-2" v-if="allAddress.length">
              <div
                class="row shadow p-3 mb-3 bg-body rounded"
                v-for="address in allAddress"
                :key="address.id"
                @click="selectAddress(address)"
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
              </div>
            </div>
            <div class="container text-center" v-else>No address found</div>
          </div>
        </div>
      </div>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import {
  getFirestore,
  setDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import Loader from "@/components/loader";
import auth from "@/mixins/auth/auth.js";

export default {
  components: { Loader },
  mixins: [auth],
  data() {
    return {
      db: getFirestore(),
      customerName: "",
      mob: "",
      house: "",
      place: "",
      landmark: "",
      selectedService: this.$route.query.service,
      services: [],
      allAddress: [],
    };
  },
  async mounted() {
    window.scrollTo(0, 0); 
    await this.checkAuth();
  },
  methods: {
    bookNewService: async function() {
      if (!this.customerName || !this.mob || !this.house || !this.place) {
        this.$toast.error("Enter all rquired fields");
        return;
      }
      if (!this.selectedService) {
        this.$toast.error("Select service");
        return;
      }
      if (this.mob.toString().length !== 10) {
        this.$toast.error("Enter 10 digit mobile number");
        return;
      }
      this.loader = true;
      const address = {
        name: this.customerName,
        mob: this.mob,
        house: this.house,
        place: this.place,
        landmark: this.landmark,
      };
      const service = {
        date: new Date().getTime(),
        service: this.selectedService,
        address: address,
        customer: {
          id: this.$store.state.user.uid,
          mob: this.$store.state.user.mobile,
          name: this.$store.state.user.name,
        },
        payment: {
          total: 0,
          commission: 0,
          status: "pending",
        },
        status: "pending",
      };

      const orderId = "SVC" + service.date;

      try {
        await setDoc(doc(this.db, "svcorders", orderId), service);
        this.loader = false;
        this.$toast.success(
          `You have booked successfully, We will contact you shortly`
        );
        this.customerName = "";
        this.mob = "";
        this.house = "";
        this.place = "";
        this.landmark = "";
        this.selectedService = "";
      } catch (err) {
        console.log(err);
        this.loader = false;
        this.$toast.error(`Something went wrong! Try later`);
      }
    },
    openAddressModal: async function() {
      const q = query(
        collection(this.db, "address"),
        where("id", "==", this.$store.state.user.uid)
      );
      const querySnapshot = await getDocs(q);
      const allAddress = [];
      querySnapshot.forEach((doc) => {
        const address = doc.data();
        address.id = doc.id;
        allAddress.push(address);
      });
      this.allAddress = allAddress;
      window.$("#address-modal").modal("show");
    },
    selectAddress: function(address) {
      this.customerName = address.name;
      this.mob = address.mob;
      this.house = address.house;
      this.place = address.place;
      this.landmark = address.landmark;
      window.$("#address-modal").modal("hide");
    },
  },
};
</script>
