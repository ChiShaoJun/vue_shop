import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/welcome",
    component: () => import("../components/Home.vue"),
    children: [
      {
        path: "/welcome",
        name: "Welcome",
        component: () => import("../components/Welcome.vue")
      },
      {
        path: "/users",
        name: "Users",
        component: () => import("../components/user/Users.vue")
      },
      {
        path: "/rights",
        name: "Rights",
        component: () => import("../components/power/Rights.vue")
      },
      {
        path: "/roles",
        name: "Roles",
        component: () => import("../components/power/Roles.vue")
      },
      {
        path: "/categories",
        name: "Categories",
        component: () => import("../components/goods/Cate.vue")
      },
      {
        path: "/params",
        name: "Params",
        component: () => import("../components/goods/Params.vue")
      },
      {
        path: "/goods",
        name: "GoodsList",
        component: () => import("../components/goods/List.vue")
      },
      {
        path: "/goods/add",
        name: "GoodsAdd",
        component: () => import("../components/goods/Add.vue")
      },
      {
        path: "/orders",
        name: "Order",
        component: () => import("../components/order/Order.vue")
      },
      {
        path: "/reports",
        name: "Reports",
        component: () => import("../components/reports/Reports.vue")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

// 挂载路由导航守卫
router.beforeEach((to, form, next) => {
  if (to.path === "/login") return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
