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
  {
    path: "/add_role",
    name: "Add-Role",
    component: () => import("../views/role-perm/Add_Role.vue"),
  },
  {
    path: "/add_shop",
    name: "Add-Shop",
    component: () => import("../views/shop/Add_Shop.vue"),
  },
  {
    path: "/shops",
    name: "Edit-Shop",
    component: () => import("../views/shop/All_Shops.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () => import("../views/shop/Edit_Shop.vue"),
  },
  {
    path: "/add_item",
    name: "Add-Item",
    component: () => import("../views/items/Add_Item.vue"),
  },
  {
    path: "/get_item",
    name: "Get-Item",
    component: () => import("../views/items/Get_Item.vue"),
  },
  {
    path: "/item/:id",
    name: "Item",
    component: () => import("../views/items/Edit_Item.vue"),
  },
  

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
