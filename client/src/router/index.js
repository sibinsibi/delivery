import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
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

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
