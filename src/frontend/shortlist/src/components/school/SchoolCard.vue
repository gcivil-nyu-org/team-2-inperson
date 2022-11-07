<script>
import Chart from "chart.js/auto";

export default {
  name: "SchoolCard",
  props: ["schoolData"],
  emits: ["schoolCardDragStart"],
  data() {
    return {
      isDetail: false,
    };
  },
  methods: {
    swapDetail() {
      this.isDetail = !this.isDetail;
    },
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "School Qualities",
            data: this.schoolData.dimensions,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        //indexAxis: 'y',
        parsing: {
          xAxisKey: "name",
          yAxisKey: "value",
        },
        scales: {
          y: {
            grid: {
              display: false
            },
            ticks: {
                    display: false //this will remove only the label
                }
            
          },
          x: {
            grid: {
              display: false
            }
          },
        },
      },
    });
    myChart;
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
          <img
            class="school-simple-img"
            :src="schoolData.img"
            draggable="false"
          />
        </div>
      </template>

      <div class="school-simple-name-row">
        <div class="school-simple-name-name">
          <template v-if="isDetail">
            <a :href="schoolData.link">{{ schoolData.name }}</a>
          </template>
          <template v-if="!isDetail">
            {{ schoolData.name }}
          </template>
        </div>
        <div class="school-simple-name-borough">
          {{ schoolData.borough }}
        </div>
      </div>
      <div class="school-simple-dim-container">
        <template v-if="!isDetail">
          <!-- <template v-if="dimension.simple"> -->
          <canvas id="myChart" width="400" height="00"></canvas>
          <!-- </template> -->
        </template>
        <template v-if="isDetail">
          <template v-for="dimension in schoolData.dimensions" :key="dimension">
            <div class="school-simple-dim-row">
              <div class="school-simple-dim-name">{{ dimension.name }}</div>
              <div class="school-simple-dim-value">{{ dimension.value }}</div>
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
