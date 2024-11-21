<script setup>
import Button from './Button.vue'

const emit = defineEmits(['cancelled', 'confirmed'])
const editing = defineModel()
</script>

<template>
  <div style="display: inline-block">
    <input type="text" v-model="editing">
    <Button @click="emit('cancelled')">Annuler</Button>
    <Button @click="emit('confirmed')">Confirmer</Button>
  </div>
</template>
