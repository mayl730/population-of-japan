<script setup lang="ts">
import { usePopulationStore } from "./store/population";
import { onMounted } from "vue";

import PopulationChart from "@components/PopulationChart.vue";

const { getPopulations, getYears, populationsByPrefectures } =
  usePopulationStore();

onMounted(async () => {
  getPopulations(10);
  getYears();
});
</script>

<template>
  <div>
    <PopulationChart
      v-if="Object.keys(populationsByPrefectures).length !== 0"
    />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
