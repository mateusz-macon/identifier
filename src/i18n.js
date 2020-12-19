import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultLanguage: "en",
    otherLanguages: ["pl"],
    fallbackLng: "en",
    // debug: true,
    defaultNS: "translation",
    //saveMissing: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    backend: {
      loadPath: "/identifier/locales/{{lng}}/{{ns}}.json",
    },

    /* lng: locale.split("-")[0], */
  });

export default i18n;
