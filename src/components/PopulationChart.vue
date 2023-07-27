<script setup lang="ts">
import { ref } from "vue";
import { usePopulationStore } from "../store/population";

const { populationsByPrefectures } = usePopulationStore();
const array = populationsByPrefectures[10];
console.log(populationsByPrefectures);

const chartOptions = ref({
  title: {
    text: "都道府県の人口一覧",
    align: "center",
  },
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },
  series: [
    {
      data: array,
    },
  ],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 400,
      },
      chartOptions: {
        series: [{
          size: '100%',
          center: ['50%', '50%'],
        }]
      }
    }]
  }
});
</script>

<template>
  <!-- <div id="chart-container"> -->
    <highcharts :options="chartOptions" id="chart-container"></highcharts>
  <!-- </div> -->
</template>

<style scoped>
#chart-container {
  background-color: aqua;
  min-width: 300px;
  max-width: 1000px;
  padding: 10px;
}
</style>
