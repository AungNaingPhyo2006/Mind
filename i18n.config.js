import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './src/languages/en.json';
import mm from './src/languages/mm.json';
console.log(mm);
const resources = {
  en: {
    translation: en,
  },
  mm: {
    translation: mm,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
