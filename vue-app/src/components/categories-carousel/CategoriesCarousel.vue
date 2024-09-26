<script setup>
import Nav from "../nav/Nav.vue";
import TitleSection from "../title-section/TitleSection.vue";
import Location from "@assets/img/categories/Location.vue";
import Textile from "@assets/img/categories/Textile.vue";
import Ceramics from "@assets/img/categories/Ceramics.vue";
import Goldsmithing from "@assets/img/categories/Goldsmithing.vue";
import StoneCarving from "@assets/img/categories/StoneCarving.vue";
import WoodCarving from "@assets/img/categories/WoodCarving.vue";
import Embroidery from "@assets/img/categories/Embroidery.vue";
import Jewelry from "@assets/img/categories/Jewelry.vue";
import SheetMetal from "@assets/img/categories/SheetMetal.vue";
import PaintingTraditiona from "@assets/img/categories/PaintingTraditiona.vue";
import Printed from "@assets/img/categories/Printed.vue";
import { ref } from "vue";

const categories = [
  {name: "Textilería", icon: Textile},
  {name: "Cerámica", icon: Ceramics},
  {name: "Orfebrería", icon: Goldsmithing},
  {name: "Piedra", icon: StoneCarving},
  {name: "Madera", icon: WoodCarving},
  {name: "Bordado", icon: Embroidery},
  {name: "Joyeria", icon: Jewelry},
  {name: "Metalistería", icon: SheetMetal},
  {name: "Tradicional", icon: PaintingTraditiona},
  {name: "Impresiones", icon: Printed},
]

const currentCategory = ref(0);
const selectCategory = (index) => {
  currentCategory.value = index
}

</script>

<template>
  <main>
    <div class="categories">
      <div v-for="(category, index) in categories"
       :key="category.name"
       :class="['categories__item', {'active': index === currentCategory}]"
       @click="selectCategory(index)">
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