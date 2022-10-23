<script>
import ShortlistManager from "../components/layout/shortlists/ShortlistManager.vue";
import RecommendationStack from "../components/layout/recommendations/RecommendationStack.vue";
import TrashCan from "../components/layout/shortlists/TrashCan.vue";

import { shortLists } from "../api/examples/shortlists.js";
import { recommendations } from "../api/examples/recommendations.js";
import { assignSchoolToList } from "../api/assignSchoolToList.js";

export default {
  components: { ShortlistManager, RecommendationStack, TrashCan },
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
    startDrag() {
      // optional ... set the manager to allow drop at this point (instead of always)
    },
    assignSchool(e) {
      if (e.listId == -1) {
        console.log("TRASH IT");
        // TODO: send to api
      } else {
        // categorize it
        this.myShortlists[e.listId].schools.push(this.myRecommendations[0]);
        // TODO: send to api
      }
      // remove from recomendation stack
      this.myRecommendations.splice(0, 1);
    },
    // TODO: fill in delete call to remove from list
    deleteSchool(e) {
        //delete this.myShortlists[e.listId].schools[0];
        //console.log(this.myShortlists[e.listId].schools.indexOf(e.schoolId));
        console.log(e.schoolId);
    },
  },
  data() {
    let myShortlists = shortLists;
    let myRecommendations = recommendations;
    let draggingCurrent = {
      position: null,
      data: null,
    };
    return {
      myShortlists,
      myRecommendations,
      draggingCurrent,
    };
  },
};
</script>

<template>
  <div class="categorize-view-container">
    <div class="categorize-view-trash-column">
      <TrashCan @itemDragDrop="(e) => assignSchool(e)" />
    </div>
    <div class="categorize-view-recommendation-column" style="width: 500px">
      <RecommendationStack
        :recommendations="myRecommendations"
        @schoolCardDragStart="(e) => startDrag(e)"
      />
    </div>
    <div class="categorize-view-shortlist-column">
      <ShortlistManager
        :studentShortlists="myShortlists"
        @listItemDetailClick="(e) => logEmit(e)"
        @itemDragDrop="(e) => assignSchool(e)"
        @listItemDeleteClick="(e) => deleteSchool(e)"
      />
    </div>
  </div>
</template>

<style scoped>
.categorize-view-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
.categorize-view-trash-column {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.categorize-view-recommendation-column {
  min-width: 550px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}

.categorize-view-shortlist-column {
  min-width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
}
</style>
