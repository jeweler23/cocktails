import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "@/constants";
import Home from "../pages/Home.vue";
import Coctail from "../pages/Coctail.vue";
import CoctailRandom from "../pages/CoctailRandom.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home,
    },
    {
      path: ROUTES_PATHS.COCTAIL,
      name: ROUTES_PATHS.COCTAIL,
      component: Coctail,
    },
    {
      path: ROUTES_PATHS.COCTAIL_RANDOM,
      name: ROUTES_PATHS.COCTAIL_RANDOM,
      component: CoctailRandom,
    },
  ],
});

export default router;
