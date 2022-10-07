import Vue from "vue";
import Router from "vue-router";
import Webpage from "./components/Webpage";
import { webpageData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Webpage,
      props: { ...webpageData },
    },
  ],
});
