<script>
import ShortlistApi from "@/api/shortlist";
import SchoolShareCard from "../components/school/SchoolShareCard.vue";
const apiClient = new ShortlistApi("https://api.shortlist.nyc/");
export default {
  components: {
    SchoolShareCard,
  },
  methods: {
    getBorough(schoolIndex) {
      // console.log(boroid)
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
    testFunc() {
      console.log(this.shortlistData);
    },
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
    <h1>Report Card</h1>
    <div class="school-simple-container">
      <template
        v-for="(schoolData, schoolIndex) in shortlistData[0].schools"
        :key="schoolData"
      >
        <SchoolShareCard :schoolData="schoolData" />
      </template>
    </div>

    <button @click="testFunc()" style="background-color: green; color: white">
      Test
    </button>
  </div>
  <div v-else>
    <p>Error, you school list maybe empty.</p>
  </div>
</template>
<style scoped>
.school-simple-container {
  width: 1000px;
  height: 100%;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #779886, -14px -14px 20px white;
  font-family: "Aleo";
  display: flex;
  flex-direction: column;
}
.school-simple-name-row {
  width: 100%;
  padding: 15px;
}
.school-simple-name-name {
  width: 100%;
  text-align: end;
  font-weight: bold;
  font-size: 24px;
  font-family: "Libre Baskerville";
}
.school-simple-name-borough {
  width: 100%;
  text-align: end;
  font-size: 20px;
}
</style>
