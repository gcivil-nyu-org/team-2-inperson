import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";
import PreferenceDemo from "../components/preferences/PreferenceDemo.vue"
import CompositeView from "../components/layout/composite/CompositeView.vue";

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
      component: CompositeView
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
      path: "/setprefs",
      name: "prefs",
      component: PreferenceDemo
      //component: () => import("../preferences/PreferenceManager.vue"),
    },
   
  ],
});

export default router;
