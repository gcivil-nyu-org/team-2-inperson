<script>
export default {
  name: "TrashCan",
  emits: ["itemDragDrop", "itemDragOver"],
  methods: {
    itemDragOver(e) {
      e.preventDefault();
      this.$emit("itemDragOver", e);
    },
    itemDragDrop(e) {
      this.$emit("itemDragDrop", { event: e, listId: -1 });
    },
  },
};
</script>

<template>
  <div
    class="shortlist-trashcan-container"
    @dragover="(e) => itemDragOver(e)"
    @drop="(e) => itemDragDrop(e)"
  >
    TRASH
  </div>
</template>

<style scoped>
.shortlist-trashcan-container {
  width: 90px;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  background: rgb(222, 222, 222);
  font-family: "Aleo" sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
