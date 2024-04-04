<script setup>
import {ref} from 'vue'
document.title = "wangyupu"

const texts = ref('')
let str = "The quick brown fox jumps over the lazy dog. ";
for (let i = 0; i < 1000; i++) {
    texts.value += str;
}
</script>

<template>
<h1>wangyupu | INDEX</h1>
<a>{{ texts }}</a>
</template>

<style scoped>

</style>