
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: true,
    languages: ["ru", "uz"],
    detection: {},

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });


  export default i18n