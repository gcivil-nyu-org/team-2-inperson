<script>
import ShortlistManager from "../components/layout/shortlists/ShortlistManager.vue";
import RecommendationStack from "../components/layout/recommendations/RecommendationStack.vue";

import { shortLists } from "../api/examples/shortlists.js";
import { recommendations } from "../api/examples/recommendations.js";
import { assignSchoolToList } from "../api/assignSchoolToList.js";

export default {
  components: { ShortlistManager, RecommendationStack },
  methods: {
    addSchool() {
      assignSchoolToList(20, 20, 30);
      let schoolData = {
        id: 99,
        name: "LSKDJGF",
      };
      let listId = Math.floor(Math.random() * 3);
      this.myShortlists[listId].schools.push(schoolData);
    },
    logEmit(e) {
      console.log(e);
    },
  },
  data() {
    const myShortlists = shortLists;
    const myRecommendations = recommendations;
    return {
      myShortlists,
      myRecommendations,
    };
  },
};
</script>

<template>
  <div class="stage-container">
    <div>
      <RecommendationStack :recommendations="myRecommendations" />
    </div>
    <div style="width: 400px; margin-left: 100px; height: 900px">
      <ShortlistManager
        :studentShortlists="myShortlists"
        @listItemDetailClick="(e) => logEmit(e)"
      />
    </div>
  </div>
</template>

<style scoped>
.stage-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
