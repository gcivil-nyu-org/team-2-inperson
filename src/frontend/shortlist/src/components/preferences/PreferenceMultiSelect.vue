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
  <!--{{responseId}}-->
  <div class="pref-q-container">
    <div class="pref-q-name">
<<<<<<< HEAD
      {{questionId}}
=======
      {{question.Name}}
>>>>>>> 0d8011d (wired form v-model for pref manager)
    </div>
    <div class="pref-q-question">
      {{question.Text}}
    </div>
<<<<<<< HEAD
    <template v-for="opt, optindex in questionOptions" :key="optindex">
      <input type="checkbox" :id="optindex+''+opt" :name="optindex+''+opt" :value="opt">
      <label class="pref-opt-label" :for="optindex+''+opt"> {{opt}}</label><br>
=======
    <template v-for="opt, optindex in question.Options" :key="optindex">
      <input type="checkbox" 
        :value="opt"
        :name="optindex" 
        v-model="value">
      
      <label class="pref-opt-label" :for="optindex"> {{opt}}</label><br>
>>>>>>> 0d8011d (wired form v-model for pref manager)
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