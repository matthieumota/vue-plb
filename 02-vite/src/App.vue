<script setup>
import { computed, ref, watch } from 'vue'
import Product from './Product.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';

const title = ref('Mon application Vue JS')
const html = ref('<h2>Un titre</h2>')
const name = ref('Fiorella')
const contacts = ref(['Marina', 'Matthieu'])
const event = 'click'

const toUpper = (c) => {
  console.log('computedUPPER ' + Math.random())
  return c.toUpperCase()
}

const contactsWithUpper = computed(() => {
  console.log('computedUPPER ' + Math.random())
  return contacts.value.map((c) => c.toUpperCase())
})

const reversedTitle = computed(() => {
  console.log('computed ' + Math.random())
  return title.value.split('').reverse().join('')
})

watch(name, (newName, oldName) => {
  if (newName === 'Fiorella') {
    name.value = 'alleroiF'
  }
})

const themeApp = ref('dark')

const products = ref([
  {
    brand: 'Brand',
    name: 'Cat',
    image:
      'https://www.zooplus.fr/magazine/wp-content/uploads/2022/03/kitten-sitzt-boden-768x512-1.jpeg',
    price: 1297.12,
    stock: 100,
    features: ['Mignon', 'Affectueux', 'Gourmand'],
    variations: [
      {
        color: 'blue',
        price: 0,
        image:
          'https://www.zooplus.fr/magazine/wp-content/uploads/2022/03/kitten-sitzt-boden-768x512-1.jpeg',
      },
      {
        color: 'red',
        price: 2,
        image:
          'https://cdn.shopify.com/s/files/1/0265/1327/7008/files/comment-accueillir-un-chaton.jpg',
      },
      { color: 'green', price: 6 },
      { color: 'purple', price: 4 },
    ],
  },
  {
    brand: 'Brand 2',
    name: 'Dog',
    image:
      'https://www.zooplus.fr/magazine/wp-content/uploads/2022/03/kitten-sitzt-boden-768x512-1.jpeg',
    price: 657.12,
    stock: 100,
    features: ['A', 'B', 'C'],
    variations: [
      {
        color: 'blue',
        price: 0,
        image:
          'https://www.zooplus.fr/magazine/wp-content/uploads/2022/03/kitten-sitzt-boden-768x512-1.jpeg',
      },
      {
        color: 'red',
        price: 2,
        image:
          'https://cdn.shopify.com/s/files/1/0265/1327/7008/files/comment-accueillir-un-chaton.jpg',
      },
      { color: 'green', price: 6 },
      { color: 'purple', price: 4 },
    ],
  },
])
const cart = ref([]) // { quantity: 3, fullName: 'Brand Cat', total: 10 }

const add = ({ quantity, fullName, total }) => {
  // si l'item est déjà dans le tableau
  const item = cart.value.find((i) => i.fullName === fullName)

  if (item) {
    item.quantity += quantity
    item.total += total
  } else {
    cart.value.push({ quantity, fullName, total })
  }
}
</script>

<template>
  <div>
    <Navbar title="Mon site" :theme="themeApp" @switch-theme="themeApp = $event" />
    <Navbar :title="title" :theme="themeApp" @switch-theme="themeApp = $event" />
    <button @click="themeApp = themeApp === 'dark' ? 'light' : 'dark'">Changer thème</button>

    <h1>{{ title }}</h1>
    <div v-html="html"></div>
    <button @[event].once="title += ' avec Vite'">Changer le titre</button>

    <h2>{{ reversedTitle }}</h2>
    <h2>{{ reversedTitle }}</h2>
    <input type="text" v-model="name" />
    <h2>{{ name }}</h2>

    <ul>
      <li v-for="contact in contactsWithUpper">
        {{ toUpper(contact) }}
      </li>
    </ul>

    <Product v-for="product in products" :product="product" @added="add($event)" />
    {{ cart }}

    <Footer :year="2024" version="0.0.1" @clicked="title = $event" />
  </div>
</template>
