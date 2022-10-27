<script>
import ShortlistManager from "../components/layout/shortlists/ShortlistManager.vue";
import RecommendationStack from "../components/layout/recommendations/RecommendationStack.vue";
import TrashCan from "../components/layout/shortlists/TrashCan.vue";
import ModalFullScreen from "../components/layout/ModalFullScreen.vue";
import SchoolCard from "../components/school/SchoolCard.vue";

import { dragStateStore } from "../states/categorizeDragAndDrop";

import { shortLists } from "../api/examples/shortlists.js";
import { recommendations } from "../api/examples/recommendations.js";
import axios from "axios";

export default {
  components: {
    ShortlistManager,
    RecommendationStack,
    TrashCan,
    ModalFullScreen,
    SchoolCard,
  },
  setup() {
    const dragState = dragStateStore();
    return {
      dragState,
    };
  },
  methods: {
    swapListElements(inList, idx1, idx2) {
      inList[idx2] = inList.splice(idx1, 1, inList[idx2])[0];
      /*
      let tmp = inList[idx1];
      inList[idx1] = inList[idx2];
      inList[idx2] = tmp;
      */
    },
    showSchoolModal(e) {
      this.schoolDetailModalVisible = true;
      this.schoolDetailModalData =
        this.myShortlists[e.listIdx].schools[e.schoolIdx];
    },
    dragDropOver() {
      if (this.dragState.dragType == "reorderList") {
        if (
          this.dragState.reorderListState.activeDrop &&
          this.dragState.reorderListState.listOverIdx !=
            this.dragState.reorderListState.listStartIdx
        ) {
          // reorder list priority
          console.log("CHANGE LIST PRIORITY");
          let a = this.dragState.reorderListState.listStartIdx;
          let b = this.dragState.reorderListState.listOverIdx;
          this.myShortlists[b] = this.myShortlists.splice(
            a,
            1,
            this.myShortlists[b]
          )[0];

          this.dragState.reorderListState.listStartIdx =
            this.dragState.reorderListState.listOverIdx;
          return;
        }
        return;
      }
      if (this.dragState.dragType == "reorderSchoolInList") {
        if (
          this.dragState.reorderSchoolInListState.activeDrop &&
          this.dragState.reorderSchoolInListState.schoolOverIdx !=
            this.dragState.reorderSchoolInListState.schoolStartIdx
        ) {
          // get folder to modify
          for (let i = 0; i < this.myShortlists.length; i++) {
            if (
              this.myShortlists[i].settings.name ==
              this.dragState.reorderSchoolInListState.listName
            ) {
              // reorder priority within list;
              console.log("CHANGE PRIORITY WITHIN LIST");
              let a = this.dragState.reorderSchoolInListState.schoolStartIdx;
              let b = this.dragState.reorderSchoolInListState.schoolOverIdx;
              let targList = this.myShortlists[i].schools;
              targList[b] = targList.splice(a, 1, targList[b])[0];

              this.dragState.reorderSchoolInListState.schoolStartIdx =
                this.dragState.reorderSchoolInListState.schoolOverIdx;
              return;
            }
          }
        }
      }
    },
    dragDropDrop() {
      if (this.dragState.dragType == "categorize") {
        if (this.dragState.categorizeState.activeDrop) {
          this.myRecommendations.splice(
            this.dragState.categorizeState.schoolIdx,
            1
          );
          if (this.dragState.categorizeState.schoolOverListIdx == -1) {
            // trash it;
            console.log("DELETE school");
          } else {
            // assign it;
            console.log("ASSIGN SCHOOL");
            this.myShortlists[
              this.dragState.categorizeState.schoolOverListIdx
            ].schools.push(this.dragState.categorizeState.schoolData);
          }
        }
      }
    },
    changeListSettings(e) {
      // update UI
      this.myShortlists[e.listId].settings = JSON.parse(
        JSON.stringify(e.settings)
      );
      // TODO: send update to api
      console.log("SEND UPDATE SETTINGS:", e.settings);
    },
    shareList(e) {
      console.log("SHARED LIST #:", e);
    },
  },
  data() {
    let myShortlists = shortLists;
    let myRecommendations = recommendations;
    let schoolDetailModalVisible = false;
    let schoolDetailModalData = null;
    let listDragEnabled = false;
    let listDropEnabled = false;
    let draggingCurrent = {
      position: null,
      data: null,
    };
    return {
      myShortlists,
      myRecommendations,
      draggingCurrent,
      schoolDetailModalVisible,
      schoolDetailModalData,
      listDragEnabled,
      listDropEnabled,
    };
  },
  mounted() {
    axios
      .get(
        //"http://shortlist-api-361033341.us-east-1.elb.amazonaws.com/api/shortlists"
        "https://1rct87m2md.execute-api.us-east-1.amazonaws.com/api/shortlists"
      )
      .then((response) => {
        this.myShortlists = JSON.parse(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log("AXIOS ERR:", err);
      });
  },
};
</script>

<template>
  <ModalFullScreen
    v-if="schoolDetailModalVisible"
    visible="schoolDetailModalVisible"
    @modalOff="schoolDetailModalVisible = false"
  >
    <div style="display: block">
      <div
        style="
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
        "
      >
        Discard?
      </div>
      <SchoolCard
        v-if="schoolDetailModalData"
        :schoolData="schoolDetailModalData"
      />
    </div>
  </ModalFullScreen>

  <div
    class="categorize-view-container"
    @dragover="dragDropOver"
    @drop="dragDropDrop"
  >
    <div class="categorize-view-trash-column">
      <TrashCan />
    </div>

    <div class="categorize-view-recommendation-column">
      <RecommendationStack :recommendations="myRecommendations" />
    </div>
    <div style="width: 50px; height: 100%"></div>
    <div class="categorize-view-shortlist-column">
      <ShortlistManager
        v-if="this.myShortlists.length > 0"
        :studentShortlists="myShortlists"
        @listItemDetailClick="(e) => showSchoolModal(e)"
        @changeListSettings="(e) => changeListSettings(e)"
        @shareList="(e) => shareList(e)"
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
  justify-content: center;
}
.categorize-view-trash-column {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categorize-view-recommendation-column {
  min-width: 550px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.categorize-view-shortlist-column {
  min-width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
