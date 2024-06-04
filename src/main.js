import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// 路由相关
import route from './routerule.js'
import isPageLoading from './store.js'
const router = createRouter({
    history: createWebHistory(),
    routes:route.route_rule,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
    },
})

router.beforeEach((to, from) => {
    isPageLoading.value = true
})
router.afterEach(() => {
    isPageLoading.value = false
})

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
//import './styles/dark/css-vars.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
console.log("%cWANGYUPU%c Website - Version 0.6%cv%cb%c","color:blue;font-size:200%","color:auto;font-size:150%","color:#33a06f;font-size:125%","color:red;font-size:125%","color:auto")
console.log("Running on Vue version",app.version)
