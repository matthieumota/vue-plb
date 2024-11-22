<script setup lang="ts">
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/Default.vue'

const route = useRoute()
</script>

<template>
  <component :is="route.meta.layout || DefaultLayout">
    <RouterView />
  </component>
</template>
