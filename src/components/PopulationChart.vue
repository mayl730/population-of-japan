<script setup lang="ts">
import { ref } from "vue";
import { usePopulationStore } from "../store/population";
import { formatPopulation } from "@utils/format_population";

const { graphDataSet, years } = usePopulationStore();

const chartOptions = ref({
  title: {
    text: "",
    align: "center",
  },
  xAxis: {
    title: {
      text: "年次",
      style: {
        fontSize: "14px",
      },
    },
    categories: years,
    lineWidth: 1,
  },
  yAxis: {
    title: {
      text: "人口",
    },
    labels: {
      format: "{value}万人",
      formatter: function (data: { value: number }) {
        return formatPopulation(data.value);
      },
    },
  },
  chart: {
    type: "spline",
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
    backgroundColor: "transparent",
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    color: "white",
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
  min-width: 310px;
  max-width: 1200px;
  padding: 10px;
}
</style>
