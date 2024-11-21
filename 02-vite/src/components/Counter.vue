<script setup>
import { ref } from 'vue'

const props = defineProps(['start', 'max'])
const emit = defineEmits(['incremented'])

const value = ref(parseInt(props.start) || 0)

const increment = (v) => {
  value.value += v
  emit('incremented', { current: value.value })
}
</script>

<template>
  <div :class="{ max: value >= max }">
    <button @click="increment(-1)" v-if="value > 0">-</button>
    <span>{{ value }}</span>
    <button @click="increment(1)" v-if="!max || value < max">+</button>
  </div>
</template>

<style scoped>
.max {
  background-color: red;
}
</style>
