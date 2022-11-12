<script>
export default {
  name: "PreferenceSlider",
  props: ["question", "modelValue"],
  emits: ["updateModelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("updateModelValue", value);
      },
    },
  },
};
</script>

<template>
  <div class="pref-q-container">
    <div class="pref-q-name">{{ question.Name }}</div>
    <div class="pref-q-question">{{ question.Text }}</div>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 10px;
      "
    >
      <span style="font-size: 15px; margin-right: 5px">
        {{ question.MinLabel }}
      </span>

      <input
        type="range"
        class="slider"
        :min="question.Min"
        :max="question.Max"
        v-model="value"
      />

      <span style="font-size: 15px; margin-left: 5px">
        {{ question.MaxLabel }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.pref-q-container {
  padding: 10px;
  width: 100%;
  font-family: "Klee One", cursive;
  font-weight: bold;
}

.pref-q-name {
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  font-family: "Cabin Sketch", cursive;
}

.pref-q-question {
  width: 100%;
  font-size: 18px;
}

.pref-opt-label {
  font-size: 12px;
}

.slider {
  appearance: none;
  width: 100%;
  max-width: 200px;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #56865a;
  cursor: pointer;
}
</style>
