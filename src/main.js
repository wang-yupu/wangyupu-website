import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// 路由相关
import route from './routerule.js'
const router = createRouter({
    history: createWebHistory(),
    routes:route.route_rule,
})
// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
console.log("%cWANGYUPU%c Website - Version 0.3%cv%cb%c","color:blue;font-size:200%","color:auto;font-size:150%","color:#33a06f;font-size:125%","color:red;font-size:125%","color:auto")
console.log("Running on Vue version",app.version)
