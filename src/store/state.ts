import { defineStore } from "pinia";
import _ from "lodash";

export const useStateStore = defineStore("state", {
  state: () => ({
    isLoading: false,
    mobilePopupIsOpened: false,
  }),
  actions: {
    async toggleMobilePopup(boolean: boolean) {
      this.mobilePopupIsOpened = boolean;
    },
    async toggleIsLoading(boolean: boolean) {
      this.isLoading = boolean;
    },
  },
});
