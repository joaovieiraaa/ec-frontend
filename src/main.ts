import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/sass/layout-one/app.scss";
import "@/assets/sass/stores/store-one/app.scss";

import App from "@/app.vue";
import i18n from "@/i18n/i18n";
import router from "@/router";

const app = createApp(App);

app.use(createPinia()).use(router).use(i18n).mount("#app");
