<script>
export default {
  name: "PreferenceDropdown",
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
    <div class="pref-opt-label">
      <select
        :name="question.Name"
        :id="question.Name"
        v-model="value"
        class="btn btn-success dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        style="
          background-color: #ebf3e6;
          font-weight: 900;
          width: 100%;
          color: black;
          font-size: 18px;
        "
      >
        <option class="dropdown-item" value=""></option>
        <template v-for="(opt, optindex) in question.Options" :key="optindex">
          <option class="dropdown-item" :value="opt">{{ opt }}</option>
        </template>
      </select>
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
</style>
