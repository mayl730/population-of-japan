<script setup lang="ts">
import { usePopulationStore } from "./store/population";
import { onMounted} from "vue";

import PopulationChart from "@components/PopulationChart.vue";
// import FilterButton from "@components/FilterButton.vue";
import PrefFilters from "@components/PrefFilters.vue";

const {
  initializeData,
  getPopulations,
  getYears,
  populationsByPrefectures,
  years
} = usePopulationStore();

onMounted(async () => {
  getPopulations(10);
  getYears();
  initializeData();
});
</script>

<template>
  <PrefFilters />
  <p>{{ years }}</p>
  <PopulationChart v-if="Object.keys(populationsByPrefectures).length !== 0" />
</template>

<style scoped></style>
@utils/get_pref_name_from_code