<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps(['product'])
const product = ref(props.product)

const emit = defineEmits(['added'])

const quantity = ref(1)
const selected = ref(0) // Permet de savoir quelle variation on utilise actuellement

const fullName = computed(() => product.value.brand + ' ' + product.value.name)
// Permet d'avoir le total du prix + la variation actuelle avec la quantité
const total = computed(() => {
  const numberFormat = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
  console.log(numberFormat.format(1997.12)) // 1 997,12 €
  return numberFormat.format((product.value.price + variation.value.price) * quantity.value)
})
// Avoir les informations de la variation actuelle (image, prix...)
const variation = computed(() => product.value.variations[selected.value])

watch(quantity, (newValue, oldValue) => {
  if (newValue > product.value.stock) {
    alert(`Vous avez choisi ${newValue} et le stock est de ${product.value.stock}`)
    quantity.value = product.value.stock
  }

  if (newValue <= 0) { // Check si la quantité passe en dessous de 0
    quantity.value = 1
  }
})
</script>

<template>
  <div class="product">
    <div>
      <img :src="variation.image" :alt="fullName">
    </div>
    <div>
      <h1>{{ fullName }}</h1>
      <p>{{ total }}</p>
      <input type="number" v-model="quantity">

      <p class="in-stock" v-if="product.stock > 0 && quantity <= product.stock">En stock</p>
      <p class="out-stock" v-else>Pas assez de stock</p>

      <ul>
        <li v-for="feature in product.features">
          {{ feature }}
        </li>
      </ul>

      <div class="variations">
        <div v-for="(variation, index) in product.variations"
          :class="{ square: true, active: selected === index }"
          :style="{ backgroundColor: variation.color }"
          @click="selected = index"
        ></div>
      </div>

      <button @click="emit('added', { quantity, fullName, total: (product.price + variation.price) * quantity })">Ajouter au panier</button>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  gap: 50px;
  max-width: 1200px;
  margin: auto;
}

.product > div {
  width: 50%;
}

img {
  max-width: 100%;
}

input {
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
}

.in-stock {
  color: green;
}

.out-stock {
  color: lightcoral;
}

.variations {
  display: flex;
  gap: 10px;
}

.square {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 4px solid transparent;
}

.square.active {
  border-color: darkcyan;
  opacity: 0.5;
}
</style>
