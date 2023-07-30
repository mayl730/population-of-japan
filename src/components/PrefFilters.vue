<template>
  <div>
    <button @click="selectAll()" :disabled="isLoading">Select All</button>
    <button @click="clearAll()" :disabled="isLoading">Clear All</button>

    <template v-for="prefCode in 47" :key="prefCode">
      <label
        :for="prefCode.toString()"
        class="filter-box"
        :class="{ active: isChecked[prefCode - 1] }"
      >
        <input
          type="checkbox"
          :id="prefCode.toString()"
          :value="prefCode"
          :checked="isChecked[prefCode - 1]"
          @change="toggleCheckbox(prefCode)"
          :disabled="isLoading"
        />
        {{ getPrefNameFromCode(prefCode) }}</label
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

import { useStateStore } from "@store/state";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { usePopulationStore } from "@store/population";

let isChecked = ref([] as boolean[]);
const {
  addGraphDataSetByPrefCode: addGraphDataSet,
  removeGraphDataSetByPrefCode: removeGraphDataSet,
  addAllGraphDataSet,
  removeAllGraphDataSet,
} = usePopulationStore();

const { isLoading } = storeToRefs(useStateStore());

onMounted(async () => {
  for (let prefCode = 1; prefCode <= 47; prefCode++) {
    if (prefCode === 13) {
      toggleCheckbox(13);
    } else {
      isChecked.value.push(false);
    }
  }
});

function toggleCheckbox(prefCode: number) {
  const index = prefCode - 1;
  isChecked.value[index] = !isChecked.value[index];
  if (isChecked.value[index]) {
    addGraphDataSet(prefCode);
  } else {
    removeGraphDataSet(prefCode);
  }
}

async function selectAll() {
  toggleAllCheckboxes(true);
  await addAllGraphDataSet();
}

function clearAll() {
  toggleAllCheckboxes(false);
  removeAllGraphDataSet();
}

function toggleAllCheckboxes(boolean: boolean) {
  for (let i = 0; i < isChecked.value.length; i++) {
    isChecked.value[i] = boolean;
  }
}
</script>

<style scoped></style>
