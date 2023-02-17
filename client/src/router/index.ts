import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { mainModuleRoutes } from "@/router/mainModule"

const routes: Array<RouteRecordRaw> = [
    ...mainModuleRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
