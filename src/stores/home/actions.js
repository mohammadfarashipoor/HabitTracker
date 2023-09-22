import { activityTypeStore } from "@/stores/activityType";
import { getActivityTypeNameById } from "@/services/activityTypeApi";
import {
  getDayFilter,
  getWeekFilter,
  getMonthFilter,
  getYearFilter,
} from "@/services/filterApi.js";
const uId = localStorage.getItem("userId");
const activitytypeStore = activityTypeStore();
const userId = {
  userId: uId,
};

export default {
  async calculateMostActivityTypes() {
    const activities = this.activities;
    const activityTypes = activitytypeStore.activityTypes;

    let activityTypeCounter = {};
    for (let activityType of activityTypes) {
      activityTypeCounter[activityType._id] = 0;
    }
    for (let activity of activities) {
      activityTypeCounter[activity.data.activityType] =
        activityTypeCounter[activity.data.activityType] + 1;
    }
    const sortedActivityTypes = Object.entries(activityTypeCounter).sort(
      (x, y) => y[1] - x[1]
    );
    for (let i = 0; i < sortedActivityTypes.length; i++) {
      const activityTypeId = sortedActivityTypes[i][0];
      const activityTypeName = await getActivityTypeNameById(activityTypeId);
      sortedActivityTypes[i][0] = activityTypeName;
    }
    return sortedActivityTypes;
  },
  async dayFilter() {
    try {
      const response = await getDayFilter(userId);
      this.activities = [];
      this.activities = response.data;
      this.mostActivityTypes = await this.calculateMostActivityTypes();
    } catch (error) {
      console.log("home store :  " + error);
    }
  },
  async weekFilter() {
    try {
      const response = await getWeekFilter(userId);
      this.activities = [];
      this.activities = response.data;
      this.mostActivityTypes = await this.calculateMostActivityTypes();
    } catch (error) {
      console.log("home store :  " + error);
    }
  },
  async monthFilter() {
    try {
      const response = await getMonthFilter(userId);
      this.activities = [];
      this.activities = response.data;
      this.mostActivityTypes = await this.calculateMostActivityTypes();
    } catch (error) {
      console.log("home store :  " + error);
    }
  },
  async yearFilter() {
    try {
      const response = await getYearFilter(userId);
      this.activities = [];
      this.activities = response.data;
      this.mostActivityTypes = await this.calculateMostActivityTypes();
    } catch (error) {
      console.log("home store :  " + error);
    }
  },
};
