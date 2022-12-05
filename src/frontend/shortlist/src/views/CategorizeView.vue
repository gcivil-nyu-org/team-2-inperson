<script>
import ShortlistManager from "../components/layout/shortlists/ShortlistManager.vue";
import RecommendationStack from "../components/layout/recommendations/RecommendationStack.vue";
import TrashCan from "../components/layout/shortlists/TrashCan.vue";
import ModalFullScreen from "../components/layout/ModalFullScreen.vue";
import SchoolCard from "../components/school/SchoolCard.vue";
import { dragStateStore } from "../states/categorizeDragAndDrop";
import ShortlistApi from "../api/shortlist";
import { shortLists } from "../api/examples/shortlists.js";
import cookie from "@/helpers/cookie.js";

const shortlistApi = new ShortlistApi("https://api.shortlist.nyc/");

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
  computed: {
    acctID() {
      return cookie.getCookie("accountid");
    },
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
    removeTopCard() {
      this.myRecommendations.splice(
        // remove card at schoolIdx (always 0?)
        this.dragState.categorizeState.schoolIdx,
        1
      );
    },
    dragDropDrop() {
      if (this.dragState.dragType == "categorize") {
        if (this.dragState.categorizeState.activeDrop) {
          let listIdx = this.dragState.categorizeState.schoolOverListIdx;
          if (listIdx == -1) {
            // trash it;
            this.removeTopCard();
            console.log("DELETE school");
            // TODO set current_trashed in db
          } else {
            // assign it;
            console.log("ASSIGN SCHOOL");
            if (this.myShortlists[listIdx].schools.length < 4) {
              this.myShortlists[listIdx].schools.push(
                this.dragState.categorizeState.schoolData
              );
              this.removeTopCard();
              // TODO set current_accepted in db
            } else {
              alert("List is full");
            }
          }
          if (this.myRecommendations.length == 3) {
            // get new schools
            this.getRecommendations(7);
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
    getRecommendations(count = 10) {
      console.log("payload:", this.acctID);
      let req = shortlistApi
        .getRecommendations()
        .forAccountId(this.acctID)
        .count(count)
        .strategy("RANKING")
        .onSuccess((result) => {
          console.log("categorize recs: ", Array.isArray(result.data));
          this.myRecommendations.push(...result.data);
        })
        .onFail((err) => {
          console.log("fail", err.response.status, err.response.data);
          this.myRecommendations = "ERROR GETTING RECOMMENDATIONS";
        });
      req.execute();
    },
  },
  data() {
    let myShortlists = shortLists;
    let myRecommendations = []; // recommendations;
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
  created() {
    this.getRecommendations(50);
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
  padding-top: 25px;
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
