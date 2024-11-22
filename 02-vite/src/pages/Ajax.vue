<script setup>
import { ofetch } from 'ofetch'
import { onMounted, ref } from 'vue'
import Button from '@/components/Button.vue'
import EditUser from '@/components/EditUser.vue'

/**
 * Router exercice
 * - Sur la page /ajax, ajouter un bouton Go sur chaque utilisateur de la liste pour aller vers /user/13 pour l'utilisateur 13 par exemple
 * - Créer une nouvelle page /user/1
 * - Récupérer l'id de l'url (1) et faire une requête ajax sur https://jsonplaceholder.typicode.com/users/1
 * - Afficher les informations de l'utilisateur
 * - Si l'utilisateur n'existe pas, le préciser avec une 404 ou autre
 */
const users = ref([])
const loading = ref(false)
const hasError = ref(false)

// @todo check ssr
onMounted(async () => {
  loading.value = true
  try {
    const response = await ofetch('https://jsonplaceholder.typicode.com/users')
    users.value = response
  } catch (e) {
    hasError.value = true
  }
  setTimeout(() => (loading.value = false), 500)
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
const editing = ref({
  user: null, // En train d'être modifié
  name: '', // Potentiel nouveau nom
})

const startEdit = (user) => {
  editing.value.user = user
  editing.value.name = user.name
}

const cancelEdit = () => {
  editing.value.user = null
}

const update = async () => {
  const response = await ofetch(
    `https://jsonplaceholder.typicode.com/users/${editing.value.user.id}`,
    {
      method: 'PUT',
      body: { name: editing.value.name },
    },
  )
  const user = users.value.find((u) => u.id === response.id)
  user.name = response.name
  cancelEdit()
  console.log(response)
}
</script>

<template>
  <div v-if="loading" style="height: 200px">Chargement...</div>

  <div v-else-if="hasError">Désolé, l'API n'est pas disponible</div>

  <ul v-else>
    <li v-for="(user, index) in users">
      <EditUser
        v-if="editing.user === user"
        v-model="editing.name"
        @cancelled="cancelEdit()"
        @confirmed="update()"
      />
      <span v-else>{{ user.name }}</span>
      {{ user.email }}
      <RouterLink :to="`/utilisateur/${user.id}`" custom v-slot="{ navigate }">
        <Button @click="navigate">Go</Button>
      </RouterLink>
      <Button @click="startEdit(user)" v-if="editing.user !== user">Modifier</Button>
      <Button @click="remove(index, user.id)">Supprimer</Button>
    </li>
  </ul>
</template>
