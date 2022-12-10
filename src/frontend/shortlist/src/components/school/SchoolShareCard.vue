<script>
export default {
  name: "SchoolShareCard",
  props: ["schoolData"],
  data() {
    return {
      defaultImg: "/school-img-default.png",
      url: "",
    };
  },
  methods: {
    geturl() {
      this.url = this.schoolData.schoolMetadata.url;
      //console.log(this.url);
    },
  },
  computed: {
    getBorough() {
      // console.log(boroid)
      let boros = [
        "",
        "Bronx",
        "Brooklyn",
        "Manhattan",
        "Queens",
        "Staten Island",
      ];
      return boros[this.schoolData.schoolMetadata.boroughCode];
    },
  },
};
</script>

<template>
  <div style="select: none" v-if="schoolData != null">
    <div class="school-sharecard-container">
      <div class="school-simple-img-container">
        <img class="school-simple-img" :src="defaultImg" draggable="false" />
      </div>
      <div class="school-simple-name-row">
        <div class="school-simple-name-name">
          <template v-if="isDetail">
            <a :href="schoolData.schoolMetadata.link">{{
              schoolData.schoolMetadata.name
            }}</a>
          </template>
          <template v-else>
            {{ schoolData.schoolMetadata.name }}
          </template>
        </div>
        <div class="school-data">
          {{ getBorough }}
        </div>
        <div class="school-data">
          Phone : {{ schoolData.schoolMetadata.phone }}
        </div>
        <div class="school-data">
          Email : {{ schoolData.schoolMetadata.email }}
        </div>
        <div class="school-data">
          <a :href="this.url" @click="geturl">{{
            schoolData.schoolMetadata.url
          }}</a>
        </div>
        <div class="school-desc">
          {{ schoolData.schoolMetadata.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.school-sharecard-container {
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 3px 3px 3px #9da29c;
  font-family: "Aleo";
  display: flex;
  flex-direction: column;
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
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  font-family: "Libre Baskerville";
}

.school-data {
  width: 100%;
  text-align: left;
  font-size: 15px;
}

.school-desc {
  width: 100%;
  height: 100px;
  text-align: left;
  font-size: 15px;
  overflow-y: scroll;
  background-color: #d7ddd9;
  padding-top: 10px;
}
</style>
