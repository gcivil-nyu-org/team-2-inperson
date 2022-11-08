import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";
import ApiDemo from "../views/ApiDemo.vue";
// import SignupView from "../views/SignupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/demo",
      name: "demos",
      component: DemoView,
    },
    {
      path: "/stage",
      name: "component-stage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/StageView.vue"),
    },
    {
      path: "/apiTest",
      name: "api-test",
      component: ApiDemo,
    },

    {
      path: "/categorize",
      name: "categorize-view",
      component: () => import("../views/CategorizeView.vue"),
    },
    {
      path: "/signup",
      name: "signup-view",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/login",
      name: "login-view",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/profile",
      name: "profile-view",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/about",
      name: "about-view",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/logout",
      name: "logout-page",
      component: () =>
        import("../components/layout/signup_login/LoggedOut.vue"),
    },
  ],
});

export default router;
