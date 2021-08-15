import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/Home.vue";
import MainLayout from "@/layouts/main-layout/MainLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import("../views/login/Login.vue"),
  },
  {
    path: "/board-detail",
    name: "Board",
    component: () =>
      import("../views/board/Board.vue"),
  },
  {
    path: "/project-detail",
    name: "Project Detail",
    component: () =>
      import("../views/project-detail/ProjectDetail.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/about/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
