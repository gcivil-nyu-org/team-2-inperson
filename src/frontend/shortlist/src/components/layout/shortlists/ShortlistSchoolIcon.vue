<script>
export default {
  props: ["schoolData", "bgColor"],
};
</script>
<template>
  <div
    class="school-icon-container"
    :style="{ boxShadow: '0 0 5px -1px ' + bgColor }"
  >
    <div v-if="schoolData.img">
      <!--real image-->
      <img class="school-icon-img" :src="schoolData.img" />
    </div>
    <div v-else>
      <!--no image, use default-->
      <img class="school-icon-img" src="/school-img-default-sm.png" />
    </div>

    <div class="school-icon-name shortlist-fnt-serif-bold">
      <!-- Old school data format -->
      <div v-if="schoolData.name">
        {{ schoolData.name }}
      </div>
      <!-- New school data format -->
      <div v-else>
        {{ schoolData.schoolMetadata.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.school-icon-container {
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 5px 5px;
  user-select: none;
  margin: 5px;
}
.school-icon-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: none;
  background-color: white;
}
.school-icon-name {
  width: 70px;
  font-size: 8px;
  margin-left: 10px;
}
</style>
