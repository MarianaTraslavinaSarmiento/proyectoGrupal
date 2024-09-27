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

.talleres-educativos{
    font-family: Bellota;
}
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1rem;
  padding: 0px 10px;

  input {
    width: calc(100% - 2rem);
    height: 4vh;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--background-secondary);
    color: rgb(from var(--text-color) r g b / 38%);
    font-size: 1.2rem;
    margin-top: 20px;
    margin: 20px 15px;
    padding-left: 40px;

    &::placeholder {
        color: rgb(from var(--text-color) r g b / 38%);
    }
  }

  .search-icon {
    position: absolute;
    left: 10%;
    width: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-color);
  }
}

.workshops {
  margin: 1rem;
      padding: 0px 10px;
}

.workshop-card {
  height: 18vh;
  display: flex;
  background-color: var(--background-secondary);
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 130px;
    height: 18vh;
    object-fit: cover;
  }

  .workshop-info {
    padding: 0.75rem;
    color: var(--text-color);
    flex: 1;

    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }

    .description{
        text-decoration: underline;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
    }


    .instructor {
      font-weight: bold;
    }

    button {
     height:3vh;
     background-color: var(--background-primary);
     color: var(--text-color);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      font-size: 1.1rem;
      margin-top: 2rem;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>