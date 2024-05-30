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
        <Transition name="WPageTransition" mode="out-in">
            <router-view></router-view>
        </Transition>
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

.WPageTransition-enter-active,
.WPageTransition-leave-active {
    transition: opacity 0.5s ease;
}

.WPageTransition-enter-from,
.WPageTransition-leave-to {
    opacity: 0;
}
</style>
