// 导入方法: const 组件名称 = () => import('组件位置')
const index = () => import('./pages/index.vue')
const contact = () => import('./pages/contact.vue')
const tools = () => import('./pages/tools.vue')
const ep404nf = () => import('./pages/404nf.vue')

// Tools
const nngv = () => import('./pages/tools/nngv/page.vue')
const panorama_viewer = () => import('./pages/tools/panorama_viewer/page.vue')

// KeleMC News
const kelemc_news = () => import('./pages/KeleMC/KeleMC_News_HomePage.vue')
const kelemc_news_view = () => import('./pages/KeleMC/KeleMC_News_ViewPage.vue')

const route_rule = [
    { path: '/', component: index },
    { path: '/contact/', component: contact },
    { path: '/tools/', component: tools },
    { path: '/tool/nngweb/', component: nngv },
    { path: '/KeleMC-News-HomePage/', component: kelemc_news },
    { path: '/KeleMC-News-View/:title',name:'KeleMC-News-View', component: kelemc_news_view },
    { path: '/tool/Panorama-Viewer/', component: panorama_viewer},
    { path: '/special_404', name: 'NotFound', component: ep404nf },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ep404nf }
]

// 关键词重定向: KW , URL
const autoredirects = [
    {"kw":'netease', "url":'/tool/nngweb'},
]

export default {route_rule,autoredirects}

