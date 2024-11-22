<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/app';

const { title } = storeToRefs(useAppStore())
const themeApp = ref('dark')
</script>

<template>
  <div style="background-color: lightblue;">
    <Navbar title="Mon site" :theme="themeApp" @switch-theme="themeApp = $event" />

    <slot />

    <Footer :year="2024" version="0.0.1" @clicked="title = $event" />
  </div>
</template>
