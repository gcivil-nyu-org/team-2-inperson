
<script>
import ShortlistRow from "./ShortlistRow.vue";

export default {
  name: "ShortlistManager",
  props: ["studentShortlists"],
  components: { ShortlistRow },
  emits: ["listItemDetailClick", "itemDragOver", "itemDragDrop", "listItemDeleteClick"],
  methods: {
    listItemDetailClick(e, id) {
      this.$emit("listItemDetailClick", {
        schoolId: e,
        listId: id,
      });
    },
    itemDragOver(e, id) {
      this.$emit("itemDragOver", { event: e, listId: id });
    },
    itemDragDrop(e, id) {
      this.$emit("itemDragDrop", { event: e, listId: id });
    },
    listItemDeleteClick(e, id) {
      this.$emit("listItemDeleteClick", {
        schoolId: e,
        listId: id,
      });
    },
  },
};
</script>

<template>
  <div class="layout-list-section">
    <template v-for="(list, listNum) in studentShortlists" :key="list">
      <ShortlistRow
        :listId="listNum"
        :listSettings="list.settings"
        :listSchools="list.schools"
        @listItemDetailClick="(e) => listItemDetailClick(e, list.id)"
        @itemDragOver="(e) => itemDragOver(e, listNum)"
        @itemDragDrop="(e) => itemDragDrop(e, listNum)"
        @listItemDeleteClick="(e) => listItemDeleteClick(e, listNum)"
      />
    </template>
  </div>
</template>

<style scoped>
.layout-list-section {
  height: 100%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
