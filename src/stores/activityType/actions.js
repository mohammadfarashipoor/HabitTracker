import {
  postActivityType,
  getActivityType,
  deleteActivityType,
} from "@/services/activityTypeApi";
import { activityTypeTag } from "@/utilities/buildTags";
import { buildData } from "@/utilities/helpers";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  async addActivityType(data) {
    try {
      const userId = localStorage.getItem("userId");
      const tag = activityTypeTag(userId);
      const newData = {
        title: data.title,
        activityCounter: 0,
      };
      const postData = buildData(newData, tag, "activityType");
      const response = await postActivityType(postData);
      toast.success(`${data.title} افزوده شد`);
      await this.getActivityTypes();
    } catch (error) {
      console.log("activityType store : " + error);
    }
  },
  async getActivityTypes() {
    try {
      const response = await getActivityType();
      this.activityTypes = response;
    } catch (error) {
      console.log("activityType store : " + error);
    }
  },
  async removeActivityType(id) {
    try {
      await deleteActivityType(id);
      await this.getActivityTypes();
    } catch (error) {
      console.log("activityType store : " + error);
    }
  },
};
