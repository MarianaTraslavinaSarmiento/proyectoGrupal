<script setup>
import TitleSection from '@components/title-section/TitleSection.vue'

import DiamondIcon from '@/assets/icons/general/DiamondIcon.vue';
import DiamondSeparator from '@/components/diamond-separator/DiamondSeparator.vue';

import TextileIcon from '@icons/categories/TextileIcon.vue';
import CeramicsIcon from '@icons/categories/CeramicsIcon.vue';
import GoldsmithingIcon from '@icons/categories/GoldsmithingIcon.vue';
import StoneCarving from '@icons/categories/StoneCarvingIcon.vue';
import WoodCarving from '@icons/categories/WoodCarvingIcon.vue';
import EmbroideryIcon from '@icons/categories/EmbroideryIcon.vue';
import JewelryIcon from '@icons/categories/JewelryIcon.vue';
import SheetMetalIcon from '@icons/categories/SheetMetalIcon.vue';
import PaintingTraditionalIcon from '@icons/categories/PaintingTraditionalIcon.vue';
import PrintedIcon from '@icons/categories/PrintedIcon.vue';

import LocationBar from './components/LocationBar.vue';
import Categories from './components/Categories.vue';
import MonthWorkshop from './components/MonthWorkshop.vue';

import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const primeCategories = [
  {
    name: 'Textilería',
    icon: TextileIcon,
    onClick: () => router.push('/app/productos-por-categoria/textileria')
  },
  {
    name: 'Cerámica',
    icon: CeramicsIcon,
    onClick: () => router.push('/app/productos-por-categoria/ceramica')
  },
  {
    name: 'Orfebrería',
    icon: GoldsmithingIcon,
    onClick: () => router.push('/app/productos-por-categoria/orfebreria')
  },
  {
    name: 'Talla en piedra',
    icon: StoneCarving,
    onClick: () => router.push('/app/productos-por-categoria/piedra')
  },
  {
    name: 'Talla en madera',
    icon: WoodCarving,
    onClick: () => router.push('/app/productos-por-categoria/madera')
  }
];

const secondCategories = [
  {
    name: 'Bordado',
    icon: EmbroideryIcon,
    onClick: () => router.push('/app/productos-por-categoria/bordado')
  },
  {
    name: 'Joyería',
    icon: JewelryIcon,
    onClick: () => router.push('/app/productos-por-categoria/joyeria')
  },
  {
    name: 'Hojalatería',
    icon: SheetMetalIcon,
    onClick: () => router.push('/app/productos-por-categoria/metalisteria')
  },
  {
    name: 'Estampado',
    icon: PrintedIcon,
    onClick: () => router.push('/app/productos-por-categoria/impresiones')
  },
  {
    name: 'Pintura tradicional',
    icon: PaintingTraditionalIcon,
    onClick: () => router.push('/app/productos-por-categoria/tradicional')
  }
];

const workshops = ref([
  {
    id: 'mongoId123143132',
    title: "Taller de bordado ayacuchano",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
  {
    id: 'mongoId12131431',
    title: "Taller de cerámica artesanal",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
  {
    id: 'mongoId1243132',
    title: "Taller de alfarería infantil",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
  {
    id: 'mongoId12131132',
    title: "Taller de pintura tradicional",
    image: "https://i.ytimg.com/vi/oo4lKnhKvrU/hqdefault.jpg"
  },
]);

</script>

<template>
  <main>
    <LocationBar />
    <TitleSection title="Categorías" />

    <div class="categories">
      <Categories :categories="primeCategories" />
      <Categories :categories="secondCategories" />
    </div>

    <div class="month__workshops">
      <div class="month__workshops__title">
        <DiamondSeparator class="diamond__separator" :icon="DiamondIcon" :size-em="1.7" />
        <p>Talleres del mes</p>
        <DiamondSeparator class="diamond__separator" :icon="DiamondIcon" :size-em="1.7" />
      </div>
      <div class="month__workshops__subtitle">
        <p>¡Aprende como hacerlos en estos talleres educativos!</p>
      </div>
      <div class="month__workshops">
        <MonthWorkshop v-for="workshop in workshops"
          :key="workshop.id"
          :imageUrl="workshop.image"
          :workshopTitle="workshop.title" />
          
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>
main {
  font-family: Bellota;
}

.month__workshops {
  display: flex;
  flex-direction: column;
  gap: 3em;
  margin: 0 0 5em 0;

  .diamond__separator {
    color: var(--background-secondary);
  }

  &__title {
    display: flex;
    justify-content: space-between;


    p {
      color: var(--text-contrast);
      text-wrap: nowrap;
      font-size: 2rem;
    }
  }

  &__subtitle {
    color: rgb(from var(--text-contrast) r g b / 50%);
    text-align: center;
    font-size: 1.5rem;
  }
}


.categories {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>