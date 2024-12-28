<script setup>
import { ref, onMounted, defineExpose } from 'vue';

const disabled = ref(true)
const editMode = ref(false)
function toggleEditMode() {
    editMode.value = !editMode.value
}

const currentView = ref('default') // default / layer / quadrant
function viewToDefault() {
    currentView.value = 'default'
}
function viewToLayer() {
    currentView.value = 'layer'
}
function viewToQuadrant() {
    currentView.value = 'quadrant'
}

// 3D Rendering
// chech webgl first
const webglsupport = ref(true)
import WebGL from 'three/addons/capabilities/WebGL.js';
if (!WebGL.isWebGL2Available()) {
    webglsupport.value = false
    disabled.value = true
}

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { removeAllModels, loadModels, export3DModel, timestampToReadable } from './view3DUtils.js'
disabled.value = false
const scene = new THREE.Scene();
// 相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
let controls = undefined

// 渲染器
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(300, 300);
onMounted(() => {
    var rendererMasterElement = document.getElementById('viewerCanvasMaster')
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(rendererMasterElement.clientWidth, rendererMasterElement.clientHeight)
    rendererMasterElement.appendChild(renderer.domElement);
    renderCall();
    window.addEventListener('resize', () => { onResize(rendererMasterElement) })
    onResize(rendererMasterElement)
    // 控制器
    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 0.5
    controls.maxDistance = 10

})

// 加载模型
onMounted(async () => {
    const preloadedModels = await loadModels()
    const currentModels = preloadedModels['M2']
    const model = currentModels.Plate.scene
    model.traverse((child) => {
        if (child.isMesh) {
            // 为每个网格设置颜色
            child.material.color.set(0xFFFFFF);  // 红色
        }
    });
    model.receiveShadow = true

    currentModels.R.scene.traverse((child) => {
        if (child.isMesh) {
            // 为每个网格设置颜色
            child.material.color.set(0x00FFFF);  // 红色
        }
    });
    currentModels.R.scene.receiveShadow = true


    scene.add(model)
    scene.add(currentModels.C.scene)
    scene.add(currentModels.S.scene)
    scene.add(currentModels.R.scene)
    scene.add(currentModels.W.scene)
    currentModels.R.scene.rotation.y = THREE.MathUtils.degToRad(90)
    currentModels.S.scene.rotation.y = THREE.MathUtils.degToRad(180)
    currentModels.W.scene.rotation.y = THREE.MathUtils.degToRad(270)
    currentModels.C.scene.position.y = 0.025
    currentModels.S.scene.position.y = 0.025
    currentModels.R.scene.position.y = 0.025
    currentModels.W.scene.position.y = 0.025

    const pointLight = new THREE.PointLight(0xffffff, 10, 300,0);
    pointLight.position.set(0,3, 0);
    scene.add(pointLight);
})

function onResize(rendererMasterElement) {
    renderer.setSize(0, 0)
    renderer.setSize(rendererMasterElement.clientWidth, rendererMasterElement.clientHeight)
    camera.aspect = rendererMasterElement.clientWidth / rendererMasterElement.clientHeight;
    camera.updateProjectionMatrix();
}

function renderCall() {
    requestAnimationFrame(renderCall);
    renderer.render(scene, camera);
}

function resetCamera() {
    if (controls) {
        controls.reset()
    }
}

function exportAs(fmt) {
    console.log("尝试导出")
    export3DModel(scene, fmt, `shapeModelExport_${timestampToReadable(Date.now()/1000)}`)
}

defineExpose({
    exportAs
})
</script>

<template>
    <div>
        <div class="viewerContainer">
            <div class="viewerContainerMask" v-if="disabled || !webglsupport">
                <h1 class="loading" v-if="webglsupport">正在加载模型</h1>
            </div>
            <h1 class="warning" v-if="!webglsupport">您的浏览器不支持 WebGL!</h1>
            <div id="viewerCanvasMaster" class="viewerCanvasMaster" />
            <div class="viewOptions" id="viewerOptions">
                <button @click="viewToDefault" :class="{ selectedButton: currentView == 'default' }">默认视图</button>
                <button @click="viewToLayer" :class="{ selectedButton: currentView == 'layer' }">层级视图</button>
                <button @click="viewToQuadrant" :class="{ selectedButton: currentView == 'quadrant' }">象限视图</button>
                <div class="divider" />
                <button @click="resetCamera">视角归位</button>
                <button @click="toggleEditMode" :class="{ editModeEnabledButton: editMode }"
                    class="editModeButton">编辑模式</button>
                <a href="steam://rungameid/2162800" class="nocolor_link statText">启动游戏</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.viewerContainer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
}

.viewerContainerMask {
    width: 100%;
    height: 100%;
    min-width: 50px;
    min-height: 50px;
    background-color: transparent;
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}

.editModeEnabledButton {
    background-color: rgba(0, 211, 0, 0.3) !important;
}

.selectedButton {
    background-color: rgba(0, 0, 0, 0.1) !important;
}

.warning {
    color: red;
}

.loading {
    color: white;
    backdrop-filter: blur(15px) saturate(50%);
    padding: 20px;
    border-radius: 12px;
    border: 1px grey solid;
    background-color: rgba(128, 128, 128, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.loading>span {
    font-size: 75%;
    color: #00ff00;
}

.viewOptions button {
    backdrop-filter: blur(3px);
    background-color: transparent;
    color: white;
    margin-bottom: 3px;
    transition: all linear 75ms;
    text-overflow: ellipsis;
}

.viewOptions button:focus,
.viewOptions button:focus-visible {
    outline: none;
}

.viewOptions button:hover {
    border: 1px gray solid;
}


.viewOptions {
    display: flex;
    flex-direction: column;
}

.divider {
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 3px;
    margin-bottom: 6px;
    height: 5px;
    border-radius: 3px;
    margin-left: 6px;
    margin-right: 6px;
}

.viewerCanvasMaster {
    padding: 3px;
    min-width: 300px;
    min-height: 300px;
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px transparent solid;
    border-radius: 15px;
    transition: border linear 120ms;
    margin-left: 6px;
}

.viewerCanvasMaster:hover {
    border: 3px rgba(255, 255, 255, 0.1) solid;
    cursor: crosshair;
}

.viewerCanvasMaster canvas {
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px !important;
    border: 3px transparent solid !important;
    margin: 3px;
}

.statText {
    width: 100%;
    backdrop-filter: blur(3px);
    background-color: transparent;
    border-radius: 5px;
    padding: 2px 0 2px 0;
    text-align: center;
}
</style>