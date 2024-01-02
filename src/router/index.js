import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/AccountingSignup",
        name: "AccountingSignup",
        component: () => import("../components/AccountingSignup.vue"),
      },
      {
        path: "/AccountingLogPage",
        name: "AccountingLogPage",
        component: () => import("../components/AccountingLogPage.vue"),
      },
      {
        path: "/AccountingAddTx",
        name: "AccountingAddTx",
        component: () => import("../components/AccountingAddTx.vue"),
      },
    ],
  }
);

export default router;
