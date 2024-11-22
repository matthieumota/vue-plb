<script setup>
import { ofetch } from 'ofetch';
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Ajax from './Ajax.vue';

const route = useRoute()
const user = ref()
const hasError = ref(false)

watch(() => route.params.id, async (id) => {
  hasError.value = false

  try {
    const response = await ofetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    user.value = response
  } catch {
    hasError.value = true
  }
}, { immediate: true })
</script>

<template>
  <RouterLink to="/ajax">Retour</RouterLink>

  <div v-if="hasError">
    <h1>404</h1>
  </div>

  <div v-else-if="user">
    <h1>{{ user.name }}</h1>
    {{ user }}
  </div>

  <Ajax class="mt-2" />
  <RouterLink to="/utilisateur/999">404</RouterLink>
</template>

<style scoped>
.mt-2 {
  margin-top: 20px;
}
</style>
