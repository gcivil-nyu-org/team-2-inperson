<script>
export default {
  name: "PreferenceOneSelect",
  props: ["question", "modelValue"],
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<template>
  <div class="pref-q-container">
    <div class="pref-q-name">{{ question.Name }}</div>
    <div class="pref-q-question">{{ question.Text }}</div>
    <template v-for="(opt, optindex) in question.Options" :key="optindex">
      <div class="form-check">
        <input
          id="testItem"
          class="form-check-input"
          type="radio"
          :value="opt"
          :name="optindex"
          v-model="value"
        />
        <label class="form-check-label" :for="optindex">{{ opt }}</label>
      </div>
    </template>
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
.form-check-input:checked {
  background-color: #56865a;
  border-color: #56865a;
}
</style>
