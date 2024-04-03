<script setup>

</script>

<template>
<div class="topbar" style="display: flex; align-items: center;  height: 60px;">
    <router-link to="/" class="w_icon"><img src="/src/assets/icon.png" alt="WANGYUPU ICON" width="60px"></img></router-link>
    <a href="https://github.com/wang-yupu" class="nocolor_link topbar_link">Github</a>
</div>
</template>

<style scoped>
.topbar{
    background-color: #bfbfbf;
    backdrop-filter: saturate(30%) blur(3px);
}
.w_icon {
    height: 60px;
    width:60px;
}
.topbar_link {
    font-size: 40px;
    padding-left: 15px
}
</style>