<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import axios from "axios";
import { usePopulationStore } from "./store/population";
import PopulationChart from "@components/PopulationChart.vue"

// import { onMounted } from "vue";
// import { APIClient } from "@services/index";

// APIClient.get(
//   "/api/v1/population/composition/perYear?cityCode=-&prefCode=1"
// )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {});

const { getPopulations, getYears } = usePopulationStore();

getPopulations(10);
getYears();

// onMounted(async () => {
//   axios.get("/pref_code_name.json").then(function (response) {
//     console.log(response);
//   });
// });
</script>


<template>
  <div>
    <p>HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello</p>
    <PopulationChart />
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
