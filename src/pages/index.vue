<script setup>
import {ref} from 'vue'
document.title = "wangyupu"

</script>

<template>
<div class="content">
    <div class="title_div">
        <h1 class="page_title">wangyupu's website</h1>
    </div>
    <div class="contents">
        <el-row>
            <el-col :span="12">
                <h2>联系我</h2>
            </el-col>
            <el-col :span="12">
                <router-link to="/contact" class="nocolor_link index_link"><a>点此查看</a></router-link>
            </el-col>
        </el-row>
        
    </div>
</div>
</template>

<style scoped>
.title_div {
    background-color: azure;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    height: 200px;
}
.page_title {
    background: radial-gradient(circle, rgba(78, 239, 193, 0.703), #6e4eefb7);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 300%;
}
.contents {
    padding-left:15%;
    padding-right: 15%;
}
.index_link {
    font-size:150%
}
</style>