<script setup>
import Viewer from './viewer.vue';

document.title = 'wangyupu | shapez 2 shape tool';
//
import { onMounted, ref, watch } from 'vue';

const shapeCode = ref('CwRwCwCw:P-P-P-P-:CcCcCcCc');
const currentModel = ref('0');
const viewerRef = ref(null);
const splitByLB = ref(true);
const parseSuccess = ref(false);
const errorMessage = ref(undefined);

function exportAsSTL() {
    viewerRef.value.exportAs('stl', shapeCode.value);
}
function exportAsglTF() {
    viewerRef.value.exportAs('gltf', shapeCode.value);
}

function exportAsImage() {
    viewerRef.value.exportAs('image', shapeCode.value);
}

import { parseCode } from './codeParse';
import PageShapecodeHelp from './subComponents/pageShapecodeHelp.vue';
import PageExamples from './subComponents/pageExamples.vue';

function setShape(code) {
    shapeCode.value = code;
}

const shapeCodeWatchCB = (val, f=true) => {
    let result = parseCode(val, splitByLB.value);
    if (!result.success) {
        parseSuccess.value = false;
        errorMessage.value = result.message;
    } else {
        parseSuccess.value = true;
        if (viewerRef.value) {
            viewerRef.value.updateScene(result.obj,true,2,true);
        }
    }
    if (f){
        shapeCodeWatchCB(shapeCode.value, false)
    }
};
watch(shapeCode, shapeCodeWatchCB);
onMounted(() => {
    shapeCodeWatchCB(shapeCode.value)
});
</script>

<template>
    <div class="container">
        <div class="containerBgMixerLayer1">
            <div class="containerBgMixerLayer0">
                <h1 class="pageTitleMaster">
                    <span class="pageTitle">shapez 2 shape view / generator (WIP)</span>
                </h1>
                <div class="content">
                    <div class="element shapeViewer">
                        <span>形状</span>
                        <Viewer ref="viewerRef" v-model="shapeCode"/>
                    </div>
                    <div class="element options">
                        <span>选项</span>
                        <div>
                            <span>形状代码</span>
                            <PageShapecodeHelp />
                            <textarea v-model="shapeCode" ref="shapeCode.value" placeholder="形状代码" class="shapeCodeInput"></textarea>
                            <span
                                @click="
                                    splitByLB = !splitByLB;
                                    shapeCodeWatchCB(shapeCode);
                                "
                                style="cursor: pointer; user-select: none"
                            >
                                {{ splitByLB ? '提示：输入的换行符会被当做 ":"解析，点击以切换' : '提示：换行符将被忽略' }}
                            </span>
                            <div>
                                <span style="color: #00ff00" v-if="parseSuccess">解析成功</span>
                                <span style="color: var(--el-color-danger)" v-else>解析失败：{{ errorMessage }}</span>
                            </div>
                        </div>
                        <div>
                            <span>例子</span>
                            <PageExamples
                                @viewCode="
                                    (val) => {
                                        shapeCode = val;
                                    }
                                "
                            />
                        </div>
                        <div>
                            <span>显示选项</span>
                            <!-- <el-select v-model="currentModel" class="optionsOption">
                                <el-option value="0" label="官方模型" />
                                <el-option value="1" label="简易模型" />
                                <el-option value="2" label="community-vortex 模型" />
                            </el-select> -->
                        </div>
                        <div>
                            <span>导出图片</span>
                            <button @click="exportAsImage">导出目前你所看见的图片</button>
                        </div>
                        <div>
                            <span>导出模型</span>
                            <button @click="exportAsSTL">导出为 STL</button>
                            <button @click="exportAsglTF">导出为 glTF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
    background: linear-gradient(to right, #2b376b, #22477f, #2b376b);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow-x: hidden;
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.container span {
    color: white;
}

.containerBgMixerLayer0 {
    width: 100%;
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' fill='none' stroke='%23ffffff13' stroke-width='1'/></svg>");
    background-repeat: repeat;
}

.containerBgMixerLayer1 {
    background: radial-gradient(circle at bottom, #a36646, #a366460a, transparent);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
}

.content {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-around;
    align-items: flex-start;
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

@media screen and (max-width: 1000px) {
    .content {
        flex-wrap: wrap;
    }

    .options {
        margin-left: 10px !important;
    }

    .shapeViewer {
        margin-right: 10px;
    }

    .element {
        flex: 0;
    }
}

.pageTitleMaster {
    display: flex;
    justify-content: center;
    margin-top: 0;
    padding-top: 20px;
}

.pageTitle {
    color: white;
    backdrop-filter: blur(3px);
    padding: 5px;
    font-size: 150%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 10px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.3);
}

.element {
    background-color: rgba(255, 255, 255, 0.075);
    border-radius: 13px;
    padding: 10px;
    margin: 10px;
    backdrop-filter: blur(3px);
    box-sizing: border-box;
    flex: 1;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.3);
}

.shapeCodeInput {
    border: 1px #967800 solid !important;
}

.shapeCodeInput:focus,
.shapeCodeInput:focus-visible,
.shapeCodeInput:hover {
    border: 1px #fecc01 solid !important;
}

.options {
    margin-left: 0;
    display: flex;
    flex-direction: column;
}

.colorList > li > code {
    color: white;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 3px;
    margin-bottom: 2px;
    padding-bottom: 2px;
    width: 20px;
    display: inline-block;
}

.colorList > li > code > span {
    mix-blend-mode: difference;
    text-align: center;
    width: 100%;
    display: inline-block;
}

.options button,
.options textarea,
.options input,
.optionsOption {
    backdrop-filter: blur(3px);
    background-color: transparent;
    color: white;
    margin-bottom: 3px;
    transition: border linear 125ms;
    text-overflow: ellipsis;
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    max-height: 1440px;
}

.options code,
.container {
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.options ul {
    margin-top: 0;
    margin-bottom: 2px;
}

.options textarea,
.options input {
    background: transparent;
    border-radius: 6px;
    padding: 5px;
    backdrop-filter: blur(3px);
    color: white;
    font-size: 125%;
    resize: vertical;
    min-height: 2.4em;
    border: 1px transparent solid;
}

.options textarea {
    overflow-y: visible;
}

.container *::selection,
.options *::selection,
.options textarea::selection,
.options input::selection {
    background-color: #fecc01;
}

.options button:focus,
.options input:focus,
.options textarea:focus,
.options button:focus-visible,
.options input:focus-visible,
.options textarea:focus-visible {
    outline: none;
}

.options button:hover,
.options input:hover,
.options textarea:hover {
    border: 1px gray solid;
}

.options button:active {
    border: 1px #fecc01 solid;
    background-color: #fecb014e;
}

.options > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

.options > div::after {
    content: ' ';
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 0px;
    height: 5px;
    border-radius: 3px;
    margin-left: 6px;
    margin-right: 6px;
}

.options > div:last-child::after {
    content: ' ';
    background-color: rgba(0, 0, 0, 0.3);
    height: 0;
}

.options > div > span:first-child {
    font-size: 120%;
    margin: 3px 0 3px 0;
}
</style>
