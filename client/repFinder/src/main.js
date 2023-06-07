import { createApp } from 'vue'

import './style.css'
import './shift-background.css'
import App from './App.vue'
import router from './routes'


createApp(App).use(router).mount('#app')