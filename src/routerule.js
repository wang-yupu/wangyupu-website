// 导入方法: const 组件名称 = () => import('组件位置')
const index = () => import('./pages/index.vue')
const contact = () => import('./pages/contact.vue')
const tools = () => import('./pages/tools.vue')
const ep404nf = () => import('./pages/404nf.vue')

// Tools
// const nngv = () => import('./pages/tools/nngv/page.vue')
const nngv = () => {
    console.log("Loading")
    console.time("PageLoadTime")
    const module=import('./pages/tools/nngv/page.vue')
    console.timeEnd("PageLoadTime")
    console.log("Ready")
    return module
}
// KeleMC News
// const kelemc_news = () => import('./pages/KeleMC/KeleMC_News_HomePage.vue')
const kelemc_news = () => {
    console.time("PageLoadTime")
    const module=import('./pages/KeleMC/KeleMC_News_HomePage.vue')
    console.timeEnd("PageLoadTime")
    return module
}

const route_rule = [
    { path: '/', component: index },
    { path: '/contact/', component: contact },
    { path: '/tools/', component: tools },
    { path: '/tool/nngweb/', component: nngv },
    { path: '/KeleMC-News-HomePage/', component: kelemc_news },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ep404nf }
]

// 关键词重定向: KW , URL
const autoredirects = [
    {"kw":'netease', "url":'/tool/nngweb'},
]

export default {route_rule,autoredirects}

