import { getUser, patchUser } from "@/services/userApi.js";

export default {
  async getUserInfo() {
    try {
      const userId = localStorage.getItem("userId");
      const userInfo = await getUser(userId);
      this.userInfo = userInfo;
    } catch (error) {
      console.log("user store : " + error);
      throw error;
    }
  },
  async editPassword() {
    try {
    } catch (error) {
      console.log("user store : " + error);
      throw error;
    }
  },
  async editEmail() {
    try {
    } catch (error) {
      console.log("user store : " + error);
      throw error;
    }
  },
  async editAge(age) {
    try {
      // const userInfo = patchUser(age);
    } catch (error) {
      console.log("user store : " + error);
      throw error;
    }
  },
};
