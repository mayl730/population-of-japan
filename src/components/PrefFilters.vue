<template>
  <div
    class="popup hidden"
    :class="{ active: mobilePopupIsOpened, display: mobilePopupIsOpened }"
  >
    <div class="mobile-filter-header" :class="{ active: mobilePopupIsOpened }">
      <p class="area-label">フィルター ({{ checkboxCount }} 件)</p>
      <span class="material-symbols-outlined" @click="toggleMobilePopup(false)">
        close
      </span>
    </div>
    <div class="pref-filters center" :class="{ active: mobilePopupIsOpened }">
      <div class="row">
        <p class="area-label">都道府県</p>
        <button @click="selectAll()" :disabled="isLoading" class="round-button">
          全て選択する
        </button>
        <button @click="clearAll()" :disabled="isLoading" class="round-button">
          クリア
        </button>
      </div>

      <br />
      <template v-for="prefCode in 47" :key="prefCode">
        <label
          :for="prefCode.toString()"
          class="filter-label"
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useStateStore } from "@store/state";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { usePopulationStore } from "@store/population";

const {
  addGraphDataSetByPrefCode: addGraphDataSet,
  removeGraphDataSetByPrefCode: removeGraphDataSet,
  addAllGraphDataSet,
  removeAllGraphDataSet,
} = usePopulationStore();
const { checkboxCount } = storeToRefs(usePopulationStore());
const { toggleMobilePopup } = useStateStore();
const { isLoading, mobilePopupIsOpened } = storeToRefs(useStateStore());
let isChecked = ref([] as boolean[]);

onMounted(async () => {
  for (let prefCode = 1; prefCode <= 47; prefCode++) {
    if (prefCode === 13) {
      toggleCheckbox(13);
    } else if (prefCode === 27) {
      toggleCheckbox(27);
    } else {
      isChecked.value.push(false);
    }
  }
});

async function toggleCheckbox(prefCode: number) {
  const index = prefCode - 1;
  isChecked.value[index] = !isChecked.value[index];
  if (isChecked.value[index]) {
    await addGraphDataSet(prefCode);
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
