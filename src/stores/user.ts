import { defineStore } from "pinia";
import { get as session } from "@/services/session/session.services";

export const userStore = defineStore({
  id: "user",
  state: (): any => ({
    user: {},
  }),
  getters: {},
  actions: {
    async get() {
      this.user = await session();
    },
  },
});
