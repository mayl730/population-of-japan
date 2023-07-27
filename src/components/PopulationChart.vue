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
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal'
        }
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
  background-color: red;
  min-width: 310px;
  max-width: 800px;
  padding: 10px;
}
</style>
