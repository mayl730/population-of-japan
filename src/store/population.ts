import { defineStore } from "pinia";

export const usePopulationStore = defineStore("populations", {
  state: () => ({
    populations: [99999] as number[],
  }),
  actions: {
    getPopulations() {
      this.populations.push(100000);
      console.log(this.populations);
    },
  },
});
