<template>
  <div>
    <button @click="clickSelectAll">Select All</button>
    <button @click="clickClearAll">Clear All</button>
    
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
import { usePopulationStore } from "@store/population";

const { toggleAllChecked, allChecked } = useStateStore();
const { addAllGraphDataSet, removeAllGraphDataSet } = usePopulationStore();

function clickSelectAll() {
  toggleAllChecked(true);
  addAllGraphDataSet();
}

function clickClearAll() {
  
  toggleAllChecked(false);
  removeAllGraphDataSet();
  console.log(allChecked);
}

</script>

<style scoped></style>
