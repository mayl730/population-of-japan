<template>
  <div>
    <button>Select All</button>
    <button>Clear All</button>

    <template v-for="prefCode in 47" :key="prefCode">
      <label :for="prefCode.toString">
        <input
          type="checkbox"
          :id="prefCode.toString()"
          :value="prefCode"
          :checked="isChecked[prefCode - 1]"
          @change="toggleCheckbox(prefCode - 1)"
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

const { toggleAllChecked, allChecked } = useStateStore();
const { addAllGraphDataSet, removeAllGraphDataSet } = usePopulationStore();

function toggleCheckbox(index: number) {
    isChecked.value[index] = !isChecked.value[index];
};

onMounted(async () => {
    for (let i = 1; i <= 47; i++) {
        isChecked.value.push(false);
    } 
});



</script>

<style scoped></style>
