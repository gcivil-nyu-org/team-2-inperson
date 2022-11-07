<script>
import { ref } from "vue"
import axios from "axios";

export default {
  data() {
    let profileData = ref();
    let prefs = ref();
    return {
      profileData,
      prefs
    }
  },
  mounted() {
    axios
      .post('https://api.shortlist.nyc/account/metadata', {},
      {
        headers: {'x-shortlist-account':'e44278fec4984522b156cae1a8b3981d'}
      })
      .then((response) => {
        this.profileData = JSON.parse(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err.response.data);
      });
  },
}
</script>

<template>
  <h1>Your Work</h1>
  <p>{{ profileData }}</p>

  <p>{{ prefs }}</p>
</template>

<style></style>
