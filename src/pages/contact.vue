<script setup>
import {ref} from 'vue'
import { ElMessage } from 'element-plus'
import flex_container from './../components/wflexbox/flex_container.vue'
import flex_item from './../components/wflexbox/flex_item.vue'

document.title = "wangyupu | 联系我"

const unlock = ref(false)

if (localStorage['contactVisible']){
        unlock.value = true
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const int1 = ref(random(1,9))
const int2 = ref(random(1,9))
const int3 = ref(0)
const answer = ref(0)

function confirm() {
    if (int3.value == "" || answer.value == "") {
        ElMessage({
            message: '答案或第三个因素不能为0',
            type: 'warning',
            grouping:true
        })
        }
    else if (int1.value * int2.value * int3.value == answer.value) {
        ElMessage({
            message: '答案正确',
            type: 'success',
            grouping:true})
        unlock.value = true
        localStorage['contactVisible'] = true
        }
        
    
    else {
        int1.value = random(1,9)
        int2.value = random(1,9)
        int3.value = 0
        answer.value = 0
        ElMessage({
            message: '错误的答案',
            type: 'error',
            grouping:true})
        }
    }

</script>

<template>
<div>
    <div class="statement">
        <h1 class="statement_title">郑重声明</h1>
        <h2>本人没有微博、KOOK账号。</h2>
    </div>
    <div class="content">
    <div class="lock" v-if="!unlock">
        <h1>你会背九九乘法表吧！</h1>
        <el-input-number v-model="int1" readonly class="lock_input" size="large"></el-input-number><br>
        <span>乘</span><br>
        <el-input-number v-model="int2" readonly class="lock_input" size="large"></el-input-number><br>
        <span>乘</span><br>
        <el-input-number v-model="int3" class="lock_input" size="large" placeholder="第三个因数"></el-input-number><br>
        <span>等于</span><br>
        <el-input-number v-model="answer" class="lock_input" size="large" placeholder="答案"></el-input-number><br>
        <el-button class="confirm_button" size="large" type="success" @click="confirm">确认</el-button>
    </div>
    <div class="contact_info" v-if="unlock">
        <h1 class="contact_info_title">联系方式</h1>
        <div>
            <flex_container class="contact_info_container">
                <flex_item>
                    <span>电子邮件地址: </span><span>me@wytl.cc</span>
                </flex_item>
                <flex_item>
                    <img src="https://www.bilibili.com/favicon.ico">
                    <a href="https://bilibili.com" class="nocolor_link">bilibili</a>
                    <span>:</span>
                    <a href="https://space.bilibili.com/562339936" class="nocolor_link">waangyupu</a>
                </flex_item>
                <flex_item>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#737DEE" width="30" height="30" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/></svg>
                    <a href="https://discord.com" class="nocolor_link">Discord</a>
                    <span>:</span>
                    <span>wangyupu</span>
                </flex_item>
            </flex_container>
        </div>
    </div>
</div>
</div>
</template>

<style scoped>
.statement {
    background-color: red;
    text-align: center;
}
.statement_title {
    color: white;
    font-size: 200%;
}
.lock {
    text-align: center;
}
.lock_input {
    width: 15%;
}
.confirm_button {
    margin-top:1%;
}
.contact_info_title {
    text-align: center;
}
.contact_info_container {
    font-size: 120%;
    align-items: center;
    margin-bottom: 3%;
}
.content {
    height:70vh;
    align-items: center;
}
</style>