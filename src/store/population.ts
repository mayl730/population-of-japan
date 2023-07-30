import { defineStore } from "pinia";
import _ from "lodash";
import { fetchPopulationDataByPrefCode } from "@utils/fetch_population_by_pref_code.ts";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import { useStateStore } from "@store/state";

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
      // for (let i = 1; i <= 47; i++) {
      //   const data = await fetchPopulationDataByPrefCode(i);
      //   const populationArray = data.map((item: { value: any }) => item.value);
      //   this.populationsByPrefectures[i] = populationArray;
      // }
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
        return this.populationsByPrefectures[prefCode];
      } else {
        console.log("cache miss");
        const data = await fetchPopulationDataByPrefCode(prefCode);
        const populationArray = data.map((item: { value: any }) => item.value);
        this.populationsByPrefectures[prefCode] = populationArray;
        return this.populationsByPrefectures[prefCode];
      }
    },
    async addGraphDataSet(prefCode: number) {
      const { toggleIsLoading } = useStateStore();
      toggleIsLoading(true);
      if (this.dataAdded[prefCode]) {
        return;
      } else {
        this.dataAdded[prefCode] = true;
      }
      const prefName = getPrefNameFromCode(prefCode);
      const populationArray = await this.getPopulations(prefCode);
      this.graphDataSet.push({
        name: prefName,
        data: populationArray,
      });
      toggleIsLoading(false);
    },
    async addAllGraphDataSet() {
      const { toggleIsLoading } = useStateStore();
      toggleIsLoading(true);

      const promises: Array<{
        i: number;
        prefName: string;
        populationPromise: Promise<number[]>;
      }> = [];

      for (let i = 1; i <= 47; i++) {
        if (!this.dataAdded[i]) {
          const prefName = getPrefNameFromCode(i);
          const populationPromise = this.getPopulations(i);
          promises.push({ i, prefName, populationPromise });
        }
      }
      const results = await Promise.all(
        promises.map(({ populationPromise }) => populationPromise)
      );
      results.forEach((populationArray, index) => {
        const { i, prefName } = promises[index];
        this.graphDataSet.push({
          name: prefName,
          data: populationArray,
        });
        this.dataAdded[i] = true;
      });

      toggleIsLoading(false);
    },
    removeGraphDataSet(prefCode: number) {
      this.dataAdded[prefCode] = false;
      const prefName = getPrefNameFromCode(prefCode);
      _.remove(this.graphDataSet, (data) => data.name === prefName);
    },
    removeAllGraphDataSet() {
      for (const prefCode in this.dataAdded) {
        this.removeGraphDataSet(Number(prefCode));
      }
    },
  },
});
