import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const messages = {
  en: {
    welcome: 'welcome',
  },
  de: {
    welcome: 'willkommen',
  },
}
const i18n = createI18n({
  locale: 'en',
  messages,
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
