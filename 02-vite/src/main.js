import { createApp as createVueApp, createSSRApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

export function createApp() {
  const pinia = createPinia()
  const app = createVueApp(App).use(router).use(pinia)
  return { app }
}
