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
  {
    path: "/live_orders",
    name: "Live-Orders",
    component: () => import("../views/orders/Live_Orders.vue"),
  },
  {
    path: "/order/:id",
    name: "Order",
    component: () => import("../views/orders/Order.vue"),
  },
  {
    path: "/current_orders",
    name: "Current-Orders",
    component: () => import("../views/orders/Current_Orders.vue"),
  },
  {
    path: "/get_orders",
    name: "Get-Orders",
    component: () => import("../views/orders/Get_Orders.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/auth/Account.vue"),
  },
  {
    path: "/customers",
    name: "Customers",
    component: () => import("../views/customers/Customers.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/users/Users.vue"),
  },
  {
    path: "/live_svc_orders",
    name: "Live-SVC-Orders",
    component: () => import("../views/svc-orders/Live_SVC_Orders.vue"),
  },
  {
    path: "/current_svc_orders",
    name: "Current-SVC-Orders",
    component: () => import("../views/svc-orders/Current_SVC_Orders.vue"),
  },
  {
    path: "/get_svc_orders",
    name: "Get-SVC-Orders",
    component: () => import("../views/svc-orders/Get_SVC_Orders.vue"),
  },
  {
    path: "/svcorder/:id",
    name: "SVC-Order",
    component: () => import("../views/svc-orders/SVCOrder.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "SVC-Order",
    component: () => import("../views/404.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
