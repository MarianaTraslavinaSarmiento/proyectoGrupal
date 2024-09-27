<script setup>
import { ref } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import SearchIcon from '@icons/search-bar/SearchIcon.vue';

const workshops = ref([
  {
    title: "Taller de bordado ayacuchano",
    description: "Para el público en general",
    instructor: "Taller dado por los artesanos de Taller Awaq Ayllus",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
  {
    title: "Taller de cerámica artesanal",
    description: "Para el público en general",
    instructor: "Taller dado por los artesanos de Cerámicas Tater Vera",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
  {
    title: "Taller de alfarería infantil",
    description: "Para niños de 4 a 12 años",
    instructor: "Taller dado por la artesana María Santos Minchán",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
  {
    title: "Taller de pintura tradicional",
    description: "Para adultos mayores",
    instructor: "Taller dado por los artesanos Roldán y Harry Pinedo",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
]);
</script>

<template>
  <div class="talleres-educativos">
    <header class="header">
      <header-title :title="'Talleres Educativos'" :hideDiamond="false" />
    </header>
    
    <div class="search-bar">
      <SearchIcon class="search-icon" />
      <input type="text" placeholder="Buscar taller, por categoría o artesanos" />
    </div>
    
    <div class="workshops">
      <div v-for="(workshop, index) in workshops" :key="index" class="workshop-card">
        <img :src="workshop.image" :alt="workshop.title" />
        <div class="workshop-info">
          <h2>{{ workshop.title }}</h2>
          <p class="description">{{ workshop.description }}</p>
          <p class="instructor">{{ workshop.instructor }}</p>
          <button>Entérate más sobre el taller aquí</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">


.search-bar {
  position: relative;
  margin: 1rem;

  input {
    width: calc(95% - 2rem);
    height: 5vh;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #8B4513;
    color: #F5DEB3;
    font-size: 1.4rem;
    margin-top: 20px;
    margin: 20px 20px;

    &::placeholder {
      color: #D2B48C;
    }
  }

  .search-icon {
    position: absolute;
    left: 2.85rem;
    width: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #D2B48C;
  }
}

.workshops {
  margin: 1rem;
}

.workshop-card {
  display: flex;
  background-color: #8B4513;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  .workshop-info {
    padding: 0.75rem;
    color: white;
    flex: 1;

    h2 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 0.25rem;
    }

    .description {
      font-weight: 600;
    }

    .instructor {
      font-style: italic;
    }

    button {
      background-color: #6B3E26;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 0.8rem;
      margin-top: 0.5rem;
      cursor: pointer;
    }
  }
}
</style>