import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { I18nextPhraseBackend } from '@phrase/i18next-backend'

i18n
  .use(I18nextPhraseBackend) // Use the HTTP backend to fetch translations
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en',
    backend: {
      distribution: '703231abfb0f72eae34c199f17ea3ad5',
      secret: 'bW9qP5F9xSQ1u8GKcjiQ6HsN35VCPygWbdfoGyktgRA',
      host: 'https://ota.us.phrase.com'
    }
    // backend: {
    //   loadPath:
    //     'https://api.lokalise.com/api2/projects/14260889677d3b7ccc1dd0.76713586/downloads/json?language={{lng}}', // Lokalise OTA URL
    //   customHeaders: {
    //     Authorization: 'Bearer 127e113a1351b8e3c2e23c26bf226220684cda45' // Your Lokalise API token
    //   }
    // },
    // lng: 'en', // Default language
    // fallbackLng: 'en',
    // interpolation: {
    //   escapeValue: false // React already escapes values
    // }
  })

export default i18n
