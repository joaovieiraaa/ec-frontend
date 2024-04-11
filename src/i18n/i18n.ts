import { createI18n } from "vue-i18n";
import enLocaleMessages from "./locales/en.json";
import ptLocaleMessages from "./locales/pt.json";
import frLocaleMessages from "./locales/fr.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: enLocaleMessages,
    pt: ptLocaleMessages,
    fr: frLocaleMessages,
  },
  silentFallbackWarn: true,
  legacy: false,
});

export default i18n;
