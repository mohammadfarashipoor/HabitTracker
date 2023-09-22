import { defineStore } from "pinia";
import actions from "./actions";
export const activityTypeStore = defineStore("ActivityTypeStore", {
  state: () => {
    return {
      activityTypes: [],
    };
  },
  actions,
  getters: {},
});
