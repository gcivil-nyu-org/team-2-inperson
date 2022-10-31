import { defineStore } from "pinia";

export const dragStateStore = defineStore("dragState", {
  state: () => {
    return {
      dragType: null,
      categorizeState: {
        schoolData: null,
        schoolDataIdx: null,
        schoolOverListIdx: null,
        activeDrop: false,
      },
      reorderListState: {
        listData: null,
        listStartIdx: null,
        listOverIdx: null,
        activeDrop: false,
      },
      reorderSchoolInListState: {
        schoolData: null,
        schoolStartIdx: null,
        schoolOverIdx: null,
        listName: null,
        activeDrop: false,
      },
    };
  },
  getters: {},
  actions: {
    startCategorize(item, itemIdx) {
      this.dragType = "categorize";
      this.categorizeState = {
        schoolData: JSON.parse(JSON.stringify(item)),
        schoolDataIdx: itemIdx,
        schoolOverListIdx: null,
        activeDrop: false,
      };
    },

    endCategorize() {
      this.dragType = null;
      this.categorizeState = {
        schoolData: null,
        schoolDataIdx: null,
        schoolCurrentListIdx: null,
        schoolOverListIdx: null,
        activeDrop: false,
      };
    },
    startReorderList(folder, folderIdx) {
      this.dragType = "reorderList";
      this.reorderListState = {
        listData: JSON.parse(JSON.stringify(folder)),
        listStartIdx: folderIdx,
        listOverIdx: folderIdx,
        activeDrop: true,
      };
    },
    endReorderList() {
      this.dragType = null;
      this.reorderListState = {
        listData: null,
        listStartIdx: null,
        listOverIdx: null,
        activeDrop: false,
      };
    },
    startReorderSchoolInList(listName, school, schoolIdx) {
      this.dragType = "reorderSchoolInList";
      this.reorderSchoolInListState = {
        schoolData: JSON.parse(JSON.stringify(school)),
        schoolStartIdx: schoolIdx,
        schoolOverIdx: schoolIdx,
        listName: listName,
        activeDrop: true,
      };
    },
    endReorderSchoolInList() {
      this.dragType = null;
      this.reorderSchoolInListState = {
        schoolData: null,
        schoolStartIdx: null,
        schoolOverIdx: null,
        listName: null,
        activeDrop: false,
      };
    },
  },
});
