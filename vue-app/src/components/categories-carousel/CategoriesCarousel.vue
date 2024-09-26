<script setup>


import Nav from '../nav/Nav.vue';
import TitleSection from '../title-section/TitleSection.vue'
import Location from '@assets/img/categories/Location.vue'
import Textile from '@assets/img/categories/Textile.vue';
import Ceramics from '@assets/img/categories/Ceramics.vue'
import Goldsmithing from '@assets/img/categories/Goldsmithing.vue'
import StoneCarving from '@assets/img/categories/StoneCarving.vue'
import WoodCarving from '@assets/img/categories/WoodCarving.vue'
import Embroidery from '@assets/img/categories/Embroidery.vue'
import Jewelry from '@assets/img/categories/Jewelry.vue'
import SheetMetal from '@assets/img/categories/SheetMetal.vue'
import PaintingTraditiona from '@assets/img/categories/PaintingTraditiona.vue'
import Printed from '@assets/img/categories/Printed.vue'

</script>

<template>

  <div class="categories">
    <div class="categories__item">
      <div class="categories__circle">
        <Textile class="categories__icon" />
      </div>
      <p>Textilería</p>
    </div>
    <div class="categories__item">
      <div class="categories__circle">
        <Ceramics class="categories__icon" />
      </div>
      <p>Cerámica</p>
    </div>
    <div class="categories__item">
      <div class="categories__circle">
        <Goldsmithing class="categories__icon" />
      </div>
      <p>Orfebrería</p>
    </div>
    <div class="categories__item">
      <div class="categories__circle">
        <StoneCarving class="categories__icon" />
      </div>
      <p>Talla en piedra</p>
    </div>
    <div class="categories__item">
      <div class="categories__circle">
        <WoodCarving class="categories__icon" />
      </div>
      <p>Talla en madera</p>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  scroll-behavior: smooth;
  margin-left: 1.7rem;
  scrollbar-width: none;
  padding-inline-end: 1.5rem;
  margin-bottom: 10px;

  &::-webkit-scrollbar {
  display: none;
}
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center ;
      gap: 5px;
      p {
        font-size: 1.6rem;
        text-align: center;
        color: var(--text-contrast);
      }
    }
    &__circle {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }
  &__icon {
    width: 35px;
    height: 40px;
  }
}
</style>