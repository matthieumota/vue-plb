import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentIso = ref('fr')
  const languages = ref([
    { name: 'Français 🇫🇷', iso: 'fr', flag: 'https://flagcdn.com/w20/fr.png' },
    { name: 'Anglais 🇺🇸', iso: 'us', flag: 'https://flagcdn.com/w20/us.png' },
  ])

  const isos = computed(() => {
    return languages.value.map(l => l.iso)
  })

  const current = computed(() => {
    return languages.value.find(l => l.iso === currentIso.value)
  })

  const update = (iso) => {
    if (isos.value.includes(iso)) {
      currentIso.value = iso
    } else {
      currentIso.value = 'fr'
    }
  }

  return { currentIso, languages, current, update }
})
