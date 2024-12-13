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
                    <span>暂无</span>
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
    width: 50vw
}
@media screen and (min-width: 640px){
    .lock_input {
        width: 25vw
    }
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