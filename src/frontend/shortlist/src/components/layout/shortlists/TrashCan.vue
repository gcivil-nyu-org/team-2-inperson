<script>
import MaterialIcon from "../../icons/MaterialIcon.vue";
import { dragStateStore } from "../../../states/categorizeDragAndDrop";

export default {
  name: "TrashCan",
  components: { MaterialIcon },
  setup() {
    const dragState = dragStateStore();
    return { dragState };
  },
  methods: {
    dragEnter(e) {
      if (this.dragState.dragType == "categorize") {
        e.preventDefault();
        this.dragState.categorizeState.schoolOverListIdx = -1;
        this.dragState.categorizeState.activeDrop = true;
      }
    },
    dragOver(e) {
      if (this.dragState.dragType == "categorize") {
        this.dragEnter(e);
      }
    },
    dragLeave() {
      if (this.dragState.dragType == "categorize") {
        this.dragState.categorizeState.schoolOverListIdx = null;
        this.dragState.categorizeState.activeDrop = false;
      }
    },
  },
};
</script>

<template>
  <div
    class="shortlist-trashcan-container"
    @dragenter="dragEnter"
    @dragover="dragOver"
    @dragleave="dragLeave"
  >
    <MaterialIcon src="delete_sweep" size="60" color="rgba(50, 50, 50, 0.80)" />
  </div>
</template>

<style scoped>
.shortlist-trashcan-container {
  width: 90px;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 01px rgba(50, 50, 50, 0.25);
  font-family: "Aleo" sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
