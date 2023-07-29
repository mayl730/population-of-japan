import { defineStore } from "pinia";
import _ from "lodash";

export const useStateStore = defineStore("state", {
  state: () => ({
    allChecked: false,
    isLoading: false,
  }),
  actions: {
    async toggleAllChecked(boolean: boolean) {
      this.allChecked = boolean;
    },
    async toggleIsLoading(boolean: boolean) {
      this.isLoading = boolean;
    },
  },
});
