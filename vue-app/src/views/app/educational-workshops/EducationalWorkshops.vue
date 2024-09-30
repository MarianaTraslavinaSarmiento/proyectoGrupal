<script setup>
import { ref, computed } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import SearchIcon from '@icons/search-bar/SearchIcon.vue';
import { useRouter } from 'vue-router';
import { useGetAllWorkshopsWithStoreInCharge } from '@/composables/useWorkshop';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';

const router = useRouter();

const { isLoading, workshops } = useGetAllWorkshopsWithStoreInCharge();

const searchQuery = ref('')
const filteredDatos = computed(() => {
  if (!searchQuery.value) return workshops.value;

  return workshops.value.filter((dato) => {
    const nombre = dato.name.toLowerCase();
    const targetAudience = dato.target_audience.toLowerCase();
    const storeInCharge = dato.store_in_charge[0].name.toLowerCase();
    const busqueda = searchQuery.value.toLowerCase();

    return (
      nombre.includes(busqueda) ||
      targetAudience.includes(busqueda) ||
      storeInCharge.includes(busqueda)
    );
  });
});

const onPublicInfoClick = (workshopId) => {
  console.log('Public Info Click - Workshop ID:', workshopId);
  router.push({ 
    name: 'WorkshopInfo', 
    params: { workshop: workshopId } 
  }).catch(error => {
    console.error('Navigation error:', error);
  });
};

const onAboutClick = (workshopId) => {
  console.log('About Click - Workshop ID:', workshopId);
  if (workshopId) {
    router.push({ 
      name: 'AboutWorkshop', 
      params: { workshop: workshopId.toString() } 
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  } else {
    console.error('Workshop ID is undefined');
  }
};


</script>

<template>
  <div class="talleres-educativos">
    <header class="header">
      <header-title :title="'Talleres Educativos'" :hideDiamond="false" />
    </header>
    
    <div class="search-bar">
      <div class="search-input-wrapper">
        <SearchIcon class="search-icon" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Buscar taller, por categoría o artesanos" 
        />
      </div>
    </div>
    
    <div v-if="isLoading">
      <LoadingScreen style="min-height: 60dvh;" />
    </div>
    <!-- <div v-else-if="!hasResults" class="no-results">
      No se encontraron resultados para tu búsqueda "{{ searchQuery }}".
    </div> -->
    <div v-else class="workshops">
      <div v-for="(workshop, index) in filteredDatos" :key="index" class="workshop-card">
        <img :src="workshop.image_url" :alt="workshop.name" />
        <div class="workshop-info">
          <h2>{{ workshop.name }}</h2>
          <a @click="onPublicInfoClick(workshop._id)" class="description">{{ workshop.target_audience }}</a>
          <p class="store-in-charge"><span>Taller dado por los artesanos de </span>{{ workshop.store_in_charge[0].name }}</p>
          <button @click="onAboutClick(workshop._id)">Entérate más sobre el taller aquí</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.talleres-educativos {
  font-family: Bellota;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 0px 10px;

  .search-input-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    height: 4vh;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--background-secondary);
    color: rgb(from var(--text-color) r g b / 38%);
    font-size: 1.2rem;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 15px 0 40px;

    &::placeholder {
      color: rgb(from var(--text-color) r g b / 38%);
    }
  }

  .search-icon {
    position: absolute;
    left: 15px;
    width: 20px;
    color: var(--text-color);
    z-index: 1;
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

    .description {
      text-decoration: underline;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
    }
    
    a{
      font-size: 1.3rem;
      margin-bottom: 0.25rem;
      cursor: pointer;
    }

    .store-in-charge {
      font-weight: bold;

      span {
        font-weight: normal;
      }
    }

    button {
      height: 3vh;
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
  .no-results {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-color);
  margin-top: 2rem;
}
}
</style>