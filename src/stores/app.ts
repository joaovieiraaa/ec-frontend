import { defineStore } from "pinia";

export const appStore = defineStore("app", {
  state: () => ({
    init: false,
    router: null as any,
    locale: "en",
    layouts: [] as any[],
    theme: "layout-one",
    storeName: "store-one",
    routeView: "index",
  }),
  getters: {},
  actions: {},
});
