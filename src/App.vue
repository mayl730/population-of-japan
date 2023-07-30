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
    <h1>人口推移グラフ（都道府県別）</h1>
    <PrefFilters />
    <PopulationChart
      v-if="Object.keys(populationsByPrefectures).length !== 0"
    />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&family=Montserrat:wght@700&display=swap");
</style>
