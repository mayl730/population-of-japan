<template>
  <div>
    <button @click="selectAll()">Select All</button>
    <button @click="clearAll()">Clear All</button>

    <template v-for="prefCode in 47" :key="prefCode">
      <label :for="prefCode.toString">
        <input
          type="checkbox"
          :id="prefCode.toString()"
          :value="prefCode"
          :checked="isChecked[prefCode - 1]"
          @change="toggleCheckbox(prefCode)"
        />
        {{ getPrefNameFromCode(prefCode) }}</label
      >
    </template>

    {{ isChecked }}
  </div>
</template>

<script setup lang="ts">
import { useStateStore } from "@store/state";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { usePopulationStore } from "@store/population";
import { onMounted, ref } from "vue";

let isChecked = ref([] as boolean[]);

onMounted(async () => {
  for (let prefCode = 1; prefCode <= 47; prefCode++) {
    if (prefCode === 13) {
      toggleCheckbox(13);
    } else {
      isChecked.value.push(false);
    }
  }
});

const {
  addGraphDataSet,
  removeGraphDataSet,
  addAllGraphDataSet,
  removeAllGraphDataSet,
} = usePopulationStore();

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

async function clearAll() {
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
