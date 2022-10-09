<script>
export default {
  name: "PreferenceSlider",
  props: [
    "question",
    "modelValue",
  ],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit("update:modelValue", value)
      }
    }
  }
}

</script>

<template>
  <div class="pref-q-container">
    <div class="pref-q-name">
      {{question.Name}}
    </div>
    <div class="pref-q-question">
      {{question.Text}}
    </div>
    <div>
      <span style="font-size: 15px; margin-right: 5px;">
      {{question.MinLabel}}
      </span>
      
      <input type="range" 
        :min="question.Min" 
        :max="question.Max" 
        v-model="value">

      <span style="font-size: 15px; margin-left: 5px;">
        {{question.MaxLabel}}
      </span>
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