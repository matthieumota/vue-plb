<script setup>
import LanguageSelector from './LanguageSelector.vue';

const props = defineProps(['title', 'theme'])
console.log(props.title)

// Seulement si on veut pouvoir modifier une props (soucis de synchronisation)
// const themeRef = ref(props.theme)
// watch(() => props.theme, (newValue) => themeRef.value = themeRef.value === 'dark' ? 'light' : 'dark')

const emit = defineEmits(['switchTheme'])
</script>

<template>
  <div class="navbar" :class="{ dark: theme === 'dark' }">
    <h2>{{ title ?? 'Menu' }}</h2>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/ajax">Ajax</RouterLink>
      <RouterLink to="/produits">Produits</RouterLink>
      <RouterLink to="/compteur">Compteur</RouterLink>
      <RouterLink to="/hello/toto">Hello Toto</RouterLink>
      <button @click="emit('switchTheme', theme === 'dark' ? 'light' : 'dark')">
        Changer thème
      </button>
      <LanguageSelector />
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar.dark {
  background-color: #1f0505;
  color: #fff;
}
</style>
