<script setup>
import { ref } from 'vue';
document.title = 'wangyupu';
</script>

<template>
    <div class="content">
        <div class="title_div">
            <h1 class="page_title">wangyupu's website</h1>
        </div>
        <div class="contents">
            <div class="content_aligned">
                <div class="left">
                    <h1>联系我</h1>
                </div>
                <div class="right">
                    <router-link to="/contact" class="nocolor_link index_link">Click Me!</router-link>
                </div>
            </div>
            <div class="content_aligned">
                <div class="left">
                    <h1>placeholder</h1>
                </div>
                <div class="right">
                    <span>placeholder</span>
                </div>
            </div>
            <div class="content_aligned">
                <div class="left">
                    <h1>placeholder</h1>
                </div>
                <div class="right">
                    <span>placeholder</span>
                </div>
            </div>
            <div class="content_aligned">
                <div class="left">
                    <h1>placeholder</h1>
                </div>
                <div class="right">
                    <span>placeholder</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {
    min-height: 100vh;
    background: linear-gradient(217deg, rgba(0, 217, 255, 0.2), rgba(255, 0, 0, 0) 75%), linear-gradient(127deg, rgba(0, 255, 0, 0.2), rgba(0, 255, 0, 0) 75%), linear-gradient(336deg, rgba(0, 0, 255, 0.2), rgba(0, 0, 255, 0) 75%);
}

.title_div {
    background-color: azure;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
}

.dark .title_div {
    background-color: rgb(167, 219, 219);
}

.page_title {
    background: radial-gradient(circle, rgb(78, 239, 193), #6e4eefb7);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 300%;
}

.contents {
    padding-top: 3%;
    padding-bottom: 3%;
    padding-left: 15%;
    padding-right: 15%;
}

.index_link {
    font-size: 150%;
}

.content_aligned {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 3%;
    padding-bottom: 3%;
    margin-top: 3%;
    background-color: rgb(95, 192, 159);
    transition: background-color 0.2s ease;
}

.content_aligned:hover {
    background-color: rgb(115, 227, 190);
    transition: background-color 0.1s ease;
}

.left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1%;
}

.right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1%;
}
</style>
