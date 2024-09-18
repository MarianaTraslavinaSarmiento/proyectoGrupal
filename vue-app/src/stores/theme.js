import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'light' 
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
  availableThemes: ['light', 'brown' , 'ocean']
});

// import { useThemeStore } from './stores/theme'
// const themeStore = useThemeStore()
// // Get current theme
// console.log(themeStore.getCurrentTheme)
// // Set a specific theme
// themeStore.setTheme('sepia')
// // Toggle to next theme
// themeStore.toggleTheme()