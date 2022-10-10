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
      <input type="range" class="slider" :min="min" :max="max" :value="result">
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

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;  
  background: #d3d3d3;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #56865a;
  cursor: pointer;
}
</style>