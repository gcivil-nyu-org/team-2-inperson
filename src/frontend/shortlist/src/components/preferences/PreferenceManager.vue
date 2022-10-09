<script>
import { ref, provide } from 'vue'

export default {
  name: "PreferenceManager",
  props: ["title"],
  methods: {
    clicker(event) {
      
      if (event == "Next") {
        this.selectedPage == this.numPages - 1 ? this.selectedPage = this.selectedPage : this.selectedPage++;
      } else if (event == "Back") {
        this.selectedPage == 0 ? this.selectedPage = this.selectedPage : this.selectedPage--;
      } else {
        console.log(event);
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
    }
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
      }
    };

    if (this.numPages == 1) {
      actions.submit.enabled = true;
    } else {
      actions.next.enabled = true;
    }

    return {
      actions
    }
  },
  setup(props, { slots }, ) {
    let preferencePages = ref(slots.default());

    let numPages = preferencePages.value.length;
    let selectedPage = ref(0);

    provide("selectedPage", selectedPage);

    return {
      preferencePages,
      numPages,
      selectedPage
    }
  },
  
}
</script>

<template>

  <div class="pref-container">
    <div class="pref-title">
      {{title}}
    </div>
    
    <div class="pref-main">
      <slot></slot>
    </div>

    <div style="flex-grow: 1;">&nbsp;</div>
    <div class="pref-actions">
      <template v-if="actions.back.enabled">
        <button @click="clicker('Back')">Back</button>
        <div style="flex-grow: 1"></div>
      </template>
      <template v-if="actions.next.enabled">
        <div style="flex-grow: 1"></div>
        <button @click="clicker('Next')">Next</button>
      </template>
      <template v-if="actions.submit.enabled">
        <div style="flex-grow: 1"></div>
        <button @click="clicker('Submit')">Submit</button>
      </template>
    </div>
  </div>
</template>

<style scoped>
.pref-container {
  width: 100%;
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
}

.pref-main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;

  min-height: 500px;
  overflow: scroll;
}

.pref-actions {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.pref-actions button {
  padding: 20px;
  background-color: green;
}


</style>

