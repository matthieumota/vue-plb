<script setup>
import { computed, ref, watch } from 'vue'
import Product from './Product.vue'

const title = ref('Mon application Vue JS')
const html = ref('<h2>Un titre</h2>')
const name = ref('Fiorella')
const contacts = ref(['Marina', 'Matthieu'])
const event = 'click'

const toUpper = (c) => {
  console.log('computedUPPER '+Math.random())
  return c.toUpperCase()
}

const contactsWithUpper = computed(() => {
  console.log('computedUPPER '+Math.random())
  return contacts.value.map(c => c.toUpperCase())
})

const reversedTitle = computed(() => {
  console.log('computed '+Math.random())
  return title.value.split('').reverse().join('')
})

watch(name, (newName, oldName) => {
  if (newName === 'Fiorella') {
    name.value = 'alleroiF'
  }
})
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="html"></div>
    <button @[event].once="title += ' avec Vite'">Changer le titre</button>

    <h2>{{ reversedTitle }}</h2>
    <h2>{{ reversedTitle }}</h2>
    <input type="text" v-model="name">
    <h2>{{ name }}</h2>

    <ul>
      <li v-for="contact in contactsWithUpper">
        {{ toUpper(contact) }}
      </li>
    </ul>

    <Product />
  </div>
</template>
