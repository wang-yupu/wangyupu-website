<script setup>
import { ref, watch } from 'vue'
import words from './words.json'

const name = ref("")
const showModalAlert = ref(false)

function choiceitem(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function randomName() {
    var method = choiceitem([1, 2, 3, 4, 5, 6, 7]);
    if (method == 1) {
        return choiceitem(words.db["1"]) + choiceitem(words.db["2"]) + choiceitem(words.db["0"]);
    }
    if (method == 2) {
        return choiceitem(words.db["1"]) + choiceitem(words.db["3"]) + choiceitem(words.db["0"]);
    }
    if (method == 3) {
        return choiceitem(words.db["1"]) + choiceitem(words.db["3"]) + choiceitem(words.db["1"]);
    }
    if (method == 4) {
        return choiceitem(words.db["1"]) + choiceitem(words.db["5"]) + choiceitem(words.db["1"]);
    }
    if (method == 5) {
        return choiceitem(words.db["1"]) + choiceitem(words.db["0"]) + choiceitem(words.db["3"]);
    }
    if (method == 6) {
        return choiceitem(words.db["1"]) + choiceitem(words.db["0"]) + choiceitem(words.db["2"]);
    }
    if (method == 7) {
        return choiceitem(words.db["2"]) + "的" + choiceitem(words.db["1"]) + choiceitem(words.db["4"]);
    }
    return "生成错误";
}

function randomNameClick() {
    name.value = randomName()
}

const windowHeight = ref(100)
const windowWidth = ref(100)
const windowWidthLimit = ref(100)
function updateWH() {
    windowHeight.value = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    windowWidth.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowWidthLimit.value = windowWidth.value
    if (windowWidth.value > 800) {
        windowWidthLimit.value = 800
    }
}
window.addEventListener('resize', updateWH);

updateWH()

const showAlert = ref(false)
const showSensitiveAlert = ref(false)
const showShortAlert = ref(false)
watch(name, (newVal) => {
    if (name.value.length == 0) {
        showAlert.value = true
        showShortAlert.value = true
    } else {
        showAlert.value = false
        showShortAlert.value = false
    }
})

randomNameClick()
</script>

<template>
    <div class="nng">
        <div class="content">
            <div class="toastContainer">
                <img src="/src/assets/nng/toast.png" class="toast" :width="windowWidthLimit * 0.6">
            </div>
            <div class="signContainer">
                <img src="/src/assets/nng/sign_with_panda.png" :height="windowHeight * 0.6" class="sign" />
                <button class="randomButton" @click="randomNameClick">&nbsp;&nbsp;<br>&nbsp;</button>
                <input class="nameInput" maxlength="12" v-model="name" placeholder="遵纪守法文明用语">
                <div class="alertContainer" v-if="showAlert">
                    <img class="alert" :width="windowWidthLimit * 0.1" src="/src/assets/nng/alert.png">
                    <span class="alertText" v-if="showSensitiveAlert">包含敏感词</span>
                    <span class="alertTextShort" v-if="showShortAlert">昵称太短</span>
                </div>
                <Transition name="modalAlert">
                    <div class="modalAlertContainer" v-if="showModalAlert">
                        <img class="alertBG" src="/src/assets/nng/sensitiveAlertBG.png"
                            :width="windowWidthLimit * 0.55">
                        <span>含有敏感词</span>
                    </div>
                </Transition>
            </div>
            <div class="footer">
                <span>打开音乐体验更佳</span><br>
                <iframe class="mp" :width="windowWidth * 0.9" height=50
                    src="//music.163.com/outchain/player?type=2&id=4010201&height=32"></iframe>
                <div class="infomations">
                    <div>
                        <img src="/src/assets/nng/info.png" height="50">
                        <div>
                            <span>词库从网易MC(安卓)中提取</span>
                            <!-- <span>违禁词检测使用了<a href="https://github.com/hotoo/pinyin" class="nocolor_link">hotoo/pinyin</a></span>
                        <span>违禁词库版本 Example v0["1"]</span> -->
                            <span>违禁词检测正在实现</span>
                        </div>
                    </div>
                    <div>
                        <img src="/src/assets/nng/feedback.png" height="50">
                        <div>
                            <span>有问题/建议？</span>
                            <span>在<router-link to="/contact" class="nocolor_link index_link">此处</router-link>联系我</span>
                            <span></span>
                        </div>
                    </div>
                    <div class="useAPI">
                        <img src="/src/assets/nng/cloud.png" height="50">
                        <div>
                            <span>调用API</span>
                            <span>点<a class="nocolor_link" href="https://wapi.wangyupu.com/api/nng">这里</a>查看</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nng {
    /* font-family: Unifont,system-ui, Avenir, Helvetica, Arial, sans-serif; */
    text-align: center;
    background-image: url("/src/assets/nng/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    image-rendering: pixelated;
}

.content {
    min-height: 100vh;
    width: 100vw;
    backdrop-filter: blur(15px);
}

.toast {
    margin-top: 15vh;
}

.toastContainer {
    position: relative;
}

.toastContainer::before {
    position: absolute;
    top: 17vh;
    content: "探索你的世界前，给自己起个名字吧";
    color: white;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1vw;
}

.toastContainer::after {
    position: absolute;
    top: 21vh;
    content: "稍后也可以在【设置】中更改名称";
    color: white;
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: gray;
    font-size: 0.75vw;
}

@media (max-width: 768px) {
    .toastContainer::before {
        top: 16vh;
        font-size: 3vw;
    }

    .toastContainer::after {
        font-size: 2vw;
        top: 18vh
    }

    .useAPI {
        display: none;
    }
}

@media (max-width: 1536px) {
    .toastContainer::before {
        font-size: 1.5vw;
    }

    .toastContainer::after {
        font-size: 1vw;
    }
}

.sign {
    margin-top: 1vh;
}

.signContainer {
    position: relative;
}

.randomButton {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-46%, -40%);
    opacity: 0;
}

.nameInput {
    position: absolute;
    left: 0;
    top: 42%;
    transform: translateY(-40%);
    background-color: transparent;
    border: none;
    width: 100%;
    font-size: 150%;
    text-align: center;
    color: white;
}

.alert {
    position: absolute;
    left: 53%;
    top: 44.75%;
    transform: translateY(-40%);
}

.alertText {
    position: absolute;
    left: 55.6%;
    top: 48%;
    transform: translateY(-35%);
    color: white;
    font-size: 75%;
}

.alertTextShort {
    position: absolute;
    left: 53.6%;
    top: 48%;
    transform: translateY(-35%);
    color: white;
    font-size: 75%;
}

.modalAlertContainer {
    position: absolute;
    left: 35.75%;
    top: 55%;
    background-color: rgba(104, 61, 31, 0.9);
}

.modalAlertContainer>span {
    position: absolute;
    left: 43%;
    top: 31%;
    color: white;
}

.footer {
    margin-top: 1vh;
}

.infomations {
    margin-top: 2vh;
    padding-bottom: 2vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.infomations>div {
    margin-left: 2vw;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.infomations>div>div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3px;
}

.infomations div:first-child {
    margin-left: 0;
}

.modalAlert-enter-active,
.modalAlert-leave-active {
    transition: opacity 0.1s ease;
}

.modalAlert-enter-from,
.modalAlert-leave-to {
    opacity: 0;
}
</style>