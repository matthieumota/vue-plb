<script setup>
import { useLanguageStore } from '@/stores/language'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const store = useLanguageStore()
const { currentIso, current, languages } = storeToRefs(store)
const iso = ref(currentIso.value)

watch(iso, () => {
  store.update(iso.value)
})

watch(currentIso, () => {
  iso.value = currentIso.value
})
</script>

<template>
  <select v-model="iso">
    <option :value="language.iso" v-for="language in languages">
      {{ language.name }}
    </option>
    <option value="de">
      Allemand
    </option>
  </select>
  <img :src="current.flag" />
</template>
