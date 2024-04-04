<script setup>

</script>

<template>
<div class="footer" style="display: flex; align-items: center;  height: 100px;">
    <router-link to="/" class="w_icon"><img src="/src/assets/icon.png" alt="WANGYUPU ICON" width="80px"></img></router-link>
</div>
<div class="copyright">
    <a>版权所有 ©wangyupu</a>
</div>
</template>

<style scoped>
.footer {
    background-color :rgba(0, 255, 255, 0.07);
}
.footer_link {
    font-size: 40px;
    padding-left: 15px
}
.copyright {
    padding-top:5px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content:center;
    height: 20px;
    font-size:125%;
    background-color: rgb(0, 220, 220);
}
</style>