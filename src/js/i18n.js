import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 import translationEN from '../locales/en/translation.json';
 import translationSV from '../locales/sv/translation.json';
 import translationJA from '../locales/ja/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      sv: {
        translation: translationSV
      },
      ja: {
        translation: translationJA
      },
    },
    lng: "en",
    fallbackLng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;