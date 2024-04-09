<script setup>
import {ref} from 'vue'
function update_height(){
    vp_height.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}
window.addEventListener('resize', update_height);

const vp_height = ref(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);

</script>

<template>
<div class="topbar" style="display: flex; align-items: center;  height: 3vh">
    <router-link to="/" class="w_icon"><img src="/src/assets/icon.png" alt="WANGYUPU ICON" :height="vp_height*0.03"></img></router-link>
    <a href="https://github.com/wang-yupu" class="nocolor_link topbar_link">Github</a>
    <router-link to="/tools/" class="nocolor_link topbar_link">工具</router-link>
</div>
</template>

<style scoped>
.topbar{
    backdrop-filter: saturate(30%) blur(5px);
    border-bottom: 2px solid rgb(226, 226, 226);
}
.w_icon {
    height: 3vh;
    width:3vh;
}
.topbar_link {
    font-size: 2.5vh;
    padding-left: 0.5vw;
}
</style>