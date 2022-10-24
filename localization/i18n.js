import i18next from "i18next";
import en from "./en.json";
import bg from "./bg.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "EN",
  resources: {
    EN: en,
    BG: bg,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
