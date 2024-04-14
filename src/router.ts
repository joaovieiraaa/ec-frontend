import { createRouter, createWebHistory, useRouter } from "vue-router";

// STORE
import { storeToRefs } from "pinia";
import { appStore } from "@/stores/app";
import { userStore } from "@/stores/user";

// I18N
import i18n from "@/i18n/i18n";
import { randomString } from "./utils/helpers";

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

router.beforeEach(async (to: any) => {
  const { routeView, locale } = storeToRefs(appStore());
  const { user } = storeToRefs(userStore());

  routeView.value = to.meta.view ?? "index";
  locale.value = i18n.global.locale ?? "en";

  user.value = initData();

  console.log(localStorage);
});

async function initData() {
  const session = localStorage;

  if (!session._token) session.setItem("_token", randomString(32));

  userStore().get();

  return session;
}

export default router;
