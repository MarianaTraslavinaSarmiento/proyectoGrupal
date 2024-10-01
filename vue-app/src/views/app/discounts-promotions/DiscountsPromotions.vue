<script setup>

import TitleSection from '@/components/title-section/TitleSection.vue';
import CategoriesSlider from '@/components/categories-slider/CategoriesSlider.vue';
import ProductItem from '@/components/product-item/ProductItem.vue';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';
import BackgroundPattern from '@/components/background-pattern/BackgroundPattern.vue';
import { ref, computed } from 'vue';

import { useGetAllProductsWithOffers } from '@/composables/useProduct';

const { products, isLoading } = useGetAllProductsWithOffers()

const categorySelected = ref(null)
const handleFilter = (category) => {
    categorySelected.value = category
}


const filteredProducts = computed(() => {
  if (!categorySelected.value) return products.value;

  return products.value.filter((product) => {
    return product.category === categorySelected.value;
  });
});




</script>

<template>

    <main>


        <BackgroundPattern/>
        <TitleSection 
        title="Descuentos y promociones" 
        subtitle="En cientos de artesanías" />
        <CategoriesSlider @categorySelected="handleFilter" />

        <div v-if="isLoading">
            <LoadingScreen style="min-height: 60dvh;"/>
        </div>
        <div v-else class="container">
            <ProductItem v-for="product in filteredProducts"
            :productName="product.name"
            :productPrice="product.price"
            :imageUrl="product.images_url"
            :productCompany="product.shop.name"
            :offer="product.offer"
            />
        </div>

    </main>




</template>

<style lang="scss" scoped>

main {
    font-family: Bellota;
}


.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 100%;
    margin: 0 auto;
    padding: 2.5rem 3rem 7rem 3rem;
}


</style>