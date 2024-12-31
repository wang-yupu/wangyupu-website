<script setup lang="ts">
import PageExamplesExample from './pageExamplesExample.vue';
import { allowColors, shapeNormal } from '../codeParse';

const emits = defineEmits(['viewCode']);

function whenClick(code) {
    emits('viewCode', code);
}

function randomCode() {
    // 确定层级个数
    const layers = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    let shapeCode = '';
    let shape, color;
    for (let i = 0; i < layers; i++) {
        // 随机
        for (let i2 = 0; i2 < 4; i2++) {
            shape = shapeNormal[Math.floor(Math.random() * shapeNormal.length)];
            color = allowColors[Math.floor(Math.random() * allowColors.length)];
            if (shape == 'P') {
                color = '-';
            } else if (shape == '-') {
                color = '-';
            }

            shapeCode += shape + color;
        }
        shapeCode += ':';
    }
    if (shapeCode.charAt(shapeCode.length - 1) == ':') {
        shapeCode = shapeCode.slice(0, -1);
    }

    emits('viewCode', shapeCode);
}
</script>

<template>
    <ul>
        <PageExamplesExample name="异形工厂 Logo 形状" shape-code="RuCwP-Cw:----Ru--" @wclick="whenClick" />
        <PageExamplesExample name="异形工厂2 Logo 形状" shape-code="CwRwCwCw:P-P-P-P-:CcCcCcCc" @wclick="whenClick" />
        <PageExamplesExample name="随机形状（不包证可以生产）" shape-code="????????:????????" @wclick="randomCode" />
    </ul>
</template>

<style scoped>
ul {
    padding-left: 2px;
}

ul > :nth-child(even) {
    backdrop-filter: none;
}

ul > :nth-child(even) > .viewButton {
    backdrop-filter: none;
    background-color: rgba(255, 255, 0, 0.1);
}
</style>
