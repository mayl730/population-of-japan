<script setup lang="ts">
import { ref } from "vue";

const chartOptions = ref({
  series: [
    {
      data: [1, 2, 3],
    },
  ],
});
</script>

<template>
  <highcharts :options="chartOptions"></highcharts>
</template>