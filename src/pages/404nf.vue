<script setup>
import { useRouter,useRoute } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const currentPage = window.location.href
function back(){
    router.back()
}
function index(){
    router.push("/")
}

const redirectTime = ref(15)
function redirect(){
    redirectTime.value -= 0.01
    redirectTime.value = redirectTime.value.toFixed(2)
    if(redirectTime.value == 0){
        back()
    }
}
setInterval(redirect,10)
</script>

<template>
<div class="content">
    <h1 class="nftitle">404 Not Found</h1>
    <h1 class="nfsubtitle">没有找到: {{ currentPage }}</h1>
    <h2>网站目前正在重构，部分页面、资源还没有重构</h2>

    <button @click="back" class="back_button">回到上个页面 ({{ redirectTime }}s)</button>
    <br>
    <button @click="index" class="back_button">回到首页</button>
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
    color:red;
}
.nfsubtitle {
    font-size: 200%;
    color:#F56C6C;
}
.back_button {
    margin-top:2%;
}
</style>