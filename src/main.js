import { createApp } from "vue";
import { usePlugins } from "@/plugins";
import "./style.css";
import App from "./App.vue";

const createApplication = () => {
  const appInstance = createApp(App);
  usePlugins(appInstance);
  appInstance.mount("#app");
};

createApplication();
