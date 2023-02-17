
import MainPage from "@/components/views/MainPage.vue";
import {RouteRecordRaw} from "vue-router";

export const mainModuleRoutes: Array<RouteRecordRaw> = [
    {
        path: "/main",
        name: "Main",
        component: MainPage,
        alias: "/"
    }
]