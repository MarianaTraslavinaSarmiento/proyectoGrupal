<script setup>
import HeadBar from '@/components/head-bar/HeadBar.vue';
import Nav from '@/components/nav/Nav.vue';
import TitleSection from '@components/title-section/TitleSection.vue'
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
import HomeImage from '@/assets/img/general/HomeImage.vue';
import DiamondIcon from '@/assets/icons/general/DiamondIcon.vue';
import DiamondSeparator from '@/components/diamond-separator/DiamondSeparator.vue';

</script>

<template>
  <main>
    <div class="search__location">
      <div class="location">
        <Location class="location__icon" />
        <input type="text" placeholder="Ubicación de entrega actual" class="location__input" />
      </div>
    </div>
    <TitleSection title="Categorías" />

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

    <div class="categories">
      <div class="categories__item">
        <div class="categories__circle">
          <Embroidery class="categories__icon" />
        </div>
        <p>Bordado</p>
      </div>
      <div class="categories__item">
        <div class="categories__circle">
          <Jewelry class="categories__icon" />
        </div>
        <p>Joyería</p>
      </div>
      <div class="categories__item">
        <div class="categories__circle">
          <SheetMetal class="categories__icon" />
        </div>
        <p>Hojalatería</p>
      </div>
      <div class="categories__item">
        <div class="categories__circle">
          <Printed class="categories__icon" />
        </div>
        <p>Estampado</p>
      </div>
      <div class="categories__item">
        <div class="categories__circle">
          <PaintingTraditiona class="categories__icon" />
        </div>
        <p>Pintura tradicional</p>
      </div>

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
      <div class="month__workshops__img">
        <HomeImage class="home__img"/>
      </div>
    </div>

    <div class="month__workshops">
      <div class="month__workshops__title">
        <DiamondSeparator class="diamond__separator" :icon="DiamondIcon" :size-em="2.3" />
        <p>Talleres del mes</p>
        <DiamondSeparator class="diamond__separator" :icon="DiamondIcon" :size-em="2.3" />
      </div>
      <div class="month__workshops__subtitle">
        <p>¡Aprende como hacerlos en estos talleres educativos!</p>
      </div>
      <div class="month__workshops__figure">
        <img src="" alt="">
      </div>
    </div>

    <Nav />

  </main>
</template>

<style lang="scss"  scoped>
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

  &__img {

    display: flex;
    justify-content: center;
    height: 345px;
    width: 100%;
    overflow: hidden;
    position: relative;

    .home__img {
      width: 75%;
      left: 15%;
      height: 455px;
      color: var(--text-contrast)

    }
  }
}


.search__location {
  padding: 15px 0px 0px 0px;
  font-size: 1.5rem;
}

.location {
  display: flex;
  margin-inline: 25px;
  background-color: var(--background-secondary);
  align-items: center;
  padding: 5px;
  border-radius: 5px;


  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--background-base);
    min-width: 20px;
    height: 30px;
  }

  &__input {
    width: 90%;
    background-color: var(--background-secondary);
    height: 30px;
    background: none;
    border: none;

    &::placeholder {
      color: rgb(from var(--text-color) r g b / 30%);
    }

  }

}


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
    /* Chrome, Safari, Edge */
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
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