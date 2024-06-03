<script setup>
import topbar from './components/topbar.vue'
import wfooter from './components/wfooter.vue'

import IsDarkMode from './dark_mode.js'

</script>

<template>
<el-container class="container">
    <el-header :class="{ dark: IsDarkMode }">
        <el-affix :offset="0">
            <topbar></topbar>
        </el-affix>
    </el-header>
    <el-main :class="{ dark: IsDarkMode }">
        <router-view v-slot="{ Component }">
            <transition name="WPageTransition" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
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
    transition: opacity 0.2s linear;
}

.WPageTransition-enter-from,
.WPageTransition-leave-to {
    opacity: 0;
}
</style>
