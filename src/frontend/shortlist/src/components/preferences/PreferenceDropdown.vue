<script>
export default {
  name: "PreferenceDropdown",
  props: [
    "questionId",
    "questionText",
    "questionOptions",
  ]
}
</script>

<template>
  <!--{{responseId}}-->
  <div class="pref-q-container">
    <div class="pref-q-name">
      {{questionId}}
    </div>
    <div class="pref-q-question">
      {{questionText}}
    </div>
    <div class="pref-opt-label">
    <select :name="questionId" :id="questionId">
        <option value="default"></option>
    <template v-for="opt, optindex in questionOptions" :key="optindex">
      <option  :value="opt">{{opt}}</option>
    </template>
    </select>
    </div>
  </div>
</template>

<style scoped>
.pref-q-container {
  padding: 10px;
  width: 100%;
  font-family: 'Klee One', cursive;
  font-weight: bold;
}
.pref-q-name {
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Cabin Sketch', cursive;
}

.pref-q-question {
  width: 100%;
  font-size: 18px;
}

.pref-opt-label {
  font-size: 12px;
}
</style>