import { defineStore } from "pinia";
import _ from "lodash";

export const useStateStore = defineStore("state", {
  state: () => ({
    allChecked: false,
  }),
  actions: {
    async toggleAllChecked() {
      this.allChecked = !this.allChecked;
    },
  },
});
