<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

// 先过完重定向再显示404页面

const router = useRouter()
const currentPage = window.top.location.href
function back() {
    router.back()
}
function index() {
    router.push("/")
}

const show404 = ref(false)
const redirectTime = ref(15) // 单位: 秒
function redirect() {
    redirectTime.value -= 0.01
    redirectTime.value = redirectTime.value.toFixed(2)
    if (redirectTime.value == 0) {
        back()
    }
}

const redirectInterval = setInterval(redirect, 10)
const redirecting = ref(false)

import routerule from './../routerule.js'
const redirects = routerule.autoredirects

let foundRedirect = false
redirects.forEach(function (item, index, array) {
    console.log(item, index, array)
    if (currentPage.includes(item['kw'])) {
        clearInterval(redirectInterval)
        setTimeout(() => {
            router.push(item['url'])
        }, 500)
        show404.value = false
        redirecting.value = true
        foundRedirect = true
        console.log("404 page: 找到了重定向")
    }
})

if (!foundRedirect){
    show404.value = true
}


</script>

<template>
    <div class="content">
        <div class="404Content" v-if="show404">
            <h1 class="nftitle">404 Not Found</h1>
            <h1 class="nfsubtitle">没有找到: {{ currentPage }}</h1>
            <button @click="back" class="back_button">回到上个页面 ({{ redirectTime }}s)</button>
            <br>
            <button @click="index" class="back_button">回到首页</button>
        </div>
        <div class="redirecting" v-else-if="redirecting">
            <h1>正在重定向...</h1>
            <h2>您访问的是旧链接，正在重定向到新链接</h2>
        </div>
        <div class="else" v-else>
            <h1>404 Not Found / Old link</h1>
            <h2>请稍等</h2>
        </div>
    </div>
</template>

<style scoped>
.content {
    text-align: center;
    align-items: center;
    height: 80vh;
}

.nftitle {
    font-size: 300%;
    color: red;
}

.nfsubtitle {
    font-size: 200%;
    color: #F56C6C;
}

.back_button {
    margin-top: 2%;
}
</style>