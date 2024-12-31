<script setup>
const props = defineProps({
    shapeCode: String('CrCrCrCr'),
    name: String,
});
</script>

<template>
    <li class="container">
        <div>
            <code class="shapeCode">{{ props.shapeCode }}</code>
        </div>
        <div>
            <span class="name">{{ props.name }}</span>
            <button class="viewButton" @click="$emit('wclick',props.shapeCode)">查看</button>
        </div>
    </li>
</template>

<style scoped>
.container {
    color: white;
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.container::marker {
    content: '';
}

.container button {
    padding: 2px 4px 2px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(3px);
    border-radius: 0px;
    border: 3px transparent solid;
}

.name {
    margin-right: 5px;
}

.shapeCode {
    margin-left: 5px;
}

code {
    font-family: 'Barlow', system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.viewButton:focus,
.viewButton:focus-visible {
    outline: none;
}

.viewButton:hover {
    border: 3px gray solid;
}

.viewButton:active {
    border: 3px #fecc01 solid;
    background-color: #fecb014e;
}
</style>
