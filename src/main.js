import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)
const swiper = createApp(Swiper)

app.use(swiper)
app.use(pinia)
app.mount('#app')
