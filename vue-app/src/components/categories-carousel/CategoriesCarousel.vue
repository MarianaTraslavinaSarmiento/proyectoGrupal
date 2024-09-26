<script setup>
import TextileIcon from "@icons/categories/TextileIcon.vue";
import CeramicsIcon from "@icons/categories/CeramicsIcon.vue";
import GoldsmithingIcon from "@icons/categories/GoldsmithingIcon.vue";
import StoneCarving from "@icons/categories/StoneCarvingIcon.vue";
import WoodCarving from "@icons/categories/WoodCarvingIcon.vue";
import EmbroideryIcon from "@icons/categories/EmbroideryIcon.vue";
import JewelryIcon from "@icons/categories/JewelryIcon.vue";
import SheetMetalIcon from "@icons/categories/SheetMetalIcon.vue";
import PaintingTraditionalIcon from "@icons/categories/PaintingTraditionalIcon.vue";
import PrintedIcon from "@icons/categories/PrintedIcon.vue";

import { ref } from "vue";

const categories = [
  {name: "Textilería", icon: TextileIcon},
  {name: "Cerámica", icon: CeramicsIcon},
  {name: "Orfebrería", icon: GoldsmithingIcon},
  {name: "Piedra", icon: StoneCarving},
  {name: "Madera", icon: WoodCarving},
  {name: "Bordado", icon: EmbroideryIcon},
  {name: "Joyeria", icon: JewelryIcon},
  {name: "Metalistería", icon: SheetMetalIcon},
  {name: "Tradicional", icon: PaintingTraditionalIcon},
  {name: "Impresiones", icon: PrintedIcon}
]

const currentCategory = ref(0);
const selectCategory = (category, index) => {
  currentCategory.value = index
  emit('selectCategory', category)
}

const props = defineProps({
  model: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['selectCategory']);

</script>

<template>
  <main>
    <div class="categories">
      <div v-for="(category, index) in categories"
       :key="category.name"
       :class="['categories__item', {'active': index === currentCategory}]"
       @click="selectCategory(category, index)">
        <div class="categories__circle">
          <component :is="category.icon" class="categories__icon" />
        </div>
        <p>{{category.name}}</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  scroll-behavior: smooth;
  padding-left: 1.7rem;
  padding-top: 1.5rem;
  scrollbar-width: none;
  padding-inline-end: 1.5rem;
  border-bottom: 2px solid var(--background-secondary);
  font-family: Bellota;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 5px;
    position: relative;
    cursor: pointer;

    p {
      font-size: 1.4rem;
      text-align: center;
      color: var(--color-black);
      padding-bottom: 1rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--background-secondary);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &.active::after {
      transform: scaleX(1);
    }
  }

  &__circle {
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }

  &__icon {
    width: 30px;
    height: 35px;
  }
}
</style>