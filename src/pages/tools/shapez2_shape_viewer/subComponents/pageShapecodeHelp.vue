<template>
    <span>
        形状代码如：<code>RuRuRuRu:SrSrSr--</code>，按<code>: 冒号</code>分割不同的层级，然后每两位字母为一个象限，两位字母中前一位代表形状，后一位代表颜色。 若是<code>--</code>，则代表这一象限上没有形状。层数从最低（第一层）开始，象限从右上（东北）开始，顺时针排列。
        <br />
        可用的形状：
        <ul>
            <li><code>R</code> 方形</li>
            <li><code>C</code> 圆形</li>
            <li><code>W</code> 钻石</li>
            <li><code>S</code> 星星</li>
            <li><code>P</code> 针销 （由顶针器生产）（不能着色）</li>
            <li><code>c</code> 晶体（小写）</li>
            <li>
                <code>-</code>
                空（颜色也为<code>-</code>）
            </li>
        </ul>
        六分模式下的形状：
        <ul>
            <li><code>H</code> 六边形</li>
            <li><code>G</code> 齿轮</li>
            <li><code>F</code> 花朵</li>
        </ul>
        可用的颜色：
        <ul class="colorList">
            <li>
                <code style="background-color: #e13542"><span>r</span></code> 红色
            </li>
            <li>
                <code style="background-color: #4fa62f"><span>g</span></code>
                绿色
            </li>
            <li>
                <code style="background-color: #436edf"><span>b</span></code> 蓝色
            </li>
            <li>
                <code style="background-color: #c9a822"><span>y</span></code>
                黄色
            </li>
            <li>
                <code style="background-color: #d23ded"><span>m</span></code>
                紫色(品红)
            </li>
            <li>
                <code style="background-color: #2ab1a6"><span>c</span></code> 青色
            </li>
            <li>
                <code style="background-color: #8c9398"><span>u</span></code>
                没有颜色
            </li>
            <li>
                <code style="background-color: #ffffff"><span>w</span></code> 白色
            </li>
        </ul>
        <a href="https://shapez2.wiki.gg/wiki/Shapes" target="_blank" class="nocolor_link" style="backdrop-filter: blur(3px);">查看 Wiki 页面</a>
    </span>
</template>

<style scoped>
ul {
    margin-top: 0;
    margin-bottom: 2px;
}

code {
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.colorList > li > code {
    color: white;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 3px;
    margin-bottom: 2px;
    padding-bottom: 2px;
    width: 20px;
    display: inline-block;
}

.colorList > li > code > span {
    mix-blend-mode: difference;
    text-align: center;
    width: 100%;
    display: inline-block;
}
</style>