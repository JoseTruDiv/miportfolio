import { createApp } from 'vue'
import './css/style.css'
import App from './Home.vue'
import router from './router/router'


const app = createApp(App)
app.use(router)
app.mount('#app')
