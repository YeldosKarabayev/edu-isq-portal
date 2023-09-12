import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ru: {
    translation: {
      Войти: "Войти",
      Пройдите: "Пройдите",
      "Пройдите обучение на I SHANYRAQ" : "Пройдите обучение на I SHANYRAQ",
    }
  },
  kz: {
    translation: {
      Войти: "Кіру",
      "I SHANYRAQ бойынша оқудан өтіңіз" : "Пройдите обучение на I SHANYRAQ",
      Пройдите: "Өтіңіз",
    }
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") ? localStorage.getItem("language") : "kz",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
