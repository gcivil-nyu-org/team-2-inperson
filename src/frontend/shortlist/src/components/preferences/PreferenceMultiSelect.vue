<script>


export default {
  name: "PreferenceMultiSelect",
  props: [
    "responseId",
    "questionName",
    "questionText",
    "questionOptions",
  ]
}

</script>

<template>
  <!--{{responseId}}-->
  <div class="pref-q-container">
    <div class="pref-q-name">
      {{questionName}}
    </div>
    <div class="pref-q-question">
      {{questionText}}
    </div>
    <template v-for="opt, optindex in questionOptions" :key="optindex">
      <input type="checkbox" :id="responseId" :name="responseId + '.' + optindex" :value="optindex">
      <label class="pref-opt-label" :for="responseId + '.' + optindex"> {{opt}}</label><br>
    </template>
  </div>
</template>

<style scoped>
.pref-q-container {
  padding: 10px;
  width: 100%;
}
.pref-q-name {
  width: 100%;
  font-size: 24px;
  font-weight: 500;
}

.pref-q-question {
  width: 100%;
  font-size: 18px;
}

.pref-opt-label {
  font-size: 12px;
}

</style>