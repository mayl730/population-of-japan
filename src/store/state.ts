import { defineStore } from "pinia";
import _ from "lodash";

export const useStateStore = defineStore("state", {
  state: () => ({
    allChecked: false,
    isLoading: false,
  }),
  actions: {
    async toggleAllChecked() {
      this.allChecked = !this.allChecked;
    },
    async toggleIsLoading(boolean: boolean) {
      this.isLoading = boolean;
    },
  },
});
