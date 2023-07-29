import { defineStore } from "pinia";
import { fetchPopulationDataByPrefCode } from "@utils/fetch_population_by_pref_code.ts";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import _ from "lodash";

export const usePopulationStore = defineStore("populations", {
  state: () => ({
    years: [] as number[],
    populationsByPrefectures: {} as { [prefCode: number]: number[] },
    graphDataSet: [] as { name: string; data: number[] }[],
    dataAdded: {} as { [prefCode: number]: boolean },
  }),
  actions: {
    async initializeData() {
      console.log("initializeData");
    },
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
    async addGraphDataSet(prefCode: number) {
      if (this.dataAdded[prefCode]) {
        return;
      } else {
        this.dataAdded[prefCode] = true;
      }
      const prefName = await getPrefNameFromCode(prefCode);
      const populationArray = await this.getPopulations(prefCode);
      this.graphDataSet.push({
        name: prefName,
        data: populationArray,
      });
      console.log(this.graphDataSet);
    },
    async removeGraphDataSet(prefCode: number) {
      this.dataAdded[prefCode] = false;
      const prefName = await getPrefNameFromCode(prefCode);
      _.remove(this.graphDataSet, (data) => data.name === prefName);
    },
  },
});
