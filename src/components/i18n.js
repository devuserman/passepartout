// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// the translations
const resources = {
  
  en: { translation: translationEN },
  fr: { translation: translationFR }
};
console.log(translationEN);
console.log(translationFR);

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // если вы хотите, чтобы французский был языком по умолчанию
    //keySeparator: false,
    interpolation: { escapeValue: false }
  });
  console.log('Current language:', i18n.language);


export default i18n;
