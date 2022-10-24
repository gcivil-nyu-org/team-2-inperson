<script>
import MaterialIcon from "../../icons/MaterialIcon.vue";
export default {
  name: "ShortlistRow",
  props: ["listId", "listSettings", "listSchools"],
  emits: [
    "listItemDetailClick",
    "itemDragOver",
    "itemDragDrop",
    "changeListSettings",
    "shareList",
  ],
  components: { MaterialIcon },
  data() {
    return {
      inEditMode: false,
      localSettings: { ...this.listSettings },
      allowedColors: {
        "#ecf0f3": { deselect: "#BBBBBB", select: "#000000" },
        "#bec7e7": { deselect: "#52569e", select: "#FFFF00" },
        "#bcd6a2": { deselect: "#42803b", select: "#FFFF00" },
        "#ffffa7": { deselect: "#cad40f", select: "#333333" },
        "#ffd580": { deselect: "#d1672e", select: "#FFFF00" },
        "#fadadd": { deselect: "#8c1d1d", select: "#FFFF00" },
      },
      allowedIcons: [
        "queue_music",
        "theater_comedy",
        "accessible",
        "directions_car",
        "sports_soccer",
        "sports_basketball",
        "sports_tennis",
        "pool",
        "sailing",
        "local_taxi",
        "sports_gymnastics",
        "train",
        "directions_bike",
        "science",
        "calculate",
        "engineering",
        "code_blocks",
        "palette",
        "keyboard",
        "token",
        "favorite",
      ],
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
    startChangeSettings() {
      // deep copy so we don't accidentally break state in the parents
      this.localSettings = JSON.parse(JSON.stringify(this.listSettings));
      this.inEditMode = true;
    },
    changeListSettings() {
      this.$emit("changeListSettings", this.localSettings);
      this.inEditMode = false;
    },
  },
};
</script>

<template>
  <div
    id="layout-list-row" 
    @dragover="(e) => itemDragOver(e)"
    @drop="(e) => itemDragDrop(e)"
    v-bind:class = "currentColor" 
    :style="{ backgroundColor: currentColor }"
  >
    <template v-if="inEditMode">
      <!-- Name -->
      <div class="layout-list-settings-row">
        <div class="layout-list-settings-row-prompt">Name the List:</div>
        <div class="layout-list-settings-row-options">
          <input
            class="layout-list-settings-name-input"
            v-model="localSettings.name"
            autofocus
          />
        </div>
      </div>

      <!-- Color -->
      <div class="layout-list-settings-row">
        <div class="layout-list-settings-row-prompt">Choose a Color:</div>
        <div class="layout-list-settings-row-options">
          <div v-for="(colorAtts, colorKey) in allowedColors" :key="colorAtts">
            <div
              :class="{
                'layout-list-settings-edit-color-swatch': true,
                'layout-list-settings-edit-color-swatch-selected':
                  colorKey == localSettings.color,
              }"
              :style="{ backgroundColor: colorKey, cursor: 'pointer' }"
              @click="localSettings.color = colorKey"
            ></div>
          </div>
        </div>
      </div>

      <!-- Icon -->
      <div class="layout-list-settings-row">
        <div class="layout-list-settings-row-prompt">Choose an Icon:</div>
        <div
          class="layout-list-settings-row-options"
          style="cursor: all-scroll"
        >
          <div
            v-for="icon in allowedIcons"
            :key="icon"
            :style="{ cursor: 'pointer' }"
          >
            <MaterialIcon
              size="40"
              :src="icon"
              :color="
                icon == localSettings.icon.value
                  ? this.allowedColors[listSettings.color].select
                  : this.allowedColors[listSettings.color].deselect
              "
              @click="localSettings.icon.value = icon"
            />
          </div>
        </div>
      </div>

      <!-- Action -->
      <div class="layout-list-settings-row">
        <button
          @click="changeListSettings"
          style="
            border: none;
            background-color: green;
            color: white;
            padding: 5px;
            border-radius: 10px;
          "
        >
          Change
        </button>
        <button
          @click="inEditMode = false"
          style="
            border: none;
            background-color: red;
            color: white;
            padding: 10px;
            border-radius: 10px;
            font-weight: bold;
          "
        >
          Cancel
        </button>
      </div>
    </template>

    <template v-else>
      <div class="layout-list-header-row">
        <div class="layout-list-row-icon">
          <MaterialIcon
            :src="listSettings.icon.value"
            :color="listSettings.icon.color"
          />
        </div>
        <div class="layout-list-row-name">{{ listSettings.name }}</div>
        <div style="flex-grow: 1"></div>
        <div class="layout-list-row-actions">
          <div style="cursor: pointer">
            <MaterialIcon src="tune" size="18" @click="startChangeSettings" />
          </div>
          <div style="width: 10px"></div>
          <div style="cursor: pointer">
            <MaterialIcon src="share" size="18" @click="$emit('shareList')" />
          </div>
        </div>
      </div>
      <div class="layout-list-row-schools">
        <template v-for="school in listSchools" :key="school.id">
          <div
            class="layout-list-row-item"
            @click="$emit('listItemDetailClick', school.id)"
          >
            <div>{{ school.name }}</div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style>
#layout-list-row {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border-radius: 10px;
  /* background: currentColor;  */
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
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1px;
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

#color-default {
      background-color: #ecf0f3;
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
}
#color-green {
      background-color: #bcd6a2;
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
      background-color: #FADADD; 
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
      background-color: #FFFFA7;
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
      background-color: #FFD580;
      cursor: pointer; 
      width: 20px; 
      height: 20px;
      border-radius: 4px; 
      margin: 2px 10px;
      border: 1px solid #fff;
      display: inline-block; 
      opacity: 0.5; 
    }
#layout-list-row.color-default {
  background-color: #ecf0f3;
}
#layout-list-row.color-blue {
  background-color: #bec7e7;
}
#layout-list-row.color-green {
  background-color: #bcd6a2;
}
#layout-list-row.color-yellow {
  background-color: #FFFFA7;
}
#layout-list-row.color-orange {
  background-color: #FFD580;
}
#layout-list-row.color-pink {
  background-color: #FADADD;
}
/* layout-list-row */
</style>