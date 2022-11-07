<script>
// //import Vue from "vue";
// import axios from "axios";
// //import VueAxios from "vue-axios";
// //import { getAPI } from "../axios-api";

// //Vue.useAttrs(VueAxios.axios);
// export default {
//   //   data() {
//   //     return {
//   //       APIData: [],
//   //     };
//   //   },
//   //   created() {
//   //     getAPI
//   //       .get("/account/")
//   //       .then((response) => {
//   //         this.APIData = response.data;
//   //         console.log(response.data);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   },
//   //   mounted() {
//   //     Vue.axios.get("http://manage.shortlist.nyc/admin/api/account/")
//   //     .then((resp) => {
//   //         console.warn(resp);
//   //       });
//   //   },

//   mounted() {
//     const config = {
//       headers: {
//         email: "poojapatel@nyu.edu",
//       },
//     };
//     const url = "https://api.shortlist.nyc/account/metadata";
//     axios
//       .post(url, config)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log("AXIOS ERR:", err);
//       });
//   },
// };
// import PreferenceManagerVue from '../../preferences/PreferenceManager.vue';
// export default {
//   components:{
//     PreferenceManagerVue,
//   },
//   data() {
//     return {
//       profileprefResults: {},
//     };
//   },
//   methods: {
//             getprefResults ( data ) {
//                 this.profileprefResults = data;
//             }
//         }
// }
</script>

<template>
  <main>
    <label class="pref-title">Preferences</label>
    <form class="prefprofileform">
      <label class="pref-q-name">QuestionFromAPI</label>
      <input
        type="text"
        class="profilefields"
        placeholder="ResponseFromAPI"
        id="firstname"
      />

      <label class="pref-q-name">QuestionFromAPI</label>
      <input
        type="text"
        class="profilefields"
        placeholder="ResponseFromAPI"
        id="firstname"
      />
      <label class="pref-q-name">QuestionFromAPI</label>
      <input
        type="text"
        class="profilefields"
        placeholder="ResponseFromAPI"
        id="firstname"
      />
      <label class="pref-q-name">QuestionFromAPI</label>
      <input
        type="text"
        class="profilefields"
        placeholder="ResponseFromAPI"
        id="firstname"
      />
    </form>
  </main>
</template>
<style scoped>
.prefprofileform {
  padding: 10px;
  width: 100%;
}
.pref-title {
  width: 100%;
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: None;
  line-height: 2rem;
  color: #067418;
}
.pref-q-name {
  padding: 10px;
  width: 50%;
  font-family: "Klee One", cursive;
  font-weight: bold;
}
.profilefields {
  width: 50%;
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: "Aleo", serif;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 20px;
}

.pref {
  border: 1px solid grey;
  width: 25%;
  white-space: nowrap;
}

.prefq {
  grid-area: 1 / 1 / 2 / 2;
}
.prefresp {
  grid-area: 1 / 3 / 2 / 4;
}
.prefedit {
  grid-area: 1 / 5 / 2 / 6;
}
</style>
