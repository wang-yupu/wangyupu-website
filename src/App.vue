<script setup>
import topbar from './components/topbar.vue'
import wfooter from './components/wfooter.vue'

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
    <el-footer height="101">
        <wfooter></wfooter>
    </el-footer>

</template>

<style scoped>
.container {
    background-color: #fafafa;
    min-height: 100vh;
}
</style>
