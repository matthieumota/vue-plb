<script setup>
import { ofetch } from 'ofetch'
import { onMounted, ref } from 'vue'
import Button from './Button.vue';

const users = ref([])
const loading = ref(false)
const hasError = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const response = await ofetch('https://jsonplaceholder.typicode.com/users')
    users.value = response
  } catch (e) {
    hasError.value = true
  }
  setTimeout(() => loading.value = false, 500)
})

const remove = async (index, id) => {
  const response = await ofetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  })
  users.value.splice(index, 1)
  console.log(response)
}
</script>

<template>
  <div v-if="loading" style="height: 200px">
    Chargement...
  </div>

  <div v-else-if="hasError">Désolé, l'API n'est pas disponible</div>

  <ul v-else>
    <li v-for="(user, index) in users">
      {{ user.name }} {{ user.email }}
      <Button>Modifier</Button>
      <Button @click="remove(index, user.id)">Supprimer</Button>
    </li>
  </ul>
</template>
