import { defineStore } from "pinia";
import { fetchPopulationDataByPrefCode } from "@utils/fetch_population_by_pref_code.ts";

export const usePopulationStore = defineStore("populations", {
  state: () => ({
    years: [] as number[],
    populationsByPrefectures: {} as Record<number, number[]>,
  }),
  actions: {
    async getYears() {
      const data = await fetchPopulationDataByPrefCode(1);
      data.forEach((item: { [x: string]: any }) =>
        this.years.push(item["year"])
      );
      return this.years;
    },
    async getPopulations() {
      const data = await fetchPopulationDataByPrefCode(1);
      console.log(data);
    },
  },
});
