<script>
export default {
  name: "PreferenceTypeText",
  props: [
    "questionId",
    "questionText",
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
    <div>
      <input type="text" class="text" :id="questionId" :name="questionId" placeholder="">
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

.text{
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Aleo', serif;
  outline: none;
  transition: border-color .2s;
  font-family: 'Aleo', serif;
}
</style>