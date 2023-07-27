import { defineStore } from "pinia";
import { fetchPopulationDataByPrefCode } from "@utils/fetch_population_by_pref_code.ts";

export const usePopulationStore = defineStore("populations", {
  state: () => ({
    years: [] as number[],
    populationsByPrefectures: {} as { [prefCode: number]: any[] },
  }),
  actions: {
    async getYears() {
      const data = await fetchPopulationDataByPrefCode(1);
      data.forEach((item: { [x: string]: any }) =>
        this.years.push(item["year"])
      );
      return this.years;
    },
    async getPopulations(prefCode: number) {
      if (prefCode <= 0 || prefCode > 47) {
        return [];
      } else if (this.populationsByPrefectures[prefCode]) {
        console.log("cache hit");
        // console.log(this.populationsByPrefectures);
        return this.populationsByPrefectures[prefCode];
      } else {
        console.log("cache miss");
        const data = await fetchPopulationDataByPrefCode(prefCode);
        const populationArray = data.map((item: { value: any }) => item.value);
        this.populationsByPrefectures[prefCode] = populationArray;
        // console.log(this.populationsByPrefectures);
        return this.populationsByPrefectures[prefCode];
      }
    },
  },
});
