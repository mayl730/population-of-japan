import { defineStore } from "pinia";
import { fetchPopulationDataByPrefCode } from "@utils/fetch_population_by_pref_code.ts";
import { getPrefNameFromCode } from "@utils/get_pref_name_from_code";
import _ from "lodash";

export const usePopulationStore = defineStore("populations", {
  state: () => ({
    years: [] as number[],
    populationsByPrefectures: {} as { [prefCode: number]: any[] },
    graphDataSet: [
      {
        name: "群馬県",
        data: [
          1578476, 1605584, 1658909, 1756480, 1848562, 1921259, 1966265,
          2003540, 2024852, 2024135, 2008068, 1973115, 1939110, 1865565,
          1796233, 1719914, 1637642, 1552950,
        ],
      },
    ] as { name: string; data: number[] }[],
  }),
  actions: {
    async initializeData() {
      console.log('initializeData')
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
      const prefName = await getPrefNameFromCode(prefCode);
      const populationArray = await this.getPopulations(prefCode);
      this.graphDataSet.push({
        name: prefName,
        data: populationArray,
      });
      console.log(this.graphDataSet);
    },
    async removeGraphDataSet(prefCode: number) {
      const prefName = await getPrefNameFromCode(prefCode);
      _.remove(this.graphDataSet, (data) => data.name === prefName);
      console.log(this.graphDataSet);
    },
  },
});
