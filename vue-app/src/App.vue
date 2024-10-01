<script setup>
import { useThemeStore } from '@stores/theme.js'
// import  ThemeSelector  from './components/theme-selector/ThemeSelector.vue'

const themeStore = useThemeStore()
</script>

<template>
  <div :class="['app-container', themeStore.currentTheme+'-theme']">
    <RouterView />
    <!-- <div class="color-tester">
       Texto
    </div> -->
    <!-- <ThemeSelector /> -->
  </div>

</template>


