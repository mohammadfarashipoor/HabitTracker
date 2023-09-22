import { defineStore } from "pinia";
import actions from "./actions";
export const userStore = defineStore("UserStore", {
  state: () => {
    return {
      userInfo: {},
    };
  },
  getters: {},
  actions,
});
