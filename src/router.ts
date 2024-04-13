import { createRouter, createWebHistory, useRouter } from "vue-router";

// STORE
import { storeToRefs } from "pinia";
import { appStore } from "@/stores/app";
import i18n from "@/i18n/i18n";

// UTILS
// import { cloneObject } from '@/utils/object';

// SERVICES

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: null,
      meta: { safe: false, view: "index" },
    },
  ],
});

const routes = router.getRoutes();
const safeRoutes = routes
  .filter((x: any) => x.meta.safe)
  .map((x: any) => x.name);

const locale = i18n.global.locale;

router.beforeEach(async (to: any) => {
  const store = appStore();
  const { routeView, locale } = storeToRefs(store);

  routeView.value = to.meta.view ?? "index";
  locale.value = i18n.global.locale ?? "en";
});

async function initData(): Promise<void> {}

export default router;
