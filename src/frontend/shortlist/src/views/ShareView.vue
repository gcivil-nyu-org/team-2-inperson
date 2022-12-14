<script>
import ShortlistApi from "@/api/shortlist";
import SchoolShareCard from "../components/school/SchoolShareCard.vue";
import MaterialIcon from "../components/icons/MaterialIcon.vue";
const apiClient = new ShortlistApi("https://api.shortlist.nyc/");
export default {
  components: {
    SchoolShareCard,
    MaterialIcon,
  },
  methods: {
    getBorough(schoolIndex) {
      let boros = [
        "",
        "Bronx",
        "Brooklyn",
        "Manhattan",
        "Queens",
        "Staten Island",
      ];
      return boros[
        this.shortlistData[0].schools[schoolIndex].schoolMetadata.boroughCode
      ];
    },
    getShortlistData(listId) {
      let success = (result) => {
        this.shortlistData = result.data[0];
        this.dataSuccess = true;
        this.bgcolor = this.shortlistData.settings.color;
        this.listSize = this.shortlistData.school_ids.length;
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
    let bgcolor = "#030303";
    let listSize = 0;
    return {
      dataSuccess,
      shortlistData,
      bgcolor,
      listSize,
    };
  },
};
</script>

<template>
  <div v-if="dataSuccess">
    <label class="share-shortlist-title">
      <MaterialIcon
        :src="this.shortlistData.settings.icon.value"
        size="20"
        style="color: white; size: 30px"
      />&nbsp;
      <span v-if="this.$route.query.userName" style="font-size: large">
        {{ this.$route.query.userName }}'s
        {{ this.shortlistData.settings.name }} Shortlist
      </span>
      <span v-else style="font-size: large">
        {{ this.shortlistData.settings.name }} Shortlist
      </span>
    </label>
    <div style="overflow: auto" class="report-school-cards">
      <template v-for="schoolData in shortlistData.schools" :key="schoolData">
        <SchoolShareCard :schoolData="schoolData" />
      </template>
    </div>
  </div>
  <div v-else>
    <p>Sorry, that list does not exist.</p>
  </div>
  <router-link to="/">
    <img
      src="/short-list-logo-light-navbar.png"
      class="logo_img"
      alt="shortlistlogo"
  /></router-link>
</template>
<style scoped>
.share-shortlist-title {
  width: 100%;
  font-family: "Aleo";
  font-size: 1.5rem;
  padding: 10px;
  line-height: 2rem;
  color: #ffffff;
  text-align: center;
  background-color: #030303;
}
.report-school-cards {
  display: grid;
  grid-template-columns: repeat(v-bind(listSize), 1fr) 0fr;
  grid-template-rows: 1fr repeat(v-bind(listSize), 0fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  background-color: v-bind(bgcolor);
  padding: 10px;
  justify-items: center;
}

.logo_img {
  position: fixed;
  bottom: 10px;
  left: 45%;
  width: 15vw;
  height: 10vh;
}
</style>
