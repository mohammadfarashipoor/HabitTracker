import { defineStore } from "pinia";
import actions from "./actions";
export const authStore = defineStore("AuthStore", {
  state: () => {
    return {
      user: {},
    };
  },
  getters: {},
  actions,
});
