// 导入方法: const 组件名称 = () => import('组件位置')
const index = () => import('./pages/index.vue')
const contact = () => import('./pages/contact.vue')

const route_rule = [
    { path: '/', component: index },
    { path: '/contact/', component: contact },
]

export default {route_rule}

