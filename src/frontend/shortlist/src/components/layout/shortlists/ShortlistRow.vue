<script>
import MaterialIcon from "../../icons/MaterialIcon.vue";
export default {
  name: "ShortlistRow",
  props: ["listId", "listSettings", "listSchools"],
  emits: ["listItemDetailClick", "itemDragOver", "itemDragDrop"],
  components: { MaterialIcon },
  data() {
    return {
      currentColor: localStorage.getItem('color-options')
    }; 
  },
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
    switchColor(colorChoice) {
      localStorage.setItem('color-options', colorChoice); 
      this.currentColor = localStorage.getItem('color-options')
  }
  },
};
</script>

<template>
  <div
    class="layout-list-row"
    :style="{ backgroundColor: listSettings.color }"
    @dragover="(e) => itemDragOver(e)"
    @drop="(e) => itemDragDrop(e)"
    v-bind:class = "currentColor"
  >
{{currentColor}}
    <div class = "color-options">
      <div id = "color-green"
      v-bind:class = "{'active': currentColor}"
      v-on:click = "switchColor('color-green')"></div>
      <div id = "color-pink"
      v-bind:class = "{'active': currentColor === 'color-pink'}"
      v-on:click = "switchColor('color-pink')"></div>
      <div id = "color-blue"
      v-bind:class = "{'active': currentColor === 'color-blue'}"
      v-on:click = "switchColor('color-blue')"></div>
      <div id = "color-yellow"
      v-bind:class = "{'active': currentColor === 'color-yellow'}"
      v-on:click = "switchColor('color-yellow')"></div>
      <div id = "color-orange"
      v-bind:class = "{'active': currentColor === 'color-orange'}"
      v-on:click = "switchColor('color-orange')"></div>
    </div>
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

.color-options {
  max-width: 800px;
  margin: auto 0;
  padding: 5px 0;
}
    #color-green {
      background-color: #5faf3b;
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
    }
    #color-blue {
      background-color: #68819F; 
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
    }
    #color-pink {
      background-color: #FFB6C1; 
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
    }
    #color-yellow {
      background-color: #FFFFE0;
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
    }
    #color-orange {
      background-color: #b64b1e;
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
    }
</style>