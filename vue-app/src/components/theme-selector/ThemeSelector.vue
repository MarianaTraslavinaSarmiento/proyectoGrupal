<script setup>
import { ref } from 'vue';
import { useThemeStore } from '@stores/theme';
import { storeToRefs } from 'pinia';

// Initialize the theme store
const themeStore = useThemeStore();
const { availableThemes, currentTheme } = storeToRefs(themeStore);

// Handle theme change
const handleThemeChange = (event) => {
  themeStore.setTheme(event.target.value);
};
</script>

<template>
  <div class="theme-selector">
    <label for="theme-select">Selecciona un tema:</label>
    <select id="theme-select" v-model="currentTheme" @change="handleThemeChange">
      <option v-for="theme in availableThemes" :key="theme" :value="theme">
        {{ theme }}
      </option>
    </select>
    <p>El tema actual es: {{ currentTheme }}</p>
  </div>
</template>

<style scoped>
.theme-selector {
  margin: 20px;
}

select {
  padding: 5px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
