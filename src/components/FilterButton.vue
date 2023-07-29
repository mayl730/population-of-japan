<template>
  <label :for="prefCode.toString">
    <input
      type="checkbox"
      :id="'pref_' + prefCode"
      :name="'pref_' + prefCode"
      :value="prefCode"
      v-model="checked"
      @change="handleCheckboxChange"
      :disabled="isLoading"
    />
    {{ name }}</label
  >
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { usePopulationStore } from "@store/population";
import { useStateStore } from "@store/state";
import { ref, watch } from "vue";

const { prefCode, defaultChecked } = defineProps([
  "prefCode",
  "defaultChecked",
]);
const { addGraphDataSet, removeGraphDataSet } = usePopulationStore();
const { allChecked } = storeToRefs(useStateStore());
const { isLoading } = storeToRefs(useStateStore());

let checked = ref(defaultChecked);

const name = getPrefNameFromCode(prefCode);

if (defaultChecked) {
  handleCheckboxChange();
}

watch(allChecked, () => {
  if(allChecked.value) {
    checked.value = true;
  } else {
    checked.value = false;
  }
  handleCheckboxChange();
});

function handleCheckboxChange() {
  if (checked.value) {
    addGraphDataSet(prefCode);
  } else {
    removeGraphDataSet(prefCode);
  }
}
</script>

<style scoped></style>
