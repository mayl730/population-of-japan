<template>
  <label :for="prefCode.toString">
    <input
      type="checkbox"
      :id="'pref_' + prefCode"
      :name="'pref_' + prefCode"
      :value="prefCode"
      v-model="checkedValue"
      @change="handleCheckboxChange"
    />
    {{ name }}</label
  >
</template>

<script setup lang="ts">
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { usePopulationStore } from "../store/population";
import { ref } from "vue";
const { prefCode } = defineProps(['prefCode']);
const { addGraphDataSet, removeGraphDataSet } = usePopulationStore();
const checkedValue = ref([]);

const name = getPrefNameFromCode(prefCode);

function handleCheckboxChange(_event: Event) {
  const isChecked = checkedValue.value.length !== 0;

  if (isChecked) {
    addGraphDataSet(prefCode);
  } else {
    removeGraphDataSet(prefCode);
  }
}
</script>

<style scoped></style>
