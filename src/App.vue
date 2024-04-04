<script setup>
import topbar from './components/topbar.vue'
import footer from './components/footer.vue'
</script>

<template>
<el-container class="container">
    <el-header>
        <el-affix :offset="0">
            <topbar></topbar>
        </el-affix>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
    <el-footer>
        <footer></footer>
    </el-footer>
</template>

<style scoped>
.container {
    background-color: #fafafa;
}
</style>
