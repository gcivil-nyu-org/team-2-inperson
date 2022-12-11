<script>
export default {
  name: "SchoolShareCard",
  props: ["schoolData"],
  data() {
    return {
      isDetail: false,
      defaultImg: "/school-img-default.png",
      url: "",
    };
  },
  methods: {
    swapDetail() {
      this.isDetail = !this.isDetail;
    },
  },
  computed: {
    getBorough() {
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
    <div class="school-sharecard-container" @click="swapDetail">
      <div v-if="!isDetail" class="school-simple-img-container">
        <img class="school-simple-img" :src="defaultImg" draggable="false" />
      </div>
      <div class="school-simple-name-row">
        <div class="school-simple-name-name">
          <a :href="schoolData.schoolMetadata.link">{{
            schoolData.schoolMetadata.name
          }}</a>
        </div>
      </div>
      <div v-if="!isDetail">
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
          <div
            v-if="'schoolData.schoolMetadata.url'.includes('https://') == false"
          >
            <a
              target="_target"
              :href="'https://' + schoolData.schoolMetadata.url + '/'"
              >{{ schoolData.schoolMetadata.url }}</a
            >
          </div>
          <div v-else>
            <a target="_target" :href="schoolData.schoolMetadata.url">{{
              schoolData.schoolMetadata.url
            }}</a>
          </div>
        </div>
        <div class="school-desc">
          {{ schoolData.schoolMetadata.desc }}
        </div>
      </div>
      <div v-else style="overflow: auto">
        <template
          v-for="dimension in schoolData.schoolDimensions"
          :key="dimension"
        >
          <div class="school-detail-dim-row">
            <div class="school-detail-dim-name">{{ dimension.dimShort }}</div>
            <div class="school-detail-dim-value">{{ dimension.value }}</div>
          </div>
        </template>
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
  font-size: 20px;
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
.school-detail-dim-row {
  width: 100%;
  margin-bottom: 10px;
}
.school-detail-dim-name {
  font-family: "Aleo";
  font-weight: bold;
  border-bottom: 1px solid #779886;
  font-size: 18px;
}

.school-detail-dim-value {
  font-family: sans-serif;
  margin-left: 5px;
  font-size: 18px;
}
</style>
