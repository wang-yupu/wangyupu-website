<script setup>
import { ref } from 'vue'
import routeRule from './../routerule.js'
import { RouterLink } from 'vue-router';

// 处理路由规则

let showPages = {}

routeRule.route_rule.forEach((item) => {
    if (!item.smargs){
        item.smargs = {title:item.path,category:"没有分类"}
    }
    if (item.smargs.show == false){} else {
        if (!showPages[item.smargs.category]){
            showPages[item.smargs.category] = {name:item.smargs.category,pages:[]}
        }
        showPages[item.smargs.category].pages.push([item.smargs.title,item.path])
    }
})

console.log("处理完成",showPages)

</script>

<template>
    <div class="container">
        <h1 class="title">站点地图</h1>
        <div class="sitemap">
            <div class="category" v-for="(item, index) in showPages" :key="index">
                <h2>{{ item.name }}</h2>
                <div class="pages" v-for="(page, index) in item.pages" :key="index">
                    <RouterLink :to="page[1]" class="nocolor_link">{{ page[0] }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 20px;
    max-width: 1400px;
    margin:auto
}

.title {
    margin-left: 2%;
    font-size: 200%;
    background-color: #ccc;
    padding: 1%;
}

.sitemap {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

h2 {
    margin-top: 5px;
    margin-bottom: 5px;
}

.category {
    padding: 5px;
    padding-left: 0.5%;
    padding-right: 0.5%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin: 1% 1% 2% 2%;
}

.pages {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.dark .container {
    background-color: #3c3c3c;
}
</style>