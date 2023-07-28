<script setup lang="ts">
// import { usePopulationStore } from "../store/population";
import { ref } from "vue";

// const { populationsByPrefectures } = usePopulationStore();
const checkedValue = ref([]);

function handleCheckboxChange(_event: Event) {
  const isChecked = checkedValue.value.length !== 0;
  console.log(isChecked);
}
</script>

<template>
  {{ checkedValue }}
  <input
    type="checkbox"
    id="pref_1"
    name="pref_1"
    value="1"
    v-model="checkedValue"
    @change="handleCheckboxChange"
  />
  <label for="1">北海道</label>
  <p>Buttons</p>
</template>

<style scoped></style>
