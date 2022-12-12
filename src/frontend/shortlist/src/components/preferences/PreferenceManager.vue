<script>
import { ref, provide } from "vue";

export default {
  name: "PreferenceManager",
  props: ["title"],
  emits: ["preferenceSubmitted"],
  methods: {
    clicker(event) {
      if (event == "Next") {
        if (this.selectedPage < this.numPages - 1) this.selectedPage++;
      } else if (event == "Back") {
        if (this.selectedPage > 0) this.selectedPage--;
      } else {
        this.$emit("preferenceSubmitted");
        // this.$router.push("/categorize");
      }
      if (this.selectedPage > 0) {
        this.actions.back.enabled = true;
      } else {
        this.actions.back.enabled = false;
      }
      if (this.selectedPage == this.numPages - 1) {
        this.actions.next.enabled = false;
        this.actions.submit.enabled = true;
      } else {
        this.actions.next.enabled = true;
        this.actions.submit.enabled = false;
      }
    },
  },
  data() {
    const actions = {
      back: {
        text: "Back",
        enabled: false,
        type: "button",
      },
      next: {
        text: "Next",
        enabled: false,
        type: "button",
      },
      submit: {
        text: "Submit",
        enabled: false,
        type: "submit",
      },
    };
    if (this.numPages == 1) {
      actions.submit.enabled = true;
    } else {
      actions.next.enabled = true;
    }
    return {
      actions,
    };
  },
  setup(props, { slots }) {
    let preferencePages = ref(slots.default());
    let numPages = preferencePages.value.length;
    let selectedPage = ref(0);
    provide("selectedPage", selectedPage);
    return {
      preferencePages,
      numPages,
      selectedPage,
    };
  },
};
</script>

<template>
  <div class="pref-container">
    <div class="pref-title">{{ title }}<br /></div>

    <div class="pref-main">
      <slot></slot>
    </div>

    <div style="flex-grow: 1">&nbsp;</div>
    <div class="pref-actions-line">
      <template v-if="actions.back.enabled">
        <button class="pref-actions" @click="clicker('Back')">Back</button>
        <div style="flex-grow: 1"></div>
      </template>
      <template v-if="actions.next.enabled">
        <div style="flex-grow: 1"></div>
        <button class="pref-actions" @click="clicker('Next')">Next</button>
      </template>
      <template v-if="actions.submit.enabled">
        <div style="flex-grow: 1"></div>
        <button
          class="pref-actions"
          style="
            background-color: #008037;
            font-weight: 900;
            box-shadow: 0 0 0 6px rgba(44, 187, 99, 0.35) inset;
          "
          @click="clicker('Submit')"
        >
          Submit
        </button>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pref-container {
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: baseline;
}

.pref-title {
  width: 100%;
  font-family: "Cabin Sketch", cursive;
  font-weight: bold;
  font-size: 2.5rem;
  padding-top: 10px;
  line-height: 2rem;
  color: #067418;
  text-align: center;
}

.pref-main {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  min-width: 50rem;
  max-width: 50rem;
  min-height: 20rem;
  margin: 0;
  padding: 20px;
}
.pref-actions-line {
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 10px;
}
.pref-actions {
  flex-wrap: wrap;
  align-items: center;
  font-weight: 500;
  background-color: black;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: "Libre Baskerville", serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.pref-actions:hover {
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  background-color: #008037;
}

.pref-actions button {
  padding: 20px;
  background-color: #008037;
}
</style>
