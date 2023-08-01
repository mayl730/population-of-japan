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
  getters: {
    checkboxCount(state): number {
      return state.graphDataSet.length;
    },
    isDataMounted(state): boolean {
      return Object.keys(state.populationsByPrefectures).length !== 0;
    },
  },
  actions: {
    async initializeData() {
      await this.getYears();
    },
    async getYears() {
      const data = await fetchPopulationDataByPrefCode(1);
      data.forEach((item: { [x: string]: any }) =>
        this.years.push(item["year"])
      );
    },
    async getPopulationsByPrefCode(prefCode: number): Promise<number[]> {
      if (prefCode <= 0 || prefCode > 47) {
        throw new Error(
          "Invalid prefCode. Please provide a valid prefecture code.(1-47)"
        );
      } else if (this.populationsByPrefectures[prefCode]) {
        return this.populationsByPrefectures[prefCode];
      } else {
        const data = await fetchPopulationDataByPrefCode(prefCode);
        const populationArray = data.map((item: { value: any }) => item.value);
        this.populationsByPrefectures[prefCode] = populationArray;
        return this.populationsByPrefectures[prefCode];
      }
    },
    async addGraphDataSetByPrefCode(prefCode: number) {
      const { toggleIsLoading } = useStateStore();
      try {
        toggleIsLoading(true);
        if (this.dataAdded[prefCode]) {
          toggleIsLoading(false);
          return;
        }
        this.dataAdded[prefCode] = true;

        const prefName = getPrefNameFromCode(prefCode);
        const populationArray = await this.getPopulationsByPrefCode(prefCode);

        this.graphDataSet.push({
          name: prefName,
          data: populationArray,
        });
      } catch (error) {
        console.error("Error adding graph data sets:", error);
      } finally {
        toggleIsLoading(false);
      }
    },
    async addAllGraphDataSet() {
      const { toggleIsLoading } = useStateStore();
      toggleIsLoading(true);
      const addGraphPromises: Promise<void>[] = [];
      for (let prefCode = 1; prefCode <= 47; prefCode++) {
        addGraphPromises.push(this.addGraphDataSetByPrefCode(prefCode));
      }
      try {
        await Promise.all(addGraphPromises);
      } catch (error) {
        console.error("Error adding all graph data sets:", error);
      } finally {
        toggleIsLoading(false);
      }
    },
    removeGraphDataSetByPrefCode(prefCode: number) {
      this.dataAdded[prefCode] = false;
      const prefName = getPrefNameFromCode(prefCode);
      _.remove(this.graphDataSet, (data) => data.name === prefName);
    },
    removeAllGraphDataSet() {
      for (const prefCode in this.dataAdded) {
        this.removeGraphDataSetByPrefCode(Number(prefCode));
      }
    },
  },
});
