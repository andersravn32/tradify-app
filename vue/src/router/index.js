import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/trades",
      component: () => import("../pages/trades.vue")
    },
    {
      path: "/profile",
      component: () => import("../pages/profile.vue")
    }
  ],
});

export default router;
