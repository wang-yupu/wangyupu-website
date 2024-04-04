<script setup>
import {ref} from 'vue'
document.title = "wangyupu | 联系我"
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const int1 = ref(random(1,9))
const int2 = ref(random(1,9))
const answer = int1.value*int2.value
</script>

<template>
<div>
<h1>联系方式暂时不显示</h1>
</div>
</template>

<style scoped>

</style>