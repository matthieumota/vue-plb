<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const search = ref('')
const route = useRoute()
const router = useRouter()

onMounted(() => console.log(`Salut ${route.params.name}`))

// Si on passe de /hello/toto à /hello/tata, le onMounted ne se fait pas
watch(() => route.params.name, () => {
  console.log(`Salut ${route.params.name}`)
}, { immediate: true })

const navigate = () => {
  router.push(`/hello/${search.value}`)
  search.value = ''
}
</script>

<template>
  <h1>Hello {{ route.params.name }}</h1>

  <input type="text" v-model="search">
  <button @click="navigate">Go</button>
  <RouterLink :to="`/hello/${search}`" v-if="search">Go</RouterLink>

  <RouterLink to="/hello/tata">Tata</RouterLink>
  <RouterLink to="/hello/toto">Toto</RouterLink>
</template>
