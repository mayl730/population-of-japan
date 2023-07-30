<template>
  <div class="container">
    <h1>人口推移グラフ（都道府県別）</h1>

    <button @click="toggleMobilePopup(true)">Mobile popup</button>

    <PrefFilters v-if="!mobilePopupIsOpened"/>

    <FilterMobilePopup v-if="mobilePopupIsOpened" >
      <PrefFilters />
    </FilterMobilePopup>
    
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
import FilterMobilePopup from "@components/FilterMobilePopup.vue";

const { initializeData, populationsByPrefectures } = usePopulationStore();

const { toggleMobilePopup } = useStateStore();
const { mobilePopupIsOpened } = storeToRefs(useStateStore());

onMounted(async () => {
  initializeData();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700&family=Montserrat:wght@700&display=swap");
</style>
