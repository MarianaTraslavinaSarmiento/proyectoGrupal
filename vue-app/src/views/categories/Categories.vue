<script setup>
import HeadBar from '@/components/head-bar/HeadBar.vue';
import Nav from '@/components/nav/Nav.vue';
import TitleSection from '@components/title-section/TitleSection.vue'
import Location from '@assets/img/categories/Location.vue'

</script>

<template>

    <main>
        <HeadBar />

        <div class="search__location">
          <div class="location">
            <Location class="location__icon" />
            <input  type="text" placeholder="Ubicación de entrega actual" class="location__input" />
          </div>
        </div>
        <TitleSection
        title="Categorías"
        />
        <Nav/>

    </main>

</template>

<style lang="scss"  scoped>


.search__location {
  padding: 15px 0px 0px 0px;  
  font-family: Bellota;
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
    min-width: 30px;
    height: 30px;
  }
  &__input { 
    width: 90%;
    background-color: var(--background-secondary);
    height: 30px;
    background: none;
    border: none;

  }


  ::placeholder {
    color: var(--text-color);
  }
}



</style>