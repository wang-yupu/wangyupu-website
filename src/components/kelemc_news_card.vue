<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
    title: String,
    publishTime: String,
    description: String,
    image: String,
    enableLink: Boolean,
    link: String,
    pageTotal: Number,
    index: Number,
    author: String,
})
const router = useRouter()
const route = useRoute()
function redirect() {
    router.push({
        name: 'KeleMC-News-View',
        params: {
            title: props.title,
        },
    })
}
</script>

<template>
<div :class="{newsCard:true, latest_card: props.index == 0}" @click="redirect">
    <div class="newsCardLeft">
        <span class="index">{{ props.index }}.</span>
        <span class="title">{{ props.title }}</span>
        <span class="description">{{ props.description }}</span>
    </div>
    <div class="newsCardRight">
        <span class="pageTotal">总共{{ props.pageTotal}}页</span>
        <span class="publishTime">发布时间：{{ props.publishTime }}</span>
        <span class="publishTime">作者：{{ props.author }}</span>
        <a v-if="props.enableLink" :href="props.link" class="nocolor_link">Link</a>
    </div>
</div>
</template>

<style scoped>
.newsCard {
    display:flex;
    justify-content: space-between;
    padding-top:1vh;
    padding-bottom: 1vh;
    margin-left: 1vw;
    margin-right: 1vw;
    background-color: rgb(1, 200, 127);
    transition: background-color 0.1s ease;
}
.dark .newsCard{
    background-color: rgb(0,142,89);
}
.dark .newsCard:hover {
    background-color: rgb(0, 206, 130);
    transition: background-color 0.1s ease;
}
.newsCard:hover {
    background-color: rgb(4, 232, 149);
    transition: background-color 0.1s ease;
}
.latest_card{
    background-color: rgb(7, 255, 164);
}
.title {
    font-size: 200%;
}
.index {
    padding-right: 1vw;
}
.newsCardLeft {
    align-items: start;
    display:flex;
    flex-direction: column;
    padding-left: 1vw;
    max-width:35vw;
}
.newsCardRight {
    align-items: end;
    padding-right: 1vw;
    display:flex;
    flex-direction: column;
    justify-content: end;
    max-width: 30vw;
}
.description {
    font-size: 125%;
}
.publishTime {
    font-size: 100%;
}
.pageTotal {
    font-size: 100%;
}
</style>