<script setup lang="ts">
import { ref } from "vue";
import { usePopulationStore } from "../store/population";

const {graphDataSet, years} = usePopulationStore();

const chartOptions = ref({
  title: {
    text: "",
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
    backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
  },
  legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
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

</script>

<template>
  <highcharts
    :options="chartOptions"
    id="chart-container"
    onchange="update()"
  ></highcharts>

</template>

<style scoped>
#chart-container {
  /* background-color: red; */
  min-width: 310px;
  max-width: 1200px;
  padding: 10px;
}
</style>
