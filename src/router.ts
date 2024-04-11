import { createRouter, createWebHistory, useRouter } from "vue-router";

// STORE
import { storeToRefs } from "pinia";
import { appStore } from "@/stores/app";

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
      meta: { safe: false },
    },
  ],
});

const routes = router.getRoutes();
const safeRoutes = routes
  .filter((x: any) => x.meta.safe)
  .map((x: any) => x.name);

router.beforeEach(async (to: any) => {
  const store = appStore();
  const { init } = storeToRefs(store);

  // if (!init.value) store.layouts();

  // const { configs, reservation, router } = storeToRefs(appStore());
  // if (!router.value) router.value = useRouter();
  // if (safeRoutes.includes(to.name) && !reservation.value.reservation) await router.value.push('/');
  // else {
  //   await initData();
  //   await initXolvis(to.name);
  // }
  // document.title = `Express Checkout - ${configs.value.firmName}`;
});

async function initData(): Promise<void> {
  // const { fields, fieldsAdditional, flow, objFields, objLoaded, arrTermsAndConditions } =
  //   storeToRefs(appStore());
  // if (!objLoaded.value.configs) await ConfigsLogic.configs();
  // if (!objLoaded.value.countries) await ConfigsLogic.countries();
  // if (!objLoaded.value.documentType) await ConfigsLogic.documentTypes();
  // if (!objLoaded.value.fields) await ConfigsLogic.fields();
  // if (!arrTermsAndConditions.value.length) await RGDPLogic.get();
  // // FIELDS
  // if (flow.value !== 'additionalDriver') objFields.value = cloneObject(fields.value);
  // else objFields.value = cloneObject(fieldsAdditional.value);
}

export default router;
