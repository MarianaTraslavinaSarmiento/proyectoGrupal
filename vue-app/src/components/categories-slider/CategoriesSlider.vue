<script setup>



</script>

<template>

  <main>

    <div class="category__carousel">
      <ul class="category__list">
        <li class="category__item"><a href="#" class="category__link">Textilería</a></li>
        <li class="category__item"><a href="#" class="category__link">Cerámica</a></li>
        <li class="category__item"><a href="#" class="category__link">Joyería</a></li>
        <li class="category__item"><a href="#" class="category__link">Talla en piedra</a></li>
        <li class="category__item"><a href="#" class="category__link">Tallado en madera</a></li>
        <li class="category__item"><a href="#" class="category__link">Pintura</a></li>
      </ul>
    </div>
  </main>

</template>

<style lang="scss" scoped>

.category {

  &__carousel {
    width: 100%;
    overflow-x: auto;
    margin-top: 20px;
    padding: 10px 0;
    scrollbar-width: thin;
    scrollbar-color: var(--background-primary) var(--background-primary);
    background-color: var(--background-secondary);


    &::-webkit-scrollbar {
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background: var(--background-primary);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--background-primary);

    }
  }

  &__list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }

  &__item {
    display: inline-block;
    margin: 0 10px;
  }

  &__link {
    color: var(--text-color);
    text-decoration: none;
    height: 100%;
    font-size: 16px;
    padding:  10px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: var(--background-primary);
    }
  }
}
</style>