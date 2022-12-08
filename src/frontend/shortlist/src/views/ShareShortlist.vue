<script>
import ShortlistApi from "@/api/shortlist";
const apiClient = new ShortlistApi("https://api.shortlist.nyc/");

export default {
  methods: {
    getShortlistData(listId) {
      let success = (result) => {
        this.shortlistData = result.data;
        this.dataSuccess = true;
      };
      let fail = (err) => {
        this.dataSuccess = false;
        console.log(err);
        // response.data does not work with this error
      };
      let req = apiClient.getShortlist(listId, success, fail);
      req.execute();
    },
  },
  mounted() {
    this.getShortlistData(this.$route.params.shortlistId);
  },
  data() {
    let dataSuccess = false;
    let shortlistData = {};
    return {
      dataSuccess,
      shortlistData,
    };
  },
};
</script>
<template>
  <div v-if="dataSuccess">
    <p>{{ shortlistData }}</p>
  </div>
  <div v-else>
    <p>Sorry, that list does not exist.</p>
  </div>
</template>
<style></style>
