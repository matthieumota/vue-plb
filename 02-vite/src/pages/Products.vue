<script setup>
import Product from '@/Product.vue'
import { ref } from 'vue'

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
  <Product v-for="product in products" :product="product" @added="add($event)" />
  {{ cart }}
</template>
