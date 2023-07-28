<template>
  <div>
    <button @click="toggleAllChecked">Select All</button>
    <template v-for="prefCode in 47" :key="prefCode">
      <FilterButton :prefCode="prefCode"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import FilterButton from "./FilterButton.vue";
import { usePopulationStore } from "@store/population";

const { toggleAllChecked } = usePopulationStore();

</script>

<style scoped></style>
