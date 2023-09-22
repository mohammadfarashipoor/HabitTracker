import { defineStore } from "pinia";
import actions from "./actions";
export const activityStore = defineStore("ActivityStore", {
  state: () => {
    return {
      activities: [],
      imageIds: [],
      editActivityValues: {},
    };
  },
  actions,
  getters: {},
});
