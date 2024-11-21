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

/**
 * Modification
 * - On clique sur modifier, l'emplacement du nom de l'utilisateur devient un input
 * - Pour ça, il faut une ref qui contient l'utilisateur à modifier (null par défaut)
 * - Ce input doit être lié à une ref (le nouveau nom de l'utilisateur)
 * - On a 2 boutons Confirmer et Annuler.
 * - Un clic sur confirmer valide la modification de l'utilisateur dans le tableau + fait la requête fetch (PUT)
 * - Un clic sur annuler doit remettre l'état par défaut (supprimer le input et les 2 boutons)
 */
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
