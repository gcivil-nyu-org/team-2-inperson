<script>
//import Vue from "vue";
import axios from "axios";
//import VueAxios from "vue-axios";
//import { getAPI } from "../axios-api";

//Vue.useAttrs(VueAxios.axios);
export default {
  //   data() {
  //     return {
  //       APIData: [],
  //     };
  //   },
  //   created() {
  //     getAPI
  //       .get("/account/")
  //       .then((response) => {
  //         this.APIData = response.data;
  //         console.log(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   mounted() {
  //     Vue.axios.get("http://manage.shortlist.nyc/admin/api/account/")
  //     .then((resp) => {
  //         console.warn(resp);
  //       });
  //   },

  mounted() {
    const config = {
      headers: {
        email: "poojapatel@nyu.edu",
      },
    };
    const url = "https://api.shortlist.nyc/account/metadata";
    axios
      .post(url, config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err);
      });
  },
};
</script>


<template>
  <main>
    <h1>User Preference</h1>
    {{ response }}
  </main>
</template>
<style scoped>
main {
  background-color: pink;
}
</style>
