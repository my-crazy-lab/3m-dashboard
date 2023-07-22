import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, vi } from "../i18n";

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

const defaultLang = "vi";

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: "v3",
  //language to use if translations in user language are not available
  fallbackLng: defaultLang,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
