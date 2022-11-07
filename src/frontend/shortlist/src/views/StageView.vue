<script>
import shortlistApi from "../api/shortlist";
const myAccount = "e44278fec4984522b156cae1a8b3981d";
const recoAccount = "99156bf3a5254c368e54c990b8865b4a";

export default {
  data() {
    return {
      apiResult: {},
    };
  },
  methods: {
    getRecos() {
      let req = new shortlistApi.getRecommendations()
        .forAccountId(recoAccount)
        .count(10)
        .strategy("RANKING")
        .successCallback((result) => {
          this.apiResult = result.data;
        });
      req.do();
    },
    getAccountById() {
      let req = new shortlistApi.getAccountMetadata()
        .forAccountId(myAccount)
        .successCallback((result) => {
          this.apiResult = result.data;
        });
      req.do();
    },
    getAccountByEmail() {
      let config = {
        email: "checkRecos@email.com",
        success: (result) => {
          this.apiResult = result;
        },
      };
      shortlistApi.getAccountMetadata(config);
    },
  },
  mounted() {
    this.getRecos();
    // this.getAccountById();
  },
};
</script>

<template>
  <h1>
    <pre>{{ apiResult }}</pre>
  </h1>
</template>

<style></style>
