import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
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
    path: "/about",
    name: "About",
    component: () =>
      import("../views/about/About.vue"),
  },
  {
    path: "/teamwork",
    name: "Teamwork",
    component: () =>
      import("../views/teamwork/Teamwork.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
