<script setup>
import Viewer from './viewer.vue';

document.title = "wangyupu | shapez 2 shape tool"
//
import { ref } from 'vue';

const shapeCode = ref('RbRbRbRb')
const currentModel = ref('0')
const viewerRef = ref(null)

function exportAsSTL(){
    viewerRef.value.exportAs("stl")
}
function exportAsglTF(){
    viewerRef.value.exportAs("gltf")
}
</script>

<template>
    <div class="container">
        <div class="containerBgMixerLayer1">
            <div class="containerBgMixerLayer0">
                <h1 class="pageTitleMaster"><span class="pageTitle">shapez 2 shape view / generator (WIP)</span></h1>
                <div class="content">
                    <div class="element shapeViewer">
                        <span>形状</span>
                        <Viewer ref="viewerRef"/>
                    </div>
                    <div class="element options">
                        <span>选项</span>
                        <div>
                            <span>形状代码</span>
                            <span>
                                形状代码如：<code>RuRuRuRu:SrSrSr--</code>，按<code>: 冒号</code>分割不同的层级，然后每两位字母为一个象限，两位字母中前一位代表形状，后一位代表颜色。
                                若是<code>--</code>，则代表这一象限上没有形状。层数从最低（第一层）开始，象限从右上（东北）开始，顺时针排列。
                                <br>
                                可用的形状：
                                <ul>
                                    <li><code>R</code> 方形</li>
                                    <li><code>C</code> 圆形</li>
                                    <li><code>W</code> 钻石</li>
                                    <li><code>S</code> 星星</li>
                                    <li><code>P</code> 顶针（颜色对其无效）</li>
                                    <li><code>c</code> 晶体（小写）</li>
                                    <li><code>-</code> 空（颜色也为<code>-</code>）</li>
                                </ul>
                                六分模式下的形状：
                                <ul>
                                    <li><code>H</code> 六边形</li>
                                    <li><code>G</code> 齿轮</li>
                                    <li><code>F</code> 花朵</li>
                                </ul>
                                可用的颜色：
                                <ul> 
                                    <li><code style="color: red;">r</code> 红色</li>
                                    <li><code style="color: greenyellow;">g</code> 绿色</li>
                                    <li><code style="color: blue;">b</code> 蓝色</li>
                                    <li><code style="color: yellow;">y</code> 黄色</li>
                                    <li><code style="color: purple;">p</code> 紫色</li>
                                    <li><code style="color: cyan;">c</code> 青色</li>
                                    <li><code style="color: grey;">u</code> 没有颜色</li>
                                    <li><code style="color: white;">w</code> 白色</li>
                                </ul>
                            </span>
                            <textarea v-model="shapeCode" ref="shapeCode.value" placeholder="形状代码"
                                class="shapeCodeInput"></textarea>
                            <div>
                                <span style="color: #00ff00">解析成功</span>
                                <span style="color: #ff0000">解析失败：第 undefined 个字符出错：undefined</span>
                            </div>
                        </div>
                        <div>
                            <span>导出模型</span>
                            <button @click="exportAsSTL">导出为 STL</button>
                            <button @click="exportAsglTF">导出为 glTF</button>
                        </div>
                        <div>
                            <span>显示选项</span>
                            <el-select v-model="currentModel" class="optionsOption">
                                <el-option value="0" label="官方模型"/>
                                <el-option value="1" label="简易模型"/>
                                <el-option value="2" label="community-vortex 模型"/>
                            </el-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    background: linear-gradient(to right, #2b376b, #22477f, #2b376b);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow-x: hidden;
}

.container span {
    color: white
}

.containerBgMixerLayer0 {
    width: 100%;
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' fill='none' stroke='%23ffffff13' stroke-width='1'/></svg>");
    background-repeat: repeat;
}

.containerBgMixerLayer1 {
    background: radial-gradient(at bottom, #a36646, #a366460a, transparent);
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: bottom;
}

.content {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-around;
    align-items: flex-start;
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

.options>div {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

.options>div::after {
    content: ' ';
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 10px;
    margin-bottom: 0px;
    height: 5px;
    border-radius: 3px;
    margin-left: 6px;
    margin-right: 6px;
}

.options>div:last-child::after {
    content: ' ';
    background-color: rgba(0, 0, 0, 0.3);
    height: 0;
}

.options>div>span:first-child {
    font-size: 120%;
    margin: 3px 0 3px 0;
}
</style>