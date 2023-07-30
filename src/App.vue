<template>
  <div class="container">
    <h1>人口推移グラフ（都道府県別）</h1>

    <div id="mobile-filter" class="center">
      <button @click="toggleMobilePopup(true)" class="round-button">
        <span class="material-symbols-outlined"> filter_alt </span>
        <span class="button-text"
          >都道府県フィルター({{ graphDataSet.length }}件)</span
        >
      </button>
    </div>

    <PrefFilters />

    <PopulationChart
      v-if="Object.keys(populationsByPrefectures).length !== 0"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { usePopulationStore } from "@store/population";
import { useStateStore } from "@store/state";
import PopulationChart from "@components/PopulationChart.vue";
import PrefFilters from "@components/PrefFilters.vue";

const { initializeData, populationsByPrefectures } = usePopulationStore();
const { graphDataSet } = storeToRefs(usePopulationStore());
const { toggleMobilePopup } = useStateStore();

onMounted(async () => {
  initializeData();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&family=Montserrat:wght@700&display=swap");
</style>
