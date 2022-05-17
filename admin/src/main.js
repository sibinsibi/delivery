import { createApp } from "vue";
// import Vue from 'vue'
import App from "./App.vue";
import store from "./store";
import router from "./router";

import config from "./config/firebase";

// import {
//   getFirestore, collection, onSnapshot,
//   addDoc, deleteDoc, doc,
//   query, where,
//   orderBy, serverTimestamp,
//   getDoc,
// } from 'firebase/firestore'

import { initializeApp } from "firebase/app";
const firebase = initializeApp(config);

export default firebase;

window.$ = window.jQuery = require("jquery");
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/css/main.css";

import "./registerServiceWorker";

import Toaster from "@meforma/vue-toaster";

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster, { position: "bottom"})
  .mount("#app");

// createApp(App).mount('#app')
// new Vue({
//     el: '#app',
//     template: '<App/>',
//     store,
//     components: { App }
//   })
