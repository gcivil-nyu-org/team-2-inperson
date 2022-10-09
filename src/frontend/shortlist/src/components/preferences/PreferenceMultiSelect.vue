<script>
export default {
  name: "PreferenceMultiSelect",
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
    <template v-for="opt, optindex in question.Options" :key="optindex">
      <input type="checkbox" 
        :value="opt"
        :name="optindex" 
        v-model="value">
      
      <label class="pref-opt-label" :for="optindex"> {{opt}}</label><br>
    </template>
  </div>
</template>

<style scoped>
.pref-q-container {
  padding: 10px;
  width: 100%;
  min-width: 450px;
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