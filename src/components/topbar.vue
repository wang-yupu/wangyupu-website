<script setup>
import { ref,watch } from 'vue'
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

import { Sunny,Moon } from '@element-plus/icons-vue'
import IsDarkMode from './../dark_mode.js'

const DMSwitch = ref(IsDarkMode)

watch( DMSwitch, (newVal, oldVal) => {
    IsDarkMode.value = newVal;
})

import isPageLoading from '../store.js';
const PGBMarginLeft = ref(-6)
const PGBWidth = ref(5)

const totalPGBMoved = ref(0)
const PGBFacing = ref("right") // left,right,progress
const LoadingIconRotateValue = ref(0)
const LoadingIconRotate = ref({transform: "rotate(0deg)"})

function resetPGB(withResetMoved=true){
    PGBMarginLeft.value = -6
    if (withResetMoved){
        totalPGBMoved.value = 0
        PGBFacing.value = "right"
        clearInterval(currentPGBUpdate.value)
        currentPGBUpdate.value = 0
        LoadingIconRotate.value = 0
    }
    PGBWidth.value = 5
}

function updatePGB(){
    if ((totalPGBMoved % 10) == 0){
    LoadingIconRotateValue.value = LoadingIconRotateValue.value+1
    LoadingIconRotate.value = {transform: `rotate(${LoadingIconRotateValue.value}deg)`}
    if (LoadingIconRotateValue > 360){
        LoadingIconRotateValue.value = 0
    }}
    // 循环的不确定加载进度
    if (PGBFacing.value == "progress") { // 进度模式
        PGBMarginLeft.value = 0
        if (PGBWidth.value <= 95) {
            PGBWidth.value = PGBWidth.value+Math.random().toFixed(2)/3
        } 

        // 检查加载状态
        if (!isPageLoading.value){ //显示最后一段过渡动画
            if (PGBWidth.value >= 100){
                resetPGB()
            }
            else{
                if (PGBWidth.value < 95){
                    PGBWidth.value = PGBWidth.value+3
                } else {
                    PGBWidth.value = PGBWidth.value+0.3
                }
                
            }
        }
    }

    if (PGBFacing.value == "right"){ //方向检测
        PGBMarginLeft.value = PGBMarginLeft.value+1
    }
    if (PGBFacing.value == "left"){
        PGBMarginLeft.value = PGBMarginLeft.value-1
    }
    
    // 反转方向
    if (PGBFacing != "progress" && (PGBMarginLeft.value == 100-PGBWidth.value || PGBMarginLeft.value == -6)){
        if (PGBFacing.value == "right"){
            PGBFacing.value = "left"
        }
        else{
            PGBFacing.value = "right"
        }
    }

    totalPGBMoved.value++
    if (totalPGBMoved.value==210){ //回头，开始显示加载的程度。
        resetPGB(false) // 重置
        // console.log("开始显示假加载程度")
        PGBFacing.value = "progress"
}}

let currentPGBUpdate = ref(0)
watch(isPageLoading, (newVal, oldVal) => {
    if (newVal){
        currentPGBUpdate.value = setInterval(updatePGB, 15)
        // console.log("开始更新加载进度条")
    }
    else{
        // console.log("完成加载")
        if (PGBFacing.value != "progress"){
            resetPGB()
        }
    }
})
const CompleteLoading = () => {
    isPageLoading.value = false}
</script>

<template>
<div class="topbarBGProgressBar" :style="{height:0.03*vp_height+'px',fontSize:0.025*vp_height+'px',marginLeft:PGBMarginLeft+'vw',width:PGBWidth+'vw'}"></div>
<div class="topbar" :style="{height:0.03*vp_height+'px',fontSize:0.025*vp_height+'px'}">
    <div class="topbar_left">
        <router-link to="/" class="w_icon"><img src="/src/assets/icon.png" alt="WANGYUPU ICON" :height="vp_height*0.03" :style="{height:0.03*vp_height+'px'}"></img></router-link>
        <a href="https://github.com/wang-yupu" class="nocolor_link topbar_link">Github</a>
        <router-link to="/tools/" class="nocolor_link topbar_link">工具</router-link>
    </div>
    <div class="topbar_right">
        <el-switch
            class="DMSwitch"
            v-model="DMSwitch"
            :inactive-action-icon="Sunny"
            :active-action-icon="Moon"
        />
        <div class="LoadingIcon" v-if="isPageLoading">
            <span>加载中</span>
            <!-- <el-button @click="CompleteLoading">完成加载</el-button> -->
        </div>
    </div>
</div>
</template>

<style scoped>
.topbarBGProgressBar {
    position: absolute;
    backdrop-filter: saturate(100%) blur(5px);
    background: #ab6bff80;
    overflow: hidden;
    max-width: 100vw;
}
.dark .topbarBGProgressBar {
    background: #a25bff80;
}
.topbar{
    backdrop-filter: saturate(100%) blur(5px);
    border-bottom: 2px solid rgb(226, 226, 226);
    display: flex;
    justify-content: space-between;
    background: none;
    overflow: hidden;
    z-index: 300;
}
.w_icon {
    padding-top:3px;
    filter:brightness(2);
    -webkit-filter: brightness(2);
}
.topbar_link {
    padding-left: 0.75vw;
}
.topbar_left {
    justify-content: flex-start;
    display:flex;
    align-items: center;
}
.topbar_right {
    display:flex;
    justify-content: flex-end;
    align-items: center;
}
.DMSwitch {
    --el-switch-on-color: #737272;
}
.LoadingIcon {
    color:greenyellow;
}
</style>