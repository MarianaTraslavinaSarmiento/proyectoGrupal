import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    availableThemes: ['grey', 'brown', 'ocean'],
    currentTheme: 'brown'
  }),
  getters: {
    getCurrentTheme: (state) => state.currentTheme
  },
  actions: {
    setTheme(themeName) {
      if (this.availableThemes.includes(themeName)) {
        this.currentTheme = themeName
      } else {
        console.warn(`Theme "${themeName}" is not available.`)
      }
    },
    toggleTheme() {
      const currentIndex = this.availableThemes.indexOf(this.currentTheme)
      const nextIndex = (currentIndex + 1) % this.availableThemes.length
      this.currentTheme = this.availableThemes[nextIndex]
    }
  },
});
