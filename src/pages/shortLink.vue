<script setup>
import { useRoute } from 'vue-router';
import { shortLinks } from '../routerule';
import { ref, onMounted } from 'vue';

// 获取路由信息
const targetName = useRoute().params.name;

// 匹配
const targetURL = ref('');
const targetValid = ref(false);
shortLinks.forEach((item) => {
    if (item.name == targetName) {
        targetURL.value = item.target;
        targetValid.value = true;
    }
});

onMounted(() => {
    if (targetValid.value) {
        window.location.href = targetURL.value;
    }
});
</script>

<template>
    <div v-if="targetValid">
        <a class="nocolor_link" :href="targetURL">若没有自动跳转，点击此处</a>
    </div>
    <div v-else>
        <strong>无效的短链接</strong>
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 150%;
}
</style>
