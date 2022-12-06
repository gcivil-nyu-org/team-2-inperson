import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";
import ApiDemo from "../views/ApiDemo.vue";
import { sessionStore } from "../states/sessionStore.js";
import cookie from "@/helpers/cookie.js";
import ShortlistApi from "@/api/shortlist.js";

const shortlistApi = new ShortlistApi("https://api.shortlist.nyc/");
import VerifiedView from "../views/VerifiedView.vue";

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
      meta: { requiresAuth: true },
    },
    {
      path: "/signup",
      name: "signup-view",
      component: () => import("../views/SignupView.vue"),
      meta: { requiresGuest: true },
    },
    {
      path: "/login",
      name: "login-view",
      component: () => import("../views/LoginView.vue"),
      meta: { requiresGuest: true },
    },
    {
      path: "/profile",
      name: "profile-view",
      component: () => import("../views/ProfileView.vue"),
      meta: { requiresAuth: true },
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
    {
      path: "/verification",
      name: "verification-view",
      component: VerifiedView,
    },
    {
      path: "/reset",
      name: "reset-password",
      component: () => import("../views/ResetPasswordView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to) => {
  const store = sessionStore();
  let acct = cookie.getCookie("accountid");
  // auth required; check for existing cookie
  // TODO: check for token?
  if (to.meta.requiresAuth) {
    if (acct == "") {
      // cookie not found
      return {
        path: "/login",
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      };
    } else {
      // cookie found, get user metadata
      store.loginState = true; // temp for metadata unavailable
      let req = shortlistApi
        .getAccountMetadata()
        .forAccountId(acct)
        .onSuccess((result) => {
          store.loginState = true;
          store.accountMetadata = result.data;
        })
        .onFail((err) => {
          console.log("fail", err.response.status, err.response.data);
        });
      req.execute();
    }
  }

  // If logged in (cookie exists) redirect to /categorize
  else if (to.meta.requiresGuest && cookie.getCookie("accountid") != "") {
    let req = shortlistApi
      .getAccountMetadata()
      .forAccountId(acct)
      .onSuccess((result) => {
        store.loginState = true;
        store.accountMetadata = result.data;
      })
      .onFail((err) => {
        console.log("fail", err.response.status, err.response.data);
      });
    req.execute();
    return {
      path: "/categorize",
      // query: { redirect: to.fullPath },
    };
  }
});

export default router;
