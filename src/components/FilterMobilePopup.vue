<template>
  <div class="popup">
    <div class="header">
      <p class="area-label">Filter (1 selected)</p>
      <button @click="toggleMobilePopup(false)">Close</button>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStateStore } from "@store/state";
const { toggleMobilePopup } = useStateStore();
</script>

<style scoped>

.popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 1);

  display: flex;
  flex-direction: column; /* Set the container to display its children in a column */
  align-items: center;
  justify-content: center;
}
.header {
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 60px;
}

.content {
  position: relative;
  top: 10%;
  width: 100%;
  margin-top: 0px;
}
</style>
