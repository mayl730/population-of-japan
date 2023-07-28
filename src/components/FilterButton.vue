<template>
  <label :for="prefCode.toString">
    <input
      type="checkbox"
      :id="'pref_' + prefCode"
      :name="'pref_' + prefCode"
      :value="prefCode"
      v-model="checked"
      @change="handleCheckboxChange"
    />
    {{ name }}</label
  >
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { usePopulationStore } from "@store/population";
import { ref, watch } from "vue";

const { prefCode } = defineProps(["prefCode"]);
const { addGraphDataSet, removeGraphDataSet } = usePopulationStore();
const { allChecked } = storeToRefs(usePopulationStore());

let checked = ref(false);

const name = getPrefNameFromCode(prefCode);

watch(allChecked, () => {
  checked.value = !checked.value;
  handleCheckboxChange();
});

function handleCheckboxChange() {
  if (checked.value) {
    addGraphDataSet(prefCode);
  } else {
    console.log("remove");
    removeGraphDataSet(prefCode);
  }
}
</script>

<style scoped></style>
