<script>
//import Vue from "vue";
import axios from "axios";
//import VueAxios from "vue-axios";
//import { getAPI } from "../axios-api";

import UserDetails from "../components/layout/profile/UserDetails.vue";
import UserPreference from "../components/layout/profile/UserPreference.vue";
import UserRelations from "../components/layout/profile/UserRelations.vue";

//Vue.useAttrs(VueAxios.axios);
export default {
  //   data() {
  //     return {
  //       APIData: [],
  //     };
  //   },
  components: {
    UserDetails,
    UserPreference,
    UserRelations,
  },
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
    <div class="profile">
      <div class="statusdetails">
        <UserDetails />
      </div>
      <div class="prefrel">
        <UserPreference />
        <UserRelations />
      </div>
    </div>
  </main>
</template>
<style scoped>
.profile {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 0fr 4fr repeat(2, 0fr);
  grid-template-rows: 1fr repeat(4, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.statusdetails {
  grid-area: 1 / 1 / 2 / 2;
  padding: 5%;
  background-color: darkgoldenrod;
}
.prefrel {
  grid-area: 1 / 3 / 2 / 4;
  padding: 5%;
  background-color: darkgoldenrod;
}
</style>
