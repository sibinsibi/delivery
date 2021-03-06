import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/:catchAll(.*)",
    name: "SVC-Order",
    component: () => import("../views/404.vue"),
  },
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
  {
    path: "/edit_address/:id",
    name: "Edit-Address",
    component: () => import("../views/address/Edit_Address.vue"),
  },
  {
    path: "/shops",
    name: "Shops",
    component: () => import("../views/shop/Shops.vue"),
  },
  {
    path: "/shop/:id",
    name: "Shop",
    component: () => import("../views/shop/Shop.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/Cart.vue"),
  },
  {
    path: "/orders",
    name: "Orders",
    component: () => import("../views/orders/Orders.vue"),
  },
  {
    path: "/order/:id",
    name: "Order",
    component: () => import("../views/orders/Order.vue"),
  },
  {
    path: "/coming_soon",
    name: "Coming-Soon",
    component: () => import("../views/Coming_Soon.vue"),
  },
  {
    path: "/items/:category",
    name: "Items",
    component: () => import("../views/shop/Items.vue"),
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/service/Book_Service.vue"),
  },
  {
    path: "/svc_orders",
    name: "SVC-Orders",
    component: () => import("../views/service/SVC_Orders.vue"),
  },
  {
    path: "/svcorder/:id",
    name: "SVC-Order",
    component: () => import("../views/service/SVC_Order.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
