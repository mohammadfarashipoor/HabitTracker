import {
  postActivity,
  getActivity,
  deleteActivity,
  getActivityById,
} from "@/services/activityApi";
import { handleActivityCounter } from "@/services/activityTypeApi.js";
import { activityTag } from "@/utilities/buildTags";
import { buildData, buildActivityData } from "@/utilities/helpers";
import { useToast } from "vue-toastification";
import { activityTypeStore } from "@/stores/activityType";
import { homeStore } from "@/stores/home";
const activityTypestore = activityTypeStore();
const homestore = homeStore();
const toast = useToast();

export default {
  async addActivity(data, imageIds) {
    try {
      const userId = localStorage.getItem("userId");
      const newData = buildActivityData(data, imageIds);
      const tag = activityTag(userId, newData.date);
      const postData = buildData(newData, tag, "activity");
      const response = await postActivity(postData);
      toast.success(`${data.title} افزوده شد`);
      await handleActivityCounter(data.activityType, "add");
      await this.getActivities();
      await activityTypestore.getActivityTypes();
    } catch (error) {
      console.log("activity store : " + error);
    }
  },
  async postImage() {},
  async getActivities() {
    try {
      const response = await getActivity();
      this.activities = response;
    } catch (error) {
      console.log("activity store : " + error);
    }
  },
  async removeActivity(id) {
    try {
      const activity = await getActivityById(id);
      await deleteActivity(id);
      await handleActivityCounter(activity.activityType, "delete");
      await this.getActivities();
      await activityTypestore.getActivityTypes();
      await homestore.yearFilter();
    } catch (error) {
      console.log("activity store : " + error);
    }
  },
};
