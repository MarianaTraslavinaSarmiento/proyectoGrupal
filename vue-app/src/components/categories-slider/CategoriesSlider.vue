<script setup>

const emit = defineEmits(['categorySelected'])

const handleEmitCategory = (category) => {
  emit('categorySelected', category)
}

</script>

<template>
  <main>
    <div class="category__carousel">
      <ul class="category__list">
        <li class="category__item" @click="handleEmitCategory('Textilería')">
          <p>Textilería</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Cerámica')">
          <p>Cerámica</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Joyería')">
          <p>Joyería</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Talla en piedra')">
          <p>Talla en piedra</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Tallado en madera')">
          <p>Tallado en madera</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Pintura')">
          <p>Pintura</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Orfebrería')">
          <p>Orfebrería</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Bordado')">
          <p>Bordado</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Hojalatería')">
          <p>Hojalatería</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Estampado')">
          <p>Estampado</p>
        </li>
        <li class="category__item" @click="handleEmitCategory('Pintura tradicional')">
          <p>Pintura tradicional</p>
        </li>
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
    background-color: var(--background-secondary);
  }

  &__list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    white-space: nowrap;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px; 
    height: 100%; 
    padding: 10px;
    padding-inline: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover,
    &:focus {
      background-color: var(--background-primary);
    }
  }
}
</style>