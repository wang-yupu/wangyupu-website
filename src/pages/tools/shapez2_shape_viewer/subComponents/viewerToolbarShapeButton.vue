<script setup>
const props = defineProps({
    hotkey: String('无'),
    selected: Boolean(false)
});
</script>

<template>
    <button :class={selected:props.selected}>
        <div class="textContainer">
            <slot></slot>
            <span>{{ props.hotkey }}</span>
        </div>
    </button>
</template>

<style scoped>
.textContainer {
    display: flex;
    flex-direction: column;
}

button {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(3px);
    margin-left: 3px;
}

.selected {
    background-color: rgba(0, 255, 255, 0.8);
}
</style>
