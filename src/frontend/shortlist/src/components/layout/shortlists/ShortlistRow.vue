<script>
import MaterialIcon from "../../icons/MaterialIcon.vue";
export default {
  name: "ShortlistRow",
  props: ["listId", "listSettings", "listSchools"],
  emits: ["listItemDetailClick", "itemDragOver", "itemDragDrop"],
  components: { MaterialIcon },
  methods: {
    logEmit(e) {
      console.log(e);
    },
    itemDragOver(e) {
      e.preventDefault();
      this.$emit("itemDragOver", e);
    },
    itemDragDrop(e) {
      this.$emit("itemDragDrop", e);
    },
  },
};
</script>

<template>
  <div
    class="layout-list-row"
    :style="{ backgroundColor: listSettings.color }"
    @dragover="(e) => itemDragOver(e)"
    @drop="(e) => itemDragDrop(e)"
  >
    <div class="layout-list-header-row">
      <div class="layout-list-row-icon">
        <MaterialIcon
          :src="listSettings.icon.value"
          :color="listSettings.icon.color"
        />
      </div>
      <div class="layout-list-row-header">{{ listSettings.name }}</div>
    </div>
    <div class="layout-list-row-contents">
      <template v-for="school in listSchools" :key="school.id">
        <div
          class="layout-list-row-item"
          @click="$emit('listItemDetailClick', school.id)"
        >
          <div>{{ school.name }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.layout-list-row {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border-radius: 10px;
  background: rgb(214, 255, 214);
  box-shadow: 5px 5px 10px #779886, -5px -5px 10px white;
  font-family: "Aleo" sans-serif;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
}

.layout-list-header-row {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.layout-list-row-icon {
  display: flex;
  align-items: center;
  height: 100%;
}

.layout-list-row-header {
  width: 100%;
  margin-left: 10px;
  font-weight: bold;
}

.layout-list-row-contents {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
.layout-list-row-item {
  width: 100%;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: rgba(2, 2, 255, 0.242);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 10px;
}
</style>
