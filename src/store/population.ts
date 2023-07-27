import { defineStore } from "pinia";
import { fetchPopulationDataByPrefCode } from "@utils/fetch_population_by_pref_code.ts";

export const usePopulationStore = defineStore("populations", {
  state: () => ({
    populations: [99999] as number[],
    populationsByPrefectures: {} as Record<number, number[]>,
  }),
  actions: {
    async getPopulations(){
      const data = await fetchPopulationDataByPrefCode(1);
      console.log(data);
    },
  },
});
