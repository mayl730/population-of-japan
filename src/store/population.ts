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
      const data = await fetchPopulationDataByPrefCode(1);
      data.forEach((item: { [x: string]: any }) =>
        this.years.push(item["year"])
      );
      await this.fetchAllData();
    },
    async fetchAllData() {
      type PopulationDataItem = { value: any };
      const fetchPromises: Promise<PopulationDataItem[]>[] = [];

      for (let prefCode = 1; prefCode <= 47; prefCode++) {
        fetchPromises.push(fetchPopulationDataByPrefCode(prefCode));
      }
      try {
        const fetchedData = await Promise.all(fetchPromises);
        for (let i = 0; i < fetchedData.length; i++) {
          const data = fetchedData[i];
          const populationArray = data.map((item) => item.value);
          this.populationsByPrefectures[i + 1] = populationArray;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
    
      const addGraphPromises: Promise<void>[] = [];
  
      for (let prefCode = 1; prefCode <= 47; prefCode++) {
        addGraphPromises.push(this.addGraphDataSet(prefCode));
      }
      try {
        await Promise.all(addGraphPromises);
      } catch (error) {
        console.error('Error adding graph data sets:', error);
      } finally {
        toggleIsLoading(false);
      }
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
