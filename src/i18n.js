import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      sevimli: "избранное",
      search: "Поиск",
      loc: "Адрес",
    },
  },
  en: {
    translation: {
      sevimli: "Favourites",
      search: "Search",
      loc: "Location",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // Standart til
  interpolation: { escapeValue: false },
});

export default i18n;
