import { defineStore } from "pinia";

export const appStore = defineStore({
  id: "app",
  state: (): any => ({
    init: false,
    router: null,
    locale: "en",
    layouts: [],
    theme: "layout-one",
    storeName: "store-one",
    routeView: "index",
  }),
  getters: {},
  actions: {},
});
