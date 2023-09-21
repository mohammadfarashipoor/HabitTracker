import { login, handleSignup } from "@/services/authApi.js";
import { getUserByEmail, getUser } from "@/services/userApi";
import Cookies from "js-cookie";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  async loginForm(data) {
    try {
      const response = await login(data);
      if (response) {
        const { token, email } = response;
        const user = await getUserByEmail(email);
        this.user = user;
        const userName = user?.data?.name;
        const userId = user?.tags?.userId;
        localStorage.setItem("userId", userId);
        Cookies.set("token", token);
        toast.success(`${userName} خوش آمدید`);
        return response;
      }
    } catch (error) {
      console.log("auth store : " + error);
    }
  },
  async handleSignupForm(values) {
    values.age = +values.age;
    try {
      const response = await handleSignup(values);
      const token = response.token;
      const userId = response.userId;
      if (token && userId) {
        Cookies.set("token", token);
        localStorage.setItem("userId", userId);
        toast.success("خوش آمدید");
        return response;
      }
    } catch (error) {
      console.log("auth store : " + error);
    }
  },
  async getUserInformation() {
    const userId = localStorage.getItem("userId");
    const response = await getUser(userId);
    this.user = response?.data?.results[0]?.data;
  },
};
