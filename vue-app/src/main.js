import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./config/axios" 

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
})
app.use(router)

app.mount('#app')
