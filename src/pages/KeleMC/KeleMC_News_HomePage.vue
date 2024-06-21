<script setup>
document.title = "wangyupu's KeleMC News Homepage"
import { ref } from 'vue'
import kelemc_news_card from '../../components/kelemc_news_card.vue'

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

const newsListProcessed = ref(processList(newsList))
</script>

<template class="kelemc_news_container">

    <div class="banner">
        <span class="banner_title">wangyupu的KeleMC快报</span>
        <div class="banner_kelemc_logo">
            <a href="https://kelemc.fun" ><img class="banner_kelemc_logo_content" src="https://kelemc.fun/banner.png" alt="KELEMC LOGO"></img></a>
        </div>
    </div>
    <div class="statement">
        <span>声明：这不是由<a class="nocolor_link" href="https://kelemc.fun">KeleMC</a>制作的，而是由其玩家制作的。</span>
    </div>

        <div class="KeleMCNewsHomePageContent">
            <div>
                <kelemc_news_card v-for="(item,index) in newsListProcessed" :key="index"
                :title="item.title"
                :description="item.description"
                :publishTime="item.publishTime"
                :linkEnable="item.linkEnable"
                :link="item.link"
                :downloadName="item.downloadName"
                :author="item.author"
                :images="item.images"
                :pageTotal="item.images.length"
                :index="index"
                class="newsCard"
                />
            </div>
        </div>
    <el-backtop :right="30" :bottom="30" />
</template>

<style scoped>
.banner {
    background-color: rgb(225,107,50);
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.banner_title {
    font-size:250%;
    margin-left: 10%;
}
.banner_kelemc_logo {
    background-color: #fafafa;
    margin-right: 10%;
}
.dark .banner_kelemc_logo {
    background-color: #3c3c3c;
}
.banner_kelemc_logo_content {
    width: 30vw;
}
.newsCard {
    margin-top:3vh;
}
.statement {
    background-color: rgb(235, 148, 148);
    text-align: center;
}
.KeleMCNewsHomePageContent {
    margin-bottom: 5vh;
}
</style>