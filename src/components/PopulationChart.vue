<script setup lang="ts">
import { ref } from "vue";
import { usePopulationStore } from "../store/population";

const {graphDataSet, years} = usePopulationStore();

const chartOptions = ref({
  title: {
    text: "都道府県の人口一覧",
    align: "center",
  },
  xAxis: {
    categories: years
  },
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },
  series: graphDataSet,
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
        },
      },
    ],
  },
});

// function update() {
//   var seriesChart = chartOptions.series[0];
//   const array1 = populationsByPrefectures[1];
//    var seriesChart =
//    seriesChart.update({
//      data: array1
//    });
</script>

<template>
  <!-- <div id="chart-container"> -->
  <highcharts
    :options="chartOptions"
    id="chart-container"
    onchange="update()"
  ></highcharts>
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
