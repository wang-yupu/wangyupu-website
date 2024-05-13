<script setup>
import {ref} from 'vue'
function update_height(){
    var changeto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (changeto < 600){
        vp_height.value = 600;
    }
    else if(changeto > 2152){
        vp_height.value = 2152;
    }
    else{
        vp_height.value = changeto;
    }
}
window.addEventListener('resize', update_height);

const vp_height = ref(0);
update_height();

</script>

<template>
<div class="topbar" :style="{height:0.03*vp_height+'px',fontSize:0.025*vp_height+'px'}">
    <router-link to="/" class="w_icon"><img src="/src/assets/icon.png" alt="WANGYUPU ICON" :height="vp_height*0.03" :style="{height:0.03*vp_height+'px'}"></img></router-link>
    <a href="https://github.com/wang-yupu" class="nocolor_link topbar_link">Github</a>
    <router-link to="/tools/" class="nocolor_link topbar_link">工具</router-link>
</div>
</template>

<style scoped>
.topbar{
    backdrop-filter: saturate(30%) blur(5px);
    border-bottom: 2px solid rgb(226, 226, 226);
    display: flex;
    align-items: center;
}
.w_icon {
    padding-top:3px;
    filter:brightness(2);
    -webkit-filter: brightness(2);
}
.topbar_link {
    padding-left: 0.75vw;
}
</style>