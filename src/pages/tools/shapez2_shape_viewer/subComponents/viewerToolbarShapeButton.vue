<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    hotkey: String('无'),
    data: String,
    listenKeyboard: Boolean(false),
});

const model = defineModel();
const selected = computed(() => {
    return model.value == props.data;
});

function updateModel() {
    model.value = props.data;
}

function handleKeyboard(event) {
    if (!props.listenKeyboard) {
        return;
    }
    if (props.hotkey.toUpperCase() != event.key.toUpperCase()) {
        return;
    }
    if (event.ctrlKey){
        return
    }
    model.value = props.data
}
onMounted(() => {
    document.addEventListener('keydown', handleKeyboard);
});
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyboard);
});
</script>

<template>
    <button :class="{ selected: selected }" @click="updateModel">
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
    transition: background linear 75ms, border linear 75ms;
    border: 1px transparent solid;
    padding: auto;
    margin-left: 2px;
    margin-top: 2px;
}

.selected {
    background-color: rgba(0, 255, 255, 0.8);
    border: 1px #fecc01 solid;
}

button:focus,
button:focus-visible {
    outline: none;
}

button:hover {
    border: 1px gray solid;
}
</style>
