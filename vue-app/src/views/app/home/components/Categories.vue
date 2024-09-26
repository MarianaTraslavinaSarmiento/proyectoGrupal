<template>
    <div class="category-carousel">
      <div class="category-carousel__container" ref="container">
        <div v-for="(category, index) in categories" :key="index" class="category-carousel__item">
          <div class="category-carousel__circle" @click="category.onClick">
            <component :is="category.icon" class="category-carousel__icon" />
          </div>
          <p class="category-carousel__name">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, ref, onMounted } from 'vue';
  
  const props = defineProps({
    categories: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(category => 
          typeof category.name === 'string' &&
          typeof category.onClick === 'function' &&
          typeof category.icon !== 'undefined'
        );
      }
    }
  });
  
  const container = ref(null);
  
  onMounted(() => {
    if (container.value) {
      container.value.addEventListener('wheel', (e) => {
        e.preventDefault();
        container.value.scrollLeft += e.deltaY;
      }, { passive: false });
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .category-carousel {
    width: 100%;
    overflow: hidden;
  
    &__container {
      display: flex;
      overflow-x: auto;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding: 0 1.7rem;
      gap: 1.5rem;
  
      &::-webkit-scrollbar {
        display: none;
      }
    }
  
    &__item {
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      width: 80px;
    }
  
    &__circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: var(--background-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
  
    }
  
    &__icon {
      width: 35px;
      height: 35px;
      color: var(--text-contrast);
    }
  
    &__name {
      font-size: 1.6rem;
      font-weight: 500;
      text-align: center;
      color: var(--text-contrast);
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-wrap: break-word;
      hyphens: auto;
    }
  }
  
  @media (max-width: 768px) {
    .category-carousel {
      &__container {
        padding: 0 1rem;
      }
  
      &__item {
        width: 70px; // Ligeramente más pequeño en móviles
      }
  
      &__circle {
        width: 50px;
        height: 50px;
      }
  
      &__icon {
        width: 30px;
        height: 30px;
      }
  
      &__name {
        font-size: 1.4rem;
      }
    }
  }
  </style>