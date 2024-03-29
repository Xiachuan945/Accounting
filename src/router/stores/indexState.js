import { defineStore } from "pinia";

export default defineStore("indexState", {
  // data
  state: () => ({
    location: 1,
  }),
  // computed (沒有this，本身能當變數)
  getters: {
    locationInfo(state) {
      return `現在位置${state.location}`;
    },
  },
  // methods
  actions: {
    getLocation() {
      console.log(this.location);
    },
    setLocation(num) {
      this.location = num;
    },
  },
});
