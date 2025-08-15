import { defineStore } from "pinia";
import { get as session } from "@/services/session/session.services";

interface User {
  id?: number;
  name?: string;
  email?: string;
  [key: string]: any;
}

// id = "user", options = { state, getters, actions }
export const userStore = defineStore("user", {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    isLoggedIn: (state) => !!Object.keys(state.user).length,
  },
  actions: {
    async get() {
      this.user = await session();
    },
    clear() {
      this.user = {} as User;
    },
  },
});
