<script>
export default {
  name: "SchoolCard",
  props: ["schoolData"],
  emits: ["schoolCardDragStart"],
  data() {
    return {
      isDetail: false,
      defaultImg: "/school-img-default.png",
    };
  },
  methods: {
    swapDetail() {
      this.isDetail = !this.isDetail;
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
  <div
    draggable="true"
    @dragstart="$emit('schoolCardDragStart', this.schoolData)"
    style="select: none"
    v-if="schoolData != null"
  >
    <div class="school-simple-container" @click="swapDetail">
      <template v-if="!isDetail">
        <div class="school-simple-img-container">
          <span v-if="schoolData.schoolMetadata.address.slice(0, 4) == 'http'">
            <img
              class="school-simple-img"
              :src="schoolData.schoolMetadata.address"
              draggable="false"
              alt="schoolimg"
            />
          </span>
          <span v-else>
            <img
              class="school-simple-img"
              :src="defaultImg"
              draggable="false"
              alt="schoolimg"
            />
          </span>
        </div>
      </template>

      <div class="school-simple-name-row">
        <div class="school-simple-name-name">
          <template v-if="isDetail">
            <div
              v-if="
                'schoolData.schoolMetadata.url'.includes('https://') == false
              "
            >
              <a
                target="_target"
                :href="'https://' + schoolData.schoolMetadata.url + '/'"
                >{{ schoolData.schoolMetadata.name }}</a
              >
            </div>
            <div v-else>
              <a target="_target" :href="schoolData.schoolMetadata.url">{{
                schoolData.schoolMetadata.name
              }}</a>
            </div>
          </template>
          <template v-else>
            {{ schoolData.schoolMetadata.name }}
          </template>
        </div>
        <div class="school-simple-name-borough">
          {{ getBorough }}
        </div>
      </div>
      <div class="school-simple-dim-container">
        <template
          v-for="dimension in schoolData.schoolDimensions"
          :key="dimension"
        >
          <template v-if="!isDetail">
            <template v-if="[3, 5, 6].indexOf(dimension.dimId) > -1">
              <div class="school-simple-dim-row">
                <div class="school-simple-dim-name">
                  {{ dimension.dimShort }}
                </div>
                <div class="school-simple-dim-value">{{ dimension.value }}</div>
              </div>
            </template>
          </template>
          <template v-if="isDetail">
            <div class="school-simple-dim-row">
              <div class="school-simple-dim-name">
                {{ dimension.dimShort }}
              </div>
              <div class="school-simple-dim-value">
                <span v-if="dimension.dimShort == 'City'">
                  {{ getBorough }}
                </span>
                <span v-else-if="dimension.dimShort == 'State'">
                  New York
                </span>
                <span v-else>
                  {{ dimension.value }}
                </span>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
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

.school-simple-dim-container {
  flex-grow: 1;
  overflow-y: auto;
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
