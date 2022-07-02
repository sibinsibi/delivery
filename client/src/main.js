import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import config from "./config/firebase";

import { initializeApp } from "firebase/app";
const firebase = initializeApp(config);

export default firebase;

window.$ = window.jQuery = require("jquery");
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/css/main.css";

import "./registerServiceWorker";

import Toaster from "@meforma/vue-toaster";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2, {})
  .use(Toaster, { position: "bottom" })
  .mount("#app");