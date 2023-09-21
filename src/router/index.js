import { createRouter, createWebHistory } from "vue-router";
import Config from "@/router/config";

const router = createRouter({
  history: createWebHistory(),
  routes: Config.routes,
});

Config.guards(router);

export default router;
