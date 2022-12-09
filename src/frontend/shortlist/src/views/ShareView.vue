<!--
<script>
import { mapState } from "pinia";
import { sessionStore } from "../states/sessionStore";

export default {
  name: "ShortlistRow",
  emits: ["shareList"],
  computed: {
    ...mapState(sessionStore, {
      lists: "lists",
      listIdx: "listIdx",
      login: "loginState",
    }
    ),
  },
  methods: {
    printList() {
      console.log(this.lists[this.listIdx].shortlist_name);
    },
  },
};
</script>
<template>
  <div class="list-block">
    {{ this.login }}
  </div>
</template>
-->
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
    this.getShortlistData(this.$route.query.shortlistId);
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
