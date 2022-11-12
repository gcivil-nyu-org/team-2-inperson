<script>
export default {
  name: "PreferenceTypeText",
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
    <div>
      <input
        type="text"
        class="pref-input-text"
        :name="question.Name"
        v-model="value"
      />
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

.pref-input-text {
  width: 100%;
  padding: 8px 5px;
  background: #ebf3e6;
  border: 1px solid #008037;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: "Aleo", serif;
  outline: none;
  transition: border-color 0.2s;
}
</style>
