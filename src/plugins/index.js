import { pinia } from "@/plugins/pinia";
import { markRaw } from "vue";
import router from "@/plugins/router";
import { Toast, toastOptions } from "@/plugins/toast";
import { LoadingPlugin } from "@/plugins/loading";

const pluginList = [pinia, router, [Toast, toastOptions], LoadingPlugin];
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
const usePlugins = (appInstance) => {
  for (let i = 0; i < pluginList.length; i++) {
    const plugin = pluginList[i];
    if (pluginList[i][1]) {
      const plugin = pluginList[i][0];
      const config = pluginList[i][1];
      appInstance.use(plugin, config);
    } else {
      appInstance.use(plugin);
    }
  }
};

export { usePlugins };
