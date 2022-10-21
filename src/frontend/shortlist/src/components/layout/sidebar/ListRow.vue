<script>
export default {
  name: "ListRow",
  props: ["listName", "listSchools"],
  emits: ["listItemDetailClick"],
};
</script>

<template>
  <div class="layout-list-row">
    <div class="layout-list-row-header">{{ listName }}</div>
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

.layout-list-row-header {
  width: 100%;
  margin-left: 10px;
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
