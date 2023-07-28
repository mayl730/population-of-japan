<script setup lang="ts">
import { usePopulationStore } from "./store/population";
import { onMounted } from "vue";

import PopulationChart from "@components/PopulationChart.vue";
import FilterButtons from "@components/FilterButtons.vue";

const { getPopulations, getYears, populationsByPrefectures } =
  usePopulationStore();

onMounted(async () => {
  getPopulations(10);
  getYears();
});
</script>

<template>
    <FilterButtons />
    <PopulationChart
      v-if="Object.keys(populationsByPrefectures).length !== 0"
    />

</template>

<style scoped>
</style>
