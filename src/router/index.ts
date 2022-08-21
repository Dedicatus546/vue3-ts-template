import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  // 在这里编写路由
  {
    path: "/",
    props: {
      msg: "Vite + Vue",
    },
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/login",
    component: () => import("../Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
