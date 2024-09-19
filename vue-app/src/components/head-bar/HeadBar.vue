<script setup>
import MenuIcon from '@icons/head-bar/MenuIcon.vue';
import SearchBar from '@components/search-bar/SearchBar.vue';

const toggleMenu = () => {
    console.log('Toggling menu');
};
</script>

<template>
    <header class="header-bar">
        <button class="menu-button" @click="toggleMenu">
            <MenuIcon />
        </button>
        <SearchBar class="search-bar" />
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