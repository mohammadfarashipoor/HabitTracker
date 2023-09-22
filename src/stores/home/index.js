import { defineStore } from "pinia";
import actions from "./actions";
import getters from "./getters";
export const homeStore = defineStore("HomeStore", {
  state: () => {
    return {
      activities: [],
      mostActivityTypes: [],
    };
  },
  actions,
  getters,
});
