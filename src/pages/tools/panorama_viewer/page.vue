<script setup>
import { ref } from 'vue'
import { UploadFilled } from '@element-plus/icons-vue'

// WebGL检测
import WebGL from 'three/addons/capabilities/WebGL.js';
const isSupportWebGL = ref(WebGL.isWebGLAvailable())

// 文件处理
import profiles from './profiles.js'
import viewer from './viewer.vue';

const isFileUploaded = ref(false)
const currentFileName = ref("???")
function removeUploadedFile() {
    isFileUploaded.value = false
}
function handleFileUpload(file) {
    console.log(file);
    isFileUploaded.value = true
    currentFileName.value = file.file.name
}

// 处理全景图显示参数
const currentProfile = ref(profiles[0])

const cameraFOV = ref(45)
const unlockCameraLimits = ref(false)
</script>

<template>
    <div class="page" v-if="isSupportWebGL">
        <div class="topbar">
            <span class="title"><strong>在线全景图查看器</strong></span>
        </div>
        <div class="operations">
            <div class="operation fileUpload">
                <div v-if="isFileUploaded" class="uploadedFileInfo">
                    <span>已使用文件：</span>
                    <span>{{ currentFileName }}</span>
                    <el-button @click="removeUploadedFile" type="danger" plain>移除</el-button>
                </div>
                <div v-else>
                    <el-upload :http-request="handleFileUpload" accept=".zip" :show-file-list="false"
                        :auto-upload="true" drag>
                        <template #default>
                            <el-icon size="200%"><upload-filled /></el-icon>
                            <br>
                            <span>拖拽文件到此处或者点此查看文件</span>
                        </template>
                        <template #tip>
                            <span>按照<span class="nocolor_link">这个方法</span>将每张图片打包上传</span>
                        </template>
                    </el-upload>
                </div>
            </div>
            <div class="operation profileChoose">
                <div class="profileChooseTitle">
                    <span>选择预设</span>
                </div>
                <div class="profileChooseContent">
                    <el-select v-model="currentProfile" placeholder="选择一个预设..." size="large">
                        <el-option v-for="item in profiles" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
            </div>
            <div class="operation renderOptions">
                <div class="cameraOptions">
                    <span>相机FOV</span><el-slider v-model="cameraFOV" :min="1" :max="140" :step="0.1" show-input/>
                    <span>解锁相机平移、放大</span><br><el-switch v-model="unlockCameraLimits"></el-switch>
                </div>
            </div>
        </div>
        <div class="content">
            <viewer :cameraFOV="cameraFOV"
            :unlockCameraLimits="unlockCameraLimits"
            ></viewer>
        </div>
    </div>
    <div v-else class="noWebGLWarningContainer">
        <span class="noWebGLWarning">虽然但是，<strong class="noWebGLWarningStrong">您的浏览器不支持WebGL</strong>。</span>
        <span>&nbsp; &nbsp; &nbsp; &nbsp;WebGL是一种基于OpenGL的JavaScript
            API，用于在浏览器中渲染二维和三维图形。本工具需要支持WebGL的浏览器来渲染您的全景图。</span>
        <strong>请使用支持WebGL的浏览器来使用此工具。</strong>
    </div>
</template>

<style scoped>
.noWebGLWarningContainer {
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 5%;
}

.noWebGLWarning {
    font-size: 200%;
}

.noWebGLWarningStrong {
    color: red;
}

.page {
    position: static;
}

.topbar {
    background-color: rgb(5, 196, 196);
    padding: 1%;
    margin-bottom: 0.5%;
}

.dark .topbar {
    background-color: rgb(0, 125, 125);
}

.title {
    font-size: 200%;
}

.operations {
    height: auto;
    margin-bottom: 0.5%;
    background-color: rgb(152, 255, 221);
    overflow: hidden;
    display: flex;
    flex-direction: row;
}

.dark .operations {
    background-color: rgb(0, 211, 141);
}

.operation {
    padding-right: 5px;
    padding-left: 5px;
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 100%;
}

.nocolor_link {
    color: black;
}

.nocolor_link:hover {
    color: black;
}

.dark .nocolor_link {
    color: white;
}

.content {
    background-color: #b2b1b1;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative
}

.fileUpload {
    width: 20%;
}

.profileChoose {
    font-size: 150%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width:max-content;
}

.uploadedFileInfo {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.profileChooseTitle {
    align-items: start;
}

.profileChooseContent {
    align-items: end;
    margin-bottom: 100%;
}
.renderOptions {
    width: 100%;
}
.cameraOptions {
    max-width: 20%;
}
</style>