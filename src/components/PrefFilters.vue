<template>
  <div>
    <template v-for="prefCode in 47" :key="prefCode">
      <FilterButton :prefCode="prefCode" />
    </template>
  </div>
</template>

<script setup lang="ts">
import FilterButton from "./FilterButton.vue";
</script>

<style scoped></style>
