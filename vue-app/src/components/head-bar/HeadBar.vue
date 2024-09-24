<script setup>
import { ref } from 'vue';
import MenuIcon from '@icons/head-bar/MenuIcon.vue';
import SearchBar from '@components/search-bar/SearchBar.vue';
import SideMenu from './components/SideMenu.vue';

const isMenuOpen = ref(false);
const user = ref({
  name: 'SaraMartin9',
  avatar: '/path/to/avatar.jpg'
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
    <header class="header-bar">
        <button class="menu-button" @click="toggleMenu">
            <MenuIcon />
        </button>
        <SearchBar class="search-bar" />
        <SideMenu 
            :is-open="isMenuOpen" 
            :user="user" 
            @close="closeMenu"
        />
    </header>
</template>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  padding: 25px 28px 25px 8px;
  gap: 30px;
  background-color: var(--background-primary);
  .menu-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-accent);
      min-width: 40px;
      height: 40px;
  }
  .search-bar { 
      margin-left: auto;
  }
}

</style>