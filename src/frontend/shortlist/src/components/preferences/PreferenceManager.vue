<script>
export default {
  name: "PreferenceManager",
  props: ["title", "subtitle"],

  setup() {
    const actions = {
      back: {
        text: "Back",
        enabled: true,
        type: "button",
        action: false
      },
      next: {
        text: "Next",
        enabled: true,
        type: "button",
        action: false
      },
      submit: {
        text: "Submit",
        enabled: false,
        type: "button",
        action: false
      }
    }
    
    return {actions}
  },
  
}
</script>

<template>
  <div class="pref-container">
    <div class="pref-title">
      {{title}}<br>
      <span style="font-size: 20px;">{{subtitle}}</span>
    </div>
    
    <div class="pref-main">
      <slot></slot>
    </div>
    <div style="flex-grow: 1;">&nbsp;</div>
    <div class="pref-actions">
      <template v-for="action in actions" :key="action">
        <button v-if="action.enabled" @click="action.action">{{action.text}}</button>
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

