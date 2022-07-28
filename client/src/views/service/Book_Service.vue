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
      <div class="col-4 ps-3 text-end">
        <router-link to="/"
          ><span class="material-icons common-icon cursor">home</span>
        </router-link>
      </div>
    </div>
    <form class="add-address">
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
      <button type="button" class="add-address-button" @click="bookNewService">
        Save
      </button>
    </form>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import { getFirestore, setDoc, doc } from "firebase/firestore";
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
    };
  },
  async mounted() {
    await this.checkAuth();
  },
  methods: {
    bookNewService: async function() {
      if (!this.customerName || !this.mob || !this.house || !this.place) {
        this.$toast.error("Enter all rquired fields");
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
        },
        status: "pending",
      };

      const orderId = "SVC" + service.date;

      try {
        await setDoc(doc(this.db, "svcorders", orderId), service);
        this.loader = false;
        this.$toast.success(`You have booked successfully`);
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
  },
};
</script>
