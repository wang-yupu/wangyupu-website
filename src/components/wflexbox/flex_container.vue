<script setup>

</script>

<template>
<div class="wflexcontainer"><slot></slot></div>
</template>

<style scoped>
.wflexcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}
</style>