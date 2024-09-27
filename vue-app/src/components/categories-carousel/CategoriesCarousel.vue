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
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

const categories = [
  { name: "Textilería", icon: TextileIcon, alias: "textileria" },
  { name: "Cerámica", icon: CeramicsIcon, alias: "ceramica" },
  { name: "Orfebrería", icon: GoldsmithingIcon, alias: "orfebreria" },
  { name: "Piedra", icon: StoneCarving, alias: "piedra" },
  { name: "Madera", icon: WoodCarving, alias: "madera" },
  { name: "Bordado", icon: EmbroideryIcon, alias: "bordado" },
  { name: "Joyeria", icon: JewelryIcon, alias: "joyeria" },
  { name: "Metalistería", icon: SheetMetalIcon, alias: "metalisteria" },
  { name: "Tradicional", icon: PaintingTraditionalIcon, alias: "tradicional" },
  { name: "Impresiones", icon: PrintedIcon, alias: "impresiones" }
];

const currentCategory = ref(0);
const categoriesRef = ref(null);
const route = useRoute();
const router = useRouter();

const props = defineProps({
  routeParamName: {
    type: String,
    required: true,
    default: 'category'
  },
  model: {
    type: Object,
    required: true
  }
});

const selectCategory = (category, index) => {
  currentCategory.value = index;

  const newRoute = {
    ...route,
    params: {
      ...route.params,
      [props.routeParamName]: category.alias
    }
  };

  router.push(newRoute);
  scrollToCategory(index);
};

const updateCategoryFromRoute = () => {
  const categoryAlias = route.params[props.routeParamName];
  const index = categories.findIndex(cat => cat.alias === categoryAlias);
  if (index !== -1) {
    currentCategory.value = index;
    nextTick(() => scrollToCategory(index));
  }
};

const scrollToCategory = (index) => {
  if (categoriesRef.value) {
    const categoryElements = categoriesRef.value.querySelectorAll('.categories__item');
    if (categoryElements[index]) {
      const containerWidth = categoriesRef.value.offsetWidth;
      const scrollPosition = categoryElements[index].offsetLeft - (containerWidth / 2) + (categoryElements[index].offsetWidth / 2);
      categoriesRef.value.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }
};

onMounted(() => {
  updateCategoryFromRoute();
});

watch(() => route.params[props.routeParamName], updateCategoryFromRoute);
</script>

<template>
  <main>
    <div class="categories" ref="categoriesRef">
      <div v-for="(category, index) in categories" :key="category.name"
        :class="['categories__item', { 'active': index === currentCategory }]" @click="selectCategory(category, index)">
        <div class="categories__circle">
          <component :is="category.icon" class="categories__icon" />
        </div>
        <p>{{ category.name }}</p>
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