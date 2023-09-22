import { defineStore } from "pinia";
export const toggleNavigationStore = defineStore("toggleNavigationStore", {
  state: () => {
    return {
      toggleState: false,
    };
  },
  actions: {
    changeToggleState() {
      this.toggleState = !this.toggleState;
    },
  },
  getters: {},
});
