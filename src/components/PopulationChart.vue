<!-- <script setup lang="ts">
</script>

<template>
  <h1>{{ 'Chart' }}</h1>
</template>

<style scoped>
</style> -->

<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

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