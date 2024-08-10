<script setup>

</script>

<template>
<div class="footer">
    <router-link to="/" class="w_icon"><img src="/src/assets/icon.png" alt="WANGYUPU ICON" width="80px"></img></router-link>
    <div class="footerLinkColumn">
        <span>页面</span>
        <router-link to="/" class="nocolor_link">主页</router-link>
        <router-link to="/contact" class="nocolor_link">联系我</router-link>
    </div>
    <div class="footerLinkColumn">
        <span>工具</span>
        <router-link to="/tools" class="nocolor_link">工具目录</router-link>
        <router-link to="/tool/nngweb" class="nocolor_link">网易MC名称生成器</router-link>
        <span style="color:gray">还有更多...</span>
    </div>
    <div class="footerLinkColumn">
        <span>友情链接</span>
        <span>无</span>
        <span style="color:gray">联系我?</span>
    </div>
</div>
<div class="copyright">
    <span>版权所有 ©wangyupu</span>
</div>
</template>

<style scoped>
.footer {
    background-color :rgb(2, 189, 189);
    display: flex; 
    align-items: center;  
    height: 100px;
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
.footerLinkColumn {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin-left: 1vw;
    align-self: flex-start;
}
</style>