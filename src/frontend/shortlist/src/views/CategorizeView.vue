<script>
import ShortlistManager from "../components/layout/shortlists/ShortlistManager.vue";
import RecommendationStack from "../components/layout/recommendations/RecommendationStack.vue";
import TrashCan from "../components/layout/shortlists/TrashCan.vue";
import ModalFullScreen from "../components/layout/ModalFullScreen.vue";
import SchoolCard from "../components/school/SchoolCard.vue";
import { dragStateStore } from "../states/categorizeDragAndDrop";
import ShortlistApi from "../api/shortlist";
import cookie from "@/helpers/cookie.js";
import axios from "axios";

const shortlistApi = new ShortlistApi("https://api.shortlist.nyc/");

export default {
  emits: ["markSchoolAsAccepted", "markSchoolAsTrashed"],
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
    markSchoolAsAccepted(recoID) {
      this.$emit("markSchoolAsAccepted", {
        recoID: recoID,
        accepted: true,
      });
    },
    markSchoolAsTrashed(recoID) {
      this.$emit("markSchoolAsTrashed", {
        recoID: recoID,
        trashed: true,
      });
    },
    successGet(responseData) {
      this.myShortlists = responseData;
    },
    calculateSaveEndpoint(listIndex) {
      let listID = this.myShortlists[listIndex].shortlist_id;
      return (
        "http://shortlist-api-361033341.us-east-1.elb.amazonaws.com/shortlists/" +
        listID +
        "/"
      );
    },
    getLists() {
      axios
        .post("https://api.shortlist.nyc/shortlists/all", {
          user_id: this.acctID,
        })
        .then((response) => this.successGet(response.data))
        .catch(function (error) {
          console.log(error.response);
        });
    },
    saveList(listIndex) {
      let listSchools = this.myShortlists[listIndex].schools;
      // console.log("list id is: ", this.myShortlists[listIndex].shortlist_id);
      let schoolList = [];
      for (let i = 0; i < listSchools.length; i++) {
        schoolList.push(listSchools[i].schoolMetadata.id);
      }
      let payload = {
        user_id: this.acctID,
        school_ids: schoolList,
        shortlist_name: this.myShortlists[listIndex].shortlist_name,
        settings: this.myShortlists[listIndex].settings,
      };
      axios
        .post(this.calculateSaveEndpoint(listIndex), payload)
        // eslint-disable-next-line no-unused-vars
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    },
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
      this.schoolDetailModalData = {
        listIdx: e.listIdx,
        schoolIdx: e.schoolIdx,
        data: this.myShortlists[e.listIdx].schools[e.schoolIdx],
      };
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
            // set current_trashed in db
            this.markSchoolAsTrashed(this.myRecommendations[0].id);
            this.removeTopCard();
            // console.log("DELETE school");
          } else {
            // assign it;
            if (this.myShortlists[listIdx].schools.length < 4) {
              // console.log("ASSIGN SCHOOL");
              this.myShortlists[listIdx].schools.push(
                this.dragState.categorizeState.schoolData.school
              );
              // set current_accepted in db
              this.markSchoolAsAccepted(this.myRecommendations[0].id);
              this.removeTopCard();
              // console.log("listIDX is: ", listIdx);
              // console.log("save schools are: ", this.myShortlists[listIdx].schools);
              this.saveList(listIdx);
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
      // send update to api
      // console.log("SEND UPDATE SETTINGS:", e.settings);
      this.saveList(e.listId);
    },
    shareList(e) {
      console.log("SHARED LIST #:", e);
    },
    deleteFromList() {
      // console.log("DELETE FROM LIST: ", this.schoolDetailModalData.data.schoolMetadata.id);
      let schoolIdx = this.schoolDetailModalData.schoolIdx;
      let listIdx = this.schoolDetailModalData.listIdx;
      this.myShortlists[listIdx].school_ids.splice(schoolIdx, 1);
      this.myShortlists[listIdx].schools.splice(schoolIdx, 1);
      this.saveList(listIdx);

      // reset modal data
      this.schoolDetailModalVisible = false;
      this.schoolDetailModalData = null;
    },
    getRecommendations(count = 10) {
      let req = shortlistApi
        .getRecommendations()
        .forAccountId(this.acctID)
        .count(count)
        .strategy("RANKING")
        .onSuccess((result) => {
          this.myRecommendations.push(...result.data);
        })
        .onFail((err) => {
          console.log("fail", err.response.status, err.response.data);
          this.myRecommendations = "ERROR GETTING RECOMMENDATIONS";
        });
      req.execute();
    },
    printRank() {
      console.log("Rank: ", this.myRecommendations[0].rankAsc);
    },
  },
  data() {
    let myShortlists = [];
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
    this.getRecommendations(15);
    this.getLists();
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
        <button @click="deleteFromList()">Discard?</button>
      </div>
      <SchoolCard
        v-if="schoolDetailModalData"
        :schoolData="schoolDetailModalData.data"
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

    <div class="categorize-view-recommendation-column" @click="printRank">
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  position: relative;
}
.categorize-view-trash-column {
  width: 150px;
  height: 100%;
  display: flex;
  padding-top: 200px;
  justify-content: center;
  align-items: center;
}
.categorize-view-recommendation-column {
  min-width: 550px;
  height: 100px;
}

.categorize-view-shortlist-column {
  min-width: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
