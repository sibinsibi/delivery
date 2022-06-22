import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login-Reg",
    component: () => import("../views/auth/Login_Reg.vue"),
  },
  {
    path: "/denied",
    name: "Denied",
    component: () => import("../views/Denied.vue"),
  },
  {
    path: "/add_address",
    name: "Add-Address",
    component: () => import("../views/address/Add_Address.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/account/Account.vue"),
  },
  {
    path: "/addresses",
    name: "Addresses",
    component: () => import("../views/address/Addresses.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
