<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/app';

const store = useAppStore()
const { title } = storeToRefs(store)
const themeApp = ref('dark')
</script>

<template>
  <div>
    <Navbar title="Mon site" :theme="themeApp" @switch-theme="themeApp = $event" />
    <Navbar :title="title" :theme="themeApp" @switch-theme="themeApp = $event" />
    <button @click="themeApp = themeApp === 'dark' ? 'light' : 'dark'">Changer thème</button>

    <slot />

    <Footer :year="2024" version="0.0.1" @clicked="store.updateTitle($event)" />
  </div>
</template>
