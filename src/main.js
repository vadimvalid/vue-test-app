import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT

const app = createApp(App)

app.use(router)

app.mount('#app')
