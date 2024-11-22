<script setup>
import { useLanguageStore } from '@/stores/language';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue';

const props = defineProps(['year', 'version'])
const emit = defineEmits(['clicked'])

const yearTen = computed(() => props.year + 10)
const release = computed(() => `v${props.version}`)

const newTitle = ref('')

const { current } = storeToRefs(useLanguageStore())
</script>

<template>
  <input type="text" v-model="newTitle" @keyup.enter="emit('clicked', newTitle)" />
  <footer>
    <p>
      Tous droits réservés - {{ year }}/{{ yearTen }} - {{ release }} - Le site est en {{ current.name }} <img :src="current.flag" />
    </p>
    <LanguageSelector />
  </footer>
</template>
