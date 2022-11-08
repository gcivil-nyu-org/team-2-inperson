<script>
import PreferenceDemo from "../../preferences/PreferenceDemo.vue";
import axios from "axios";

export default {
  components: {
    PreferenceDemo,
  },
  data() {
    return {
      prefs: "",
    };
  },
  mounted() {
    axios
      .post(
        "https://api.shortlist.nyc/account/metadata",
        {},
        {
          headers: {
            "x-shortlist-account": "e44278fec4984522b156cae1a8b3981d",
          },
        }
      )
      .then((response) => {
        let alldata = JSON.parse(JSON.stringify(response.data));
        this.prefs = alldata["preferences"];
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err.response.data);
      });
  },
};
</script>

<template>
  <label class="prefprofiletitle">Preferences</label>
    <form class="prefprofileform">
      <template v-for="val in prefs" :key="val">
        <label class="pref-q-name">{{ val.Question }}</label>
        <input type="text" class="profilefields" :placeholder="val.Response" />
      </template>
    </form>
  <button>Update preferences</button>  
  <!-- <PreferenceDemo /> -->
</template>
<style scoped>
.pref {
  padding: 9px;
}
</style>
