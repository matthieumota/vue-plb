<script setup>
import { computed, ref } from 'vue'

const props = defineProps(['year', 'version'])
const emit = defineEmits(['clicked'])

const yearTen = computed(() => props.year + 10)
const release = computed(() => `v${props.version}`)

const newTitle = ref('')
</script>

<template>
  <input type="text" v-model="newTitle" @keyup.enter="emit('clicked', newTitle)" />
  <footer>Tous droits réservés - {{ year }}/{{ yearTen }} - {{ release }}</footer>
</template>
