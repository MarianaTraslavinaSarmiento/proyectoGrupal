<script setup>
import Nav from '@/components/nav/Nav.vue';
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

const primeCategories = [
  {
    name: 'Textilería',
    icon: TextileIcon,
    onClick: () => console.log('Textilería clicked')
  },
  {
    name: 'Cerámica',
    icon: CeramicsIcon,
    onClick: () => console.log('Cerámica clicked')
  },
  {
    name: 'Orfebrería',
    icon: GoldsmithingIcon,
    onClick: () => console.log('Orfebrería clicked')
  },
  {
    name: 'Talla en piedra',
    icon: StoneCarving,
    onClick: () => console.log('Talla en piedra clicked')
  },
  {
    name: 'Talla en madera',
    icon: WoodCarving,
    onClick: () => console.log('Talla en madera clicked')
  }
];

const secondCategories = [
  {
    name: 'Bordado',
    icon: EmbroideryIcon,
    onClick: () => console.log('Bordado clicked')
  },
  {
    name: 'Joyería',
    icon: JewelryIcon,
    onClick: () => console.log('Joyería clicked')
  },
  {
    name: 'Hojalatería',
    icon: SheetMetalIcon,
    onClick: () => console.log('Hojalatería clicked')
  },
  {
    name: 'Estampado',
    icon: PrintedIcon,
    onClick: () => console.log('Estampado clicked')
  },
  {
    name: 'Pintura tradicional',
    icon: PaintingTraditionalIcon,
    onClick: () => console.log('Pintura tradicional clicked')
  }
];

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
        <MonthWorkshop />
      </div>
    </div>
    <Nav />

  </main>
</template>

<style lang="scss" scoped>
main {
  font-family: Bellota;
}

.month__workshops {
  margin-top: 35px;

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