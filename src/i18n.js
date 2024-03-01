// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { store } from './store'; // Adjust the import path as necessary
import { setLanguage } from './slices/languageSlice'; // Adjust the import path as necessary

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Initialization options...
  });

// Listen to language changes
i18n.on('languageChanged', (lng) => {
  store.dispatch(setLanguage(lng));
});

export default i18n;
