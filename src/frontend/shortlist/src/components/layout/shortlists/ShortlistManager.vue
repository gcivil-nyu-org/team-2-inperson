<script>
import ShortlistRow from "./ShortlistRow.vue";
import { dragStateStore } from "../../../states/categorizeDragAndDrop";

export default {
  name: "ShortlistManager",
  props: ["studentShortlists"],
  components: { ShortlistRow },
  emits: ["listItemDetailClick", "changeListSettings", "shareList"],
  setup() {
    const dragState = dragStateStore();
    return { dragState };
  },
  methods: {
    dragStart(e, listIdx) {
      this.dragState.startReorderList(this.studentShortlists[listIdx], listIdx);
    },
    dragEnter(e, listIdx) {
      if (this.dragState.dragType == "categorize") {
        e.preventDefault();
        this.dragState.categorizeState.schoolOverListIdx = listIdx;
        this.dragState.categorizeState.activeDrop = true;
      }
      if (this.dragState.dragType == "reorderList") {
        e.preventDefault();
        this.dragState.reorderListState.listOverIdx = listIdx;
        this.dragState.reorderListState.activeDrop = true;
      }
    },
    dragOver(e, listIdx) {
      if (this.dragState.dragType == "categorize") {
        this.dragEnter(e, listIdx);
        return;
      }
      if (this.dragState.dragType == "reorderList") {
        this.dragEnter(e, listIdx);
        return;
      }
    },
    dragLeave() {
      if (this.dragState.dragType == "categorize") {
        this.dragState.categorizeState.schoolOverListIdx = null;
        this.dragState.categorizeState.activeDrop = false;
        return;
      }
      if (this.dragState.dragType == "reorderList") {
        this.dragState.reorderListState.listOverIdx = null;
        this.dragState.reorderListState.activeDrop = false;
        return;
      }
    },
    dragEnd() {
      this.dragState.endReorderList();
    },
    listItemDetailClick(schoolIdx, listIdx) {
      this.$emit("listItemDetailClick", {
        schoolIdx: schoolIdx,
        listIdx: listIdx,
      });
    },

    changeListSettings(settings, id) {
      this.$emit("changeListSettings", { listId: id, settings: settings });
    },
    shareList(id) {
      this.$emit("shareList", id);
    },
  },
};
</script>

<template>
  <div class="layout-list-section">
    <template v-for="(list, listNum) in studentShortlists" :key="list">
      <ShortlistRow
        :listId="listNum"
        :listSettings="list.settings[0]"
        :listSchools="list.schools"
        @listItemDetailClick="(e) => listItemDetailClick(e, listNum)"
        @shareList="shareList(listNum)"
        @changeListSettings="(s) => changeListSettings(s, listNum)"
        draggable="true"
        @dragstart="(e) => dragStart(e, listNum)"
        @dragenter="(e) => dragEnter(e, listNum)"
        @dragover="(e) => dragOver(e, listNum)"
        @dragleave="dragLeave"
        @dragend="dragEnd"
      />
      <div style="height: 60px; width: 100px"></div>
    </template>
  </div>
</template>

<style scoped>
.layout-list-section {
  height: 100%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
