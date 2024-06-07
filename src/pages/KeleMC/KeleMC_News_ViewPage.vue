<script setup>
import { ref,watch } from 'vue'
import { useRoute } from 'vue-router'

const currentNewsTitle = ref('')
const route = useRoute()

currentNewsTitle.value = route.params.title

// 解析
import newsList from './content/list.js'

function getImageUrl(name) {
    return new URL(`./content/contents/${name}`, import.meta.url).href
}

function unixTimestampToReadableTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // 乘以1000，因为Unix时间戳是以秒为单位，而Date对象需要以毫秒为单位
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return `${year}年${month}月${day}日 ${hours}:${minutes}`;
}


function processList(list) {
    // 处理列表，解析Image的url为Vite URL。
    // 排序列表
    list.sort((a,b) => {
        return b.publishTime - a.publishTime
    })

    // 处理
    let newList = []
    let currentIndex = 0

    list.forEach(item => {
        let title = item.title
        let description = item.content
        let publishTime = unixTimestampToReadableTime(item.publishTime)
        let linkEnable = item.linkEnable
        let link = item.link
        let downloadName = item.downloadName
        let author = item.author
        let images = []
        // 判断图片
        if (typeof(item.image) == "string") { // 单张图片
            images.push(getImageUrl(item.image))
        } else if (typeof(item.image) == "object") { // 多张图片
            item.image.forEach(image => {
                images.push(getImageUrl(image))
            })
        }

        let newItem = {
            title: title,
            description: description,
            publishTime: publishTime,
            linkEnable: linkEnable,
            link: link,
            downloadName: downloadName,
            author: author,
            images: images,
            index: currentIndex,
        }
        newList.push(newItem)
        currentIndex++
    });

    return newList
}

const newsListProcessed = processList(newsList)
// 检查这个快报是否存在
const currentNews = ref(newsListProcessed.find((item) => item.title === currentNewsTitle.value))
if (currentNews.value == undefined){
    currentNews.value = {
            title: undefined,
            description: undefined,
            publishTime: undefined,
            linkEnable: false,
            link: undefined,
            downloadName: undefined,
            author: undefined,
            images: undefined,
            index: 0,
        }
}

let array = [];
if (!(currentNews.value.images===undefined)) {
    for (let i = 0; i < currentNews.value.images.length; i++) {array.push({value: (i), text: `第${(i + 1)}页`});}
}
const downloadablePages = ref(array);

const downloadPageValue = ref(undefined)
const DownloadDialogVisible = ref(false)

const downloadFileURL = ref("")
const downloadFileName = ref("???")

watch(downloadPageValue, (newValue, oldValue) => {
    if (newValue != undefined) {
        downloadFileURL.value = currentNews.value.images[newValue]
        downloadFileName.value = `${currentNews.value.downloadName}_第${newValue+1}页.png`
    }
})

</script>

<template>
<div v-if="!(currentNews.title == undefined)">
    <div class="banner">
        <div class="banner_title_and_subtitle">
            <router-link to="/KeleMC_News_HomePage" class="nocolor_link"><span class="banner_title">wangyupu的KeleMC快报</span></router-link>
            <span class="banner_subtitle">查看快报：{{ currentNews.title }}</span>
            <span class="banner_info">作者: {{ currentNews.author }}</span>
            <span class="banner_info">页数: {{ currentNews.images.length }}</span>
            <span class="banner_info">发布时间: {{ currentNews.publishTime }}</span>
            <span class="banner_info">简介: <br>{{ currentNews.description }}</span>
        </div>

        <div class="banner_kelemc_logo">
            <a href="https://kelemc.fun" ><img class="banner_kelemc_logo_content" src="https://kelemc.fun/banner.png" alt="KELEMC LOGO"></img></a>
        </div>

    </div>
    <div class="content">
        <el-image
        :src="currentNews.images[0]"
        :zoom-rate="1.2"
        :max-scale="10"
        :min-scale="0.1"
        :preview-src-list="currentNews.images"
        :initial-index="0"
        fit="contain"
    />
    </div>
    <div class="operations">
        <div v-if="currentNews.linkEnable" class="operation">
            <a :href="currentNews.link" class="nocolor_link">前往此篇快报所指引的网址</a>
        </div>
        <span class="operation nocolor_link" @click="DownloadDialogVisible=true">下载这篇快报</span>
    </div>
</div>
<div v-else class="error">
    <span>错误：没有找到快报。</span>
    <router-link to="/KeleMC-News-HomePage" class="nocolor_link">返回主页</router-link>
</div>
<el-dialog
    v-model="DownloadDialogVisible"
    title="下载快报"
    width="500">
    <span>您要下载第几页？</span><br>
    <el-select
        v-model="downloadPageValue"
        placeholder="下载页数"
        style="width: 20vw">
        <el-option
        v-for="item in downloadablePages"
        :key="item.value"
        :label="item.text"
        :value="item.value"/>
    </el-select>
        <template #footer>
        <div class="dialog-footer" v-if="downloadPageValue !== undefined">
            <a :href="downloadFileURL" :download="downloadFileName" class="operation nocolor_link downloadOperation">下载</a>
        </div>
        <div v-else>
            <span class="operatio downloadOperation">请选择页数</span>
        </div>
        </template>
</el-dialog>
</template>

<style scoped>
.error {
    text-align: center;
    font-size: 200%;
    color:red;
}
.banner {
    background-color: rgb(225,107,50);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2vh;
    padding-bottom:2vh;
    margin-bottom: 2vh;
}
.banner_kelemc_logo {
    margin-right: 10%;
}
.banner_kelemc_logo_content {
    width: 15vw;
}
.banner_title_and_subtitle {
    display:flex;
    flex-direction: column;
    margin-left: 5%;
    max-width: 40vw;
}
.banner_title {
    font-size:150%;
    align-items: start;
    text-decoration: none;
}
.banner_subtitle {
    font-size:125%;
    align-items: end;
}
.content {
    margin-top: 2vh;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 2vh;
}
.operations {
    background-color: rgb(196, 250, 250);
    margin-bottom: 1vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-right:0.5vw;
    display:flex;
    align-items: center;
    justify-content:end;
}
.dark .operations {
    background-color: rgb(122, 156, 156);
}
.operation {
    margin-right: 0.5vw;
}
.downloadOperation {
    background-color: #d8d8d8;
    padding:1%;
    border-radius: 5px;
}
</style>