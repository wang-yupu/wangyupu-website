<script setup>
import { ref, watch } from 'vue'
import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue';

// 常量
const operationBarHeight = 32

// 接受参数
const props = defineProps([
    // 相机相关
    "cameraFOV",
    "unlockCameraLimits"
])
// 文件逻辑
const FileLoaded = ref(true)

// three.js
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / (window.innerHeight - operationBarHeight), 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight - operationBarHeight)
scene.background = new THREE.Color(0x00ffff)

// OrbitControls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const orbitControls = new OrbitControls(camera, renderer.domElement)
camera.position.set(0, 0, 0)
camera.position.z = 0
orbitControls.update()
orbitControls.enablePan = false
orbitControls.maxDistance = 0.01
orbitControls.target.set(0, 0, 0)
orbitControls.saveState()


// 不变比例的窗口调整，来自three.js的示例：https://jsfiddle.net/Q4Jpu/

var tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2));
var windowHeight = window.innerHeight - operationBarHeight;
function onWindowResize(event) {
    camera.aspect = window.innerWidth / (window.innerHeight - operationBarHeight);

    camera.fov = (360 / Math.PI) * Math.atan(tanFOV * (window.innerHeight / (windowHeight - operationBarHeight)));

    camera.updateProjectionMatrix();
    camera.lookAt(scene.position);

    renderer.setSize(window.innerWidth, window.innerHeight - operationBarHeight);
    renderer.render(scene, camera);
}
// example
function newCube(size, position, rotate, color) {
    const geometry = new THREE.BoxGeometry(size[0], size[1], size[2])
    const material = new THREE.MeshBasicMaterial({ color: color })
    const cube = new THREE.Mesh(geometry, material)
    cube.rotation.set(rotate[0], rotate[1], rotate[2])
    cube.position.set(position[0], position[1], position[2])
    scene.add(cube)
}

// newCube([1, 1, 1], [1, 0, 0], [0, 0, 0], 0xff0000)
// newCube([1, 1, 1], [0, 1, 0], [0, 0, 0], 0x00ff00)
// newCube([1, 1, 1], [0, 0, 1], [0, 0, 0], 0x0000ff)

// 定义平面
function newPlaneWithTexture(size, position, rotate, textureURL) {
    const geometry = new THREE.PlaneGeometry(size[0], size[1])
    const texture = new THREE.TextureLoader().load(textureURL);
    const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: texture })
    const plane = new THREE.Mesh(geometry, material)
    plane.rotation.set(Math.cos(rotate[0] * Math.PI / 180), Math.sin(rotate[1] * Math.PI / 180), rotate[2]);
    plane.rotation.set(rotate[0], rotate[1], rotate[2])
    plane.position.set(position[0], position[1], position[2])
    scene.add(plane)
    planeList.push(plane)
    return plane
}

// 平面列表
let planeList = []
function modifyPlane(index, position, rotate) {
    if (position != null) {
        planeList[index].position.set(position[0], position[1], position[2])
    }
    if (rotate != null) {
        planeList[index].rotation.set(Math.cos(rotate[0] * Math.PI / 180), Math.sin(rotate[1] * Math.PI / 180), Math.sin(rotate[2] * Math.PI / 180));
    }
}
newPlaneWithTexture([1, 0.75], [0, -0.4, 1], [0, 0, 0], "/example2.jpg")
newPlaneWithTexture([1, 0.75], [0, 0, 1], [0, 0, 0], "/example.jpg")
newPlaneWithTexture([1, 0.75], [0, 0.4, 1], [0, 0, 0], "/example3.jpg")
console.log(planeList)
// Props watch
watch(props,()=>{
    camera.fov = props.cameraFOV
    tanFOV = Math.tan(((Math.PI / 180) * camera.fov / 2));
    onWindowResize()
    if (props.unlockCameraLimits){
        orbitControls.enablePan = true
        orbitControls.maxDistance = Infinity
        orbitControls.update()
    }
    else if (!props.unlockCameraLimits){
        orbitControls.enablePan = false
        orbitControls.maxDistance = 0.01
        orbitControls.update()
    }
})
// 循环
// 渲染循环
function animate() {
    requestAnimationFrame(animate)
    orbitControls.update()
    renderer.render(scene, camera)
}

animate()
// 处理Canvas加入dom的逻辑
const isRendering = ref(false)
function startRender() {
    console.log("%c开始渲染", "color:green;font-size:150%")
    isRendering.value = true
    document.getElementById("renderCanvas").appendChild(renderer.domElement)
}
setTimeout(startRender, 100);

// 操作
// 全屏
import fscreen from 'fscreen';
function toggleFullScreen() {
    onWindowResize()
    if (fscreen.fullscreenElement) {
        fscreen.exitFullscreen()
    } else {
        fscreen.requestFullscreen(document.getElementById("panoramaViewer"))
    }
}
// 重置相机
function resetCamera() {
    orbitControls.reset()
    camera.position.set(0, 0, 0)
    camera.position.z = 5
    camera.updateProjectionMatrix()
}
// 图片修改器
const imageModifyerDialog = ref(false)
function openImageModifyer() {
    imageModifyerDialog.value = true
}

const currentImageModifyerIndex = ref(0)
const currentIMPosX = ref(0)
const currentIMPosY = ref(0)
const currentIMPosZ = ref(0)
const currentIMRotX = ref(0)
const currentIMRotY = ref(0)
const currentIMRotZ = ref(0)

function syncModifyToInput() {
    // 同步到输入框
    if (!(currentImageModifyerIndex.value)) {
        return
    }
    if (!planeList[currentImageModifyerIndex.value]){
        return
    }
    let position = planeList[currentImageModifyerIndex.value].position
    let rotation = planeList[currentImageModifyerIndex.value].rotation

    currentIMPosX.value = position.x
    currentIMPosY.value = position.y
    currentIMPosZ.value = position.z
    currentIMRotX.value = rotation.x
    currentIMRotX.value = rotation.y
    currentIMRotX.value = rotation.z
}
watch(currentImageModifyerIndex, (value, oldValue) => {
    if (value != null) {
        syncModifyToInput()
    }
})
function syncToObject(){ // 输入框同步到plane
    if (!(currentImageModifyerIndex.value)) {
        return
    }
    if (!planeList[currentImageModifyerIndex.value]){
        return
    }
    planeList[currentImageModifyerIndex.value].position.x = currentIMPosX.value
    planeList[currentImageModifyerIndex.value].position.y = currentIMPosY.value
    planeList[currentImageModifyerIndex.value].position.z = currentIMPosZ.value
    planeList[currentImageModifyerIndex.value].rotation.x = currentIMRotX.value*Math.PI/180
    planeList[currentImageModifyerIndex.value].rotation.y = currentIMRotY.value*Math.PI/180
    planeList[currentImageModifyerIndex.value].rotation.z = currentIMRotZ.value*Math.PI/180
    console.log("同步完成",planeList[currentImageModifyerIndex.value],"index:",currentImageModifyerIndex.value)
    console.log(planeList)
} 
// 初始化
resetCamera()
</script>

<template>
    <div class="panoramaViewer" id="panoramaViewer">
        <div class="noFileWarning" v-if="!FileLoaded">
            <span>没有加载文件</span>
        </div>
        <div class="panoramaViewPort" v-else>
            <div v-if="!isRendering">
                <span>请等一下</span>
            </div>
            <div id="renderCanvas">

            </div>
        </div>
        <div class="operations">
            <span>当前FOV:{{ props.cameraFOV }}</span>
            <el-button class="operation" @click="resetCamera"><el-icon>
                    <Refresh />
                </el-icon>&nbsp;重置相机</el-button>
            <el-button class="operation" @click="toggleFullScreen"><el-icon>
                    <FullScreen />
                </el-icon>&nbsp;全屏</el-button>
            <el-button class="operation" @click="openImageModifyer"><el-icon>
                    <Setting />
                </el-icon>&nbsp;图片修改器</el-button>
        </div>
    </div>
    <el-dialog v-model="imageModifyerDialog" title="图片修改器" width="500" draggable :modal="false" append-to-body
        :lock-scroll="false" overflow>
        <div>
            <el-input placeholder="索引" v-model="currentImageModifyerIndex"></el-input>
            <div>
                <el-input size="small" placeholder="Pos X" v-model="currentIMPosX"></el-input>
                <el-input size="small" placeholder="Pos Y" v-model="currentIMPosY"></el-input>
                <el-input size="small" placeholder="Pos Z" v-model="currentIMPosZ"></el-input>
            </div>
            <div>
                <el-input size="small" placeholder="Rot X" v-model="currentIMRotX"></el-input>
                <el-input size="small" placeholder="Rot Y" v-model="currentIMRotY"></el-input>
                <el-input size="small" placeholder="Rot Z" v-model="currentIMRotZ"></el-input>
            </div>
            <el-button type="success" @click="syncToObject">同步到对象</el-button>
        </div>
    </el-dialog>
</template>

<style scoped>
.panoramaViewer {
    width: 100%;
    height: 100%;
}

.noFileWarning {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 300%;
    color: #ffffff;
    padding-top: 50%;
    padding-bottom: 50%;
}

.operations {
    background-color: #ffffff;
    height: 32px;
    text-align: end;
    bottom: 0;
}

.dark .operations {
    background-color: #616161;
}

.operation {
    margin-left: 1vw;
}
</style>