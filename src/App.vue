<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
import { usePopulationStore } from "./store/population";
import { onMounted } from "vue";

const apiKey = import.meta.env.VITE_API_KEY;
axios
  .get(
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=1",
    {
      headers: {
        "X-API-KEY": apiKey,
      },
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

const { populations, getPopulations } = usePopulationStore();
console.log(populations);
getPopulations();

onMounted(async () => {
  axios.get("/pref_code_name.json").then(function (response) {
    console.log(response);
  });
});
</script>

<template>
  <div>
    <p>Hello</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
