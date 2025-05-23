// 导入方法: const 组件名称 = () => import('组件位置')
const index = () => import('./pages/index.vue')
const contact = () => import('./pages/contact.vue')
const tools = () => import('./pages/tools.vue')
const ep404nf = () => import('./pages/404nf.vue')
const sitemap = () => import('./pages/sitemap.vue')
const shortLink = () => import('./pages/shortLink.vue')

// Tools
const nngv = () => import('./pages/tools/nngv/page.vue')
const panorama_viewer = () => import('./pages/tools/panorama_viewer/page.vue')
const shapez2ShapeViewer = () => import('./pages/tools/shapez2_shape_viewer/page.vue')

// KeleMC News
const kelemc_news = () => import('./pages/KeleMC/KeleMC_News_HomePage.vue')
const kelemc_news_view = () => import('./pages/KeleMC/KeleMC_News_ViewPage.vue')

const route_rule = [
    { path: '/', component: index, smargs: { title: '首页', category: '页面' } },
    { path: '/contact/', component: contact, smargs: { title: '联系', category: '页面' } },
    { path: '/tools/', component: tools, smargs: { title: '工具索引', category: '页面' } },
    { path: '/tool/nngweb/', component: nngv, smargs: { title: '网易MC名称生成器', category: '工具' } },
    { path: '/KeleMC-News-HomePage/', component: kelemc_news, smargs: { title: 'KeleMC快报主页', category: '页面' } },
    { path: '/KeleMC-News-View/:title', name: 'KeleMC-News-View', component: kelemc_news_view},
    { path: '/tool/Panorama-Viewer/', component: panorama_viewer, smargs: { title: '全景图查看器[WIP]', category: '工具' } },
    { path: '/tool/shapez2ShapeViewer/', component: shapez2ShapeViewer, smargs: { title: '异形工厂 2 形状查看器', category: '工具' } },
    { path: '/sitemap', component: sitemap, smargs: { title: '站点地图', category: '特殊页面' } },
    { path: '/404Page', name: 'NotFound', component: ep404nf, smargs: { title: '404页面', category: '特殊页面' } },
    { path: '/l/:name', name: 'ShortLink', component: shortLink},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ep404nf }
]

// 关键词重定向: KW , URL
const autoredirects = [
    { "kw": 'netease', "url": '/tool/nngweb' },
]

export const shortLinks = [
    {"name": "msrpp", "target": "https://www.mcmod.cn/class/17821.html"}
]

export default { route_rule, autoredirects }

