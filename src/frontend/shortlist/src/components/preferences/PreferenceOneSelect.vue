<script>


export default {
  name: "PreferenceOneSelect",
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
    <div style="font-size: 14px;">
    <template v-for="opt, optindex in questionOptions" :key="optindex">
      <input type="radio" class="form-check-input" :id="optindex+''+opt" :name="questionId" :value="opt">&nbsp;
      <label class="form-check-label" :for="optindex+''+opt"> {{opt}}</label><br>
    </template>
  </div>
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