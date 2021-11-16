import { setupStore } from '@/store'
import 'normalize.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import { globalRegister } from './global'
import router from './router'
import store from './store'
const app = createApp(App)

setupStore()
app.use(store).use(router).use(globalRegister).mount('#app')
