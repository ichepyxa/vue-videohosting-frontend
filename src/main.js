import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'https://videohosting:8888/api'
axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem(
	'auth-user-token'
)}`

app.use(router)

app.mount('#app')
