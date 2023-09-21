import { useToast } from "vue-toastification";
const toast = useToast();
import Cookies from "js-cookie";
const beforeEach = (to, from) => {
  const authenticated = Cookies.get("token");
  if (to.meta.requireAuth && !authenticated) {
    toast.warning("ابتدا وارد حساب کاربری خود شوید");
    return { name: "login" };
  }
  if (to.meta.isNotAuthenticate && authenticated) {
    toast.warning("ابتدا باید از حساب کاربری خود خارج شوید!");
    return { name: "home" };
  }
};

export default (router) => {
  router.beforeEach(beforeEach);
};
