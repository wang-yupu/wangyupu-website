<script setup lang="ts">
import { ref } from 'vue';
import ViewerToolbarShapeButton from './viewerToolbarShapeButton.vue';

const props = defineProps({
    show: Boolean(false),
});

const selected = defineModel('selected');
selected.value = 'shape-R';

const tool = defineModel('tool');
tool.value = 'Add';

const buttons = ref([
    { label: '方形', data: 'shape-R', hotkey: '1' },
    { label: '圆形', data: 'shape-C', hotkey: '2' },
    { label: '钻石', data: 'shape-W', hotkey: '3' },
    { label: '星星', data: 'shape-S', hotkey: '4' },
    { label: '顶针', data: 'shape-P', hotkey: '5' },
    { label: '晶体', data: 'shape-c', hotkey: '6' },
    { label: '无色', data: 'color-u', hotkey: 'Q' },
    { label: '红色', data: 'color-r', hotkey: 'W' },
    { label: '蓝色', data: 'color-b', hotkey: 'E' },
    { label: '绿色', data: 'color-g', hotkey: 'R' },
    { label: '青色', data: 'color-c', hotkey: 'T' },
    { label: '紫色', data: 'color-p', hotkey: 'A' },
    { label: '黄色', data: 'color-y', hotkey: 'S' },
    { label: '白色', data: 'color-w', hotkey: 'S' },
]);
const buttons2 = ref([
    { label: '移除', data: 'Remove', hotkey: 'Z' },
    { label: '替换', data: 'Replace', hotkey: 'X' },
    { label: '叠加', data: 'Add', hotkey: 'C' },
]);
</script>

<template>
    <el-collapse-transition>
        <div v-if="props.show">
            <span class="title">编辑模式工具栏（WIP）</span>
            <span>按 <code>Ctrl+Z</code> 撤消</span>
            <div>
                <div class="container">
                    <ViewerToolbarShapeButton v-for="(button, index) in buttons" :key="index" v-model="selected" :data="button.data" :hotkey="button.hotkey" :listenKeyboard="props.show">{{ button.label }}</ViewerToolbarShapeButton>
                </div>
                <div class="container">
                    <ViewerToolbarShapeButton v-for="(button, index) in buttons2" :key="index" v-model="tool" :data="button.data" :hotkey="button.hotkey" :listenKeyboard="props.show">{{ button.label }}</ViewerToolbarShapeButton>
                </div>
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
    margin-top: 3px;
    display: flex;
    width: 100%;
    justify-content: center;
}

code {
    color: white;
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.title {
    font-size: 125%;
}
</style>
