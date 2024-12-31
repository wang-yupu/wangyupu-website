<script setup>

</script>

<template>
    <div class="tool_index">
        <h1>wangyupu的工具</h1>
        <router-link to="/tool/nngweb" class="nocolor_link">网易MC名称生成器</router-link>
        <router-link to="/tool/Panorama-Viewer/" class="nocolor_link">360˚全景图查看 (WIP)</router-link>
        <router-link to="/tool/shapez2ShapeViewer/" class="nocolor_link">异形工厂 2 形状查看/编辑器 (WIP)</router-link>
    </div>
</template>

<style scoped>
.tool_index {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 150%;
}

.item {
    margin-bottom: 10%;
}
</style>