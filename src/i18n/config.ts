import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from './locales/en/common.json';
import common_es from './locales/es/common.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                common: common_en,
            },
            es: {
                common: common_es,
            },
        },
        ns: ['common'],
        defaultNS: 'common',
    });

export default i18n;
