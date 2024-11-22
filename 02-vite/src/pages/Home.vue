<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'

const store = useAppStore()
const { title, reversedTitle } = storeToRefs(store)

const html = ref('<h2>Un titre</h2>')
const name = ref('Fiorella')
const contacts = ref(['Marina', 'Matthieu'])
const event = 'click'

const contactsWithUpper = computed(() => {
  console.log('computedUPPER ' + Math.random())
  return contacts.value.map((c) => c.toUpperCase())
})

const toUpper = (c) => {
  console.log('computedUPPER ' + Math.random())
  return c.toUpperCase()
}

watch(name, (newName, oldName) => {
  if (newName === 'Fiorella') {
    name.value = 'alleroiF'
  }
})
</script>

<template>
  <h1>{{ title }}</h1>
  <div v-html="html"></div>
  <button @[event].once="store.updateTitle(title + ' avec Vite')">Changer le titre</button>

  <h2>{{ reversedTitle }}</h2>
  <h2>{{ reversedTitle }}</h2>
  <input type="text" v-model="name" />
  <h2>{{ name }}</h2>

  <ul>
    <li v-for="contact in contactsWithUpper">
      {{ toUpper(contact) }}
    </li>
  </ul>
</template>
