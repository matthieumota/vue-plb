<script setup>
import { computed } from 'vue'

const props = defineProps(['label', 'name', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

// Avec Vue 3.4+, cette ligne suffit...
// const value = defineModel()
</script>

<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input type="text" :name="name" :id="name" v-model="value" />
    {{ value }}
    <button @click="value = 'toto@boxydev.com'">Changer la computed</button>
  </div>
</template>

<style scoped>
div {
  margin: 20px 0;
}

label {
  display: block;
}
</style>
