import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const title = ref(
    //window.localStorage.getItem('app.title') ||
    'Mon application Vue JS'
  )

  const reversedTitle = computed(() => {
    console.log('computed ' + Math.random())
    return title.value.split('').reverse().join('')
  })

  const updateTitle = (newTitle) => {
    title.value = newTitle
    window.localStorage.setItem('app.title', title.value)
  }

  return { title, reversedTitle, updateTitle }
})
