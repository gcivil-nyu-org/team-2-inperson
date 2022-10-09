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
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: None;
  line-height: 2rem;
  color:#067418;
}

.pref-subtitle{
  font-size: 20px; 
  font-family: 'Aleo', serif; 
  background-color: #D6CDA4;
  font-weight: bold;
  color:black
}
.pref-main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
}
.pref-actions-line{
  width:100%;
  justify-content: space-between;
  display: flex;
}
.pref-actions {
  flex-wrap: wrap;
  align-items: center;
  font-weight: bold;
  background-color:black;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: 'Libre Baskerville', serif;
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
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
  background-color:#008037;
}

.pref-actions button {
  padding: 20px;
  background-color: #008037;
}


</style>

