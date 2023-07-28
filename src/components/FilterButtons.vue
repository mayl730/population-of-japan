<script setup lang="ts">
import { usePopulationStore } from "../store/population";

const { populationsByPrefectures } = usePopulationStore();
console.log(populationsByPrefectures);
</script>

<template>
  <input
    type="checkbox"
    id="1"
    name="1"
    value="1"
    checked
  />
  北海道
  <p>Buttons</p>
</template>

<style scoped></style>
