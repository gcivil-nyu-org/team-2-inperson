<script>


export default {
  name: "PreferenceSlider",
  props: [
    "questionId",
    "questionText",
    "min",
    "max",
  ],
  computed: {
  result() {
    return (this.min + this.max)/2
    }
  },
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
    <div>
      <input type="range" :min="min" :max="max" :value="result">
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