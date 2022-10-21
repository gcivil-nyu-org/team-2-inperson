<script>
export default {
  name: "SchoolSimple",
  props: ["schoolData"],
};
</script>

<template>
  <div class="school-simple-container">
    <div class="school-simple-img-container">
      <img class="school-simple-img" :src="schoolData.img" />
    </div>
    <div class="school-simple-name-row">
      <div class="school-simple-name-name">
        {{ schoolData.name }}
      </div>
      <div class="school-simple-name-borough">
        {{ schoolData.borough }}
      </div>
    </div>
    <template v-for="dimension in schoolData.dimensions" :key="dimension">
      <div class="school-simple-dim-row">
        <div class="school-simple-dim-name">{{ dimension.name }}</div>
        <div class="school-simple-dim-value">{{ dimension.value }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.school-simple-container {
  width: 450px;
  height: 600px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #779886, -14px -14px 20px white;
  font-family: "Aleo";
}

.school-simple-img-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.school-simple-img {
  max-width: 200px;
  max-height: 160px;
  border-radius: 10px;
  border: 2px solid #779886;
}

.school-simple-name-row {
  width: 100%;
  padding: 15px;
}

.school-simple-name-name {
  width: 100%;
  text-align: end;
  font-weight: bold;
  font-size: 24px;
  font-family: "Libre Baskerville";
}

.school-simple-name-borough {
  width: 100%;
  text-align: end;
  font-size: 20px;
}

.school-simple-dim-row {
  width: 100%;
  margin-bottom: 20px;
}

.school-simple-dim-name {
  font-family: "Aleo";
  font-weight: bold;
  border-bottom: 1px solid #779886;
  font-size: 18px;
}

.school-simple-dim-value {
  font-family: sans-serif;
  margin-left: 5px;
  font-size: 18px;
}
</style>
