<script>
import MaterialIcon from "../../icons/MaterialIcon.vue";
// import "main.css"; 
export default {
  name: "ShortlistRow",
  data() {
    return {
      currentColor: localStorage.getItem('color-options')
    }; 
  },
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
    >
    <div id = "color-box"  class = "color-orange"
v-bind:class = "currentColor">
{{currentColor}}
    
    <div class = "color-options">
      <div id = "color-white" 
      v-bind:class = "{'active': currentColor === 'color-white'}"
      v-on:click = "switchColor('color-white')"></div>
      <div id = "color-green"
      v-bind:class = "{'active': currentColor === 'color-green'}"
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
#color-box {
  font-family: sans-serif; 
  height: 100%; 
  padding: 20px; 
}
.layout-list-section {
  color: #2c3e50; 
  margin-top: 60px; 
}

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

html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0; 
  height: 100%; 
}
* {
  box-sizing: border-box;
}

html {
  height: 100%; 
}

body {
  background-color: #fff;
  color: #222; 
  height: 100vh; 
}

.txt-center {
  text-align: center; 
}

.color-options {
  max-width: 800px;
  margin: 0 auto;
  text-align: right;
  padding: 20px 0;
  div {
    cursor: pointer; 
    width: 20px; 
    height: 20px;
    border-radius: 4px; 
    margin: 2px 10px;
    border: 1px solid #fff;
    display: inline-block; 
    opacity: 0.5; 
    &.active {
      opacity: 1; 
    }
    }
    #color-white {
      background-color: #eee; 
    }
    #color-green {
      background-color: #5faf3b;
    }
    #color-blue {
      background-color: #68819F; 
    }
    #color-pink {
      background-color: #FFB6C1; 
    }
    #color-yellow {
      background-color: #FFFFE0;
    }
    #color-orange {
      background-color: #b64b1e;
    }
  }

#color-box.color-orange {
  background-color: #f4c9b7;
  .layout-list-row {
    background-color: #f4c9b7;
    h5 {
      color: #b64b1e; 
    }
    p {
      color: #000; 
    }
  }
}

#color-box.color-green {
  background-color: #9da79c;
  .layout-list-row {
    background-color: #c3e3c1;
    h3, 
    h5 {
      color: #5faf3b; 
    }
    p { 
      color: #000; 
    }
  }
}

#color-box.color-black {
  background-color: #5c5c5c;
  .layout-list-row {
    background-color: #333;
    h3, 
    h5 {
      color: #ffffff; 
    }
    p { 
      color: #000; 
    }
  }
}

#color-box.color-blue {
  background-color: #bec7e7;
  .layout-list-row {
    background-color: #d8def4;
    h3, 
    h5 {
      color: #1e41c1; 
    }
    p { 
      color: #000; 
    }
  }
}

#color-box.color-pink {
  background-color: #bec7e7;
  .layout-list-row {
    background-color: #d8def4;
    h3, 
    h5 {
      color: #FFB6C1; 
    }
    p { 
      color: #000; 
    }
  }
}

#color-box.color-while {
  background-color: #bec7e7;
  .layout-list-row {
    background-color: #d8def4;
    h3, 
    h5 {
      color: #eee; 
    }
    p { 
      color: #000; 
    }
  }
}

</style>
