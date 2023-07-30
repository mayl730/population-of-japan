<script setup lang="ts">
import { usePopulationStore } from "./store/population";
import { onMounted } from "vue";

import PopulationChart from "@components/PopulationChart.vue";
import PrefFilters from "@components/PrefFilters.vue";
import PrefFilters2 from "@components/PrefFilters2.vue";

const { initializeData, getPopulations, getYears, populationsByPrefectures } =
  usePopulationStore();

onMounted(async () => {
  getPopulations(10);
  getYears();
  initializeData();
});
</script>

<template>
  <div class="temp-container">
    <PrefFilters />
    <PopulationChart
      v-if="Object.keys(populationsByPrefectures).length !== 0"
    />

    <PrefFilters2 />
  </div>

</template>

<style scoped>

/* TODO: remove hard code */
.temp-container {
  height: 1000px;
}
</style>
