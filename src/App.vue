<script setup lang="ts">
import { usePopulationStore } from "./store/population";
import { onMounted } from "vue";

import PopulationChart from "@components/PopulationChart.vue";
import PrefFilters from "@components/PrefFilters.vue";

const { initializeData, populationsByPrefectures } = usePopulationStore();

onMounted(async () => {
  initializeData();
});
</script>

<template>
  <div class="container">
    <PrefFilters />
    <PopulationChart
      v-if="Object.keys(populationsByPrefectures).length !== 0"
    />
  </div>
</template>

<style scoped></style>
