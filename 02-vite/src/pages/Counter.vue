<script setup>
import { ref } from 'vue'
import Counter from '@/components/Counter.vue'
import Input from '@/components/Input.vue'

const totals = ref([0, 5, 5])
const email = ref('fiorella@boxydev.com')
</script>

<template>
  <div>
      <Counter @incremented="totals[0] = $event.current" />
      <Counter :start="totals[1]" :max="10" @incremented="totals[1] = $event.current" />
      <Counter :start="totals[2]" :max="10" @incremented="totals[2] = $event.current" />
      <Counter
        v-for="(total, index) in totals"
        :start="total"
        :max="index > 0 ? 10 : undefined"
        @incremented="totals[index] = $event.current"
      />
      <p>Somme des compteurs: {{ totals }}</p>
    </div>

    <Input label="Adresse email" name="email" v-model="email" />
    <Input label="Prénom" name="firstname" v-model="email" />
    {{ email }}
</template>
