<script>
import MaterialIcon from "../../icons/MaterialIcon.vue";
import SchoolIcon from "./ShortlistSchoolIcon.vue";
import { dragStateStore } from "../../../states/categorizeDragAndDrop";
import { sessionStore } from "../../../states/sessionStore.js";
import { mapState } from "pinia";

export default {
  name: "ShortlistRow",
  props: {
    listId: [String, Number],
    shortlistId: [String, Number],
    listSettings: {
      default: {
        name: "MISSING",
        color: "#ecf0f3",
        icon: {
          value: "token",
          color: "#AAAAAA",
        },
      },
    },
    listSchools: Array,
  },
  emits: ["listItemDetailClick", "changeListSettings", "shareList"],
  components: { MaterialIcon, SchoolIcon },
  setup() {
    const dragState = dragStateStore();
    return { dragState };
  },
  data() {
    return {
      inEditMode: false,
      localSettings: { ...this.listSettings },
      allowedColors: {
        "#ecf0f3": { deselect: "#AAAAAA", select: "#000000" },
        "#bec7e7": { deselect: "#6E80BE", select: "#DE6B00" },
        "#bcd6a2": { deselect: "#698B46", select: "#CD2676" },
        "#ffffa7": { deselect: "#DFDF58", select: "#EC6439" },
        "#ffd580": { deselect: "#D1A241", select: "#C114ED" },
        "#fadadd": { deselect: "#C3888E", select: "#53BA4A" },
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
      nameAlert: "",
      validationresult: false,
      validation: true,
    };
  },
  computed: {
    colorDeselect() {
      return this.allowedColors[this.listSettings.color].deselect;
    },
    colorSelect() {
      return this.allowedColors[this.listSettings.color].select;
    },
    ...mapState(sessionStore, {
      accountMetadata: "accountMetadata",
    }),
  },
  methods: {
    shareList() {
      this.$router.push({
        path: "share",
        query: {
          shortlistId: this.shortlistId,
          userName: this.accountMetadata.preferences.userFirstName,
        },
      });
    },
    dragStart(e, itemIdx) {
      e.stopPropagation();
      this.dragState.startReorderSchoolInList(
        this.listSettings.name,
        this.listSchools[itemIdx],
        itemIdx
      );
    },
    dragEnter(e, itemIdx) {
      if (this.dragState.dragType == "reorderSchoolInList") {
        if (
          this.dragState.reorderSchoolInListState.listName ==
          this.listSettings.name
        ) {
          e.preventDefault();
          this.dragState.reorderSchoolInListState.schoolOverIdx = itemIdx;
          this.dragState.reorderSchoolInListState.activeDrop = true;
        }
      }
    },
    dragOver(e, itemIdx) {
      if (this.dragState.dragType == "reorderSchoolInList") {
        this.dragEnter(e, itemIdx);
        return;
      }
    },
    dragLeave() {
      if (this.dragState.dragType == "reorderSchoolInList") {
        this.dragState.reorderSchoolInListState.schoolOverIdx = null;
        this.dragState.reorderSchoolInListState.activeDrop = false;
        return;
      }
    },
    dragEnd() {
      this.dragState.endReorderSchoolInList();
    },

    startChangeSettings() {
      // deep copy so we don't accidentally break state in the parents
      this.localSettings = JSON.parse(JSON.stringify(this.listSettings));
      this.inEditMode = true;
    },
    changeListSettings() {
      if (this.validationresult == true) {
        this.$emit("changeListSettings", this.localSettings);
        this.inEditMode = false;
      }
    },
    validateName(value) {
      if (this.validation) {
        console.log("validating.." + value);
        let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
        if (value.length < 2) {
          this.nameAlert = "Minimum length is 2 for name!";
          console.log(this.nameAlert);
          this.validationresult = false;
          return false;
        }
        if (value.length > 15) {
          this.nameAlert = "Maximum length is 15 for name!";
          console.log(this.nameAlert);
          this.validationresult = false;
          return false;
        }
        if (!validNamePattern.test(value)) {
          this.nameAlert =
            "Valid name only contain letters, dashes (-) and spaces (No starting spaces)!";
          console.log(this.nameAlert);
          this.validationresult = false;
          return false;
        }
        this.validationresult = true;
        console.log(this.nameAlert);
        return true;
      } else {
        this.validationresult = true;
        return true;
      }
    },
  },
};
</script>

<template>
  <div class="layout-list-row" :style="{ backgroundColor: listSettings.color }">
    <div
      v-if="inEditMode"
      style="width: 100%; height: 100%; overflow-y: scroll"
    >
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
        <div class="input-errors" v-if="!validateName(localSettings.name)">
          <div class="error-msg" v-if="this.localSettings.name.length >= 0">
            {{ this.nameAlert }}
          </div>
          <div class="error-msg" v-else>&nbsp;</div>
        </div>
        <div class="input-errors" v-else>
          <div class="error-msg">&nbsp;</div>
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
          style="cursor: all-scroll; padding: 5px"
        >
          <div
            v-for="icon in allowedIcons"
            :key="icon"
            :style="{
              cursor: 'pointer',
              marginRight: '20px',
              padding: '5px',
              border: '1px solid ' + colorDeselect,
              borderRadius: '8px',
              boxShadow: '0 0 2px 0px' + colorDeselect,
            }"
          >
            <MaterialIcon
              size="30"
              :src="icon"
              :color="
                icon == localSettings.icon.value ? colorSelect : colorDeselect
              "
              @click="localSettings.icon.value = icon"
            />
          </div>
        </div>
      </div>

      <!-- Action -->
      <div class="layout-list-settings-row">
        <button
          class="layout-list-settings-button"
          id="changeButton"
          @click="changeListSettings"
          style="background-color: green; color: white"
        >
          Change
        </button>
        <button
          class="layout-list-settings-button"
          id="cancelButton"
          @click="inEditMode = false"
          style="background-color: red; color: white"
        >
          Cancel
        </button>
      </div>
    </div>
    <div v-if="!inEditMode">
      <div class="layout-list-header-row">
        <div class="layout-list-row-icon">
          <MaterialIcon
            :src="listSettings.icon.value"
            size="30"
            :color="colorDeselect"
          />
        </div>
        <div
          class="layout-list-row-name shortlist-fnt-sketch"
          :style="{ color: colorDeselect }"
        >
          {{ listSettings.name }}
        </div>
        <div style="flex-grow: 1"></div>
        <div class="layout-list-row-actions">
          <div class="layout-list-row-action-button" style="cursor: pointer">
            <MaterialIcon
              src="tune"
              :color="colorDeselect"
              size="18"
              id="editButton"
              @click="startChangeSettings"
            />
          </div>
          <div class="layout-list-row-action-button" style="cursor: pointer">
            <MaterialIcon
              src="share"
              :color="colorDeselect"
              size="18"
              @click="this.shareList"
            />
          </div>
        </div>
      </div>
      <div class="layout-list-row-schools">
        <template v-for="(school, schoolIdx) in listSchools" :key="school">
          <SchoolIcon
            :schoolData="school"
            :bgColor="colorDeselect"
            @click="$emit('listItemDetailClick', schoolIdx)"
            draggable="true"
            @dragstart="(e) => dragStart(e, schoolIdx)"
            @dragenter="(e) => dragEnter(e, schoolIdx)"
            @dragover="(e) => dragOver(e, schoolIdx)"
            @dragleave="dragLeave"
            @dragend="dragEnd"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
.layout-list-row {
  width: 100%;
  height: 205px;
  width: 500px;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 7px -1px grey;
  padding: 10px;
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
.layout-list-row-name {
  width: 100%;
  margin-left: 10px;
  font-weight: bold;
  user-select: none;
  font-size: 25px;
}
.layout-list-row-actions {
  display: flex;
}

.layout-list-row-schools {
  width: 400px;
  height: 100%;
  display: flex;
  padding-left: 60px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.layout-list-settings-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
}
.layout-list-settings-row-prompt {
  width: 100%;
  margin-bottom: 10px;
}

.layout-list-settings-name-input {
  width: 100%;
  border: 0;
  background: transparent;
  font-family: sans-serif;
  font-weight: bold;
}
.layout-list-settings-name-input:focus {
  border: 1px solid white;
  outline: none;
}

.layout-list-settings-row-options {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
}

.layout-list-settings-edit-color-swatch {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid white;
}

.layout-list-settings-edit-color-swatch-selected {
  border: 3px solid black;
}

.layout-list-settings-button {
  border: 2px solid white;
  padding: 5px 20px;
  border-radius: 8px;
}

.layout-list-row-action-button {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.layout-list-row-action-button:hover {
  background-color: rgba(100, 100, 100, 0.1);
}

.edit-transition-enter-active,
.edit-transition-leave-active {
  transition: opacity 0.5s;
}

.edit-transition-enter-from,
.edit-transition-leave-to {
  opacity: 0;
}

.edit-transition2-enter-active,
.edit-transition2-leave-active {
  transition: opacity 0.5s;
}

.edit-transition2-enter-from,
.edit-transition2-leave-to {
  opacity: 0;
}

.error-msg {
  color: rgb(117, 28, 28);
  font-size: 13px;
  padding-bottom: 7px;
  left: 10px;
  right: 30px;
  width: 100%;
}
.input-errors {
  left: 10px;
  right: 30px;
  width: 100%;
}
</style>
