<template>
  <div>
    <button @click="toggleAllChecked">Select All</button>
    <template v-for="prefCode in 47" :key="prefCode">
      <FilterButton
        :prefCode="prefCode"
        :defaultChecked="prefCode === 13 ? true : false"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import FilterButton from "./FilterButton.vue";
import { useStateStore } from "@store/state";

const { toggleAllChecked } = useStateStore();
</script>

<style scoped></style>
