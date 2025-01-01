<script setup lang="ts">
import ViewerToolbarShapeButton from './viewerToolbarShapeButton.vue';

const props = defineProps({
    show: Boolean(false),
});
</script>

<template>
    <el-collapse-transition>
        <div v-if="props.show">
            <span>编辑模式工具栏（WIP）</span>
            <div class="container">
                <ViewerToolbarShapeButton hotkey="1" selected="true">方形</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="2">圆形</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="3">钻石</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="4">星星</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="5">顶针</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="6">晶体</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="D">移除</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="Q">无色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="G">红色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="W">蓝色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="E">绿色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="R">青色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="T">紫色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="A">黄色</ViewerToolbarShapeButton>
                <ViewerToolbarShapeButton hotkey="S">白色</ViewerToolbarShapeButton>
            </div>
        </div>
    </el-collapse-transition>
</template>

<style scoped>
span {
    color: white;
    padding-left: 3px;
}

.container {
    display: flex;
}
</style>
