<script setup>

import TitleSection from '@/components/title-section/TitleSection.vue';
import CategoriesSlider from '@/components/categories-slider/CategoriesSlider.vue';
import ProductItem from '@/components/product-item/ProductItem.vue';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';
import BackgroundPattern from '@/components/background-pattern/BackgroundPattern.vue';


import { useGetAllProductsWithOffers } from '@/composables/useProduct';

const { products, isLoading } = useGetAllProductsWithOffers()

</script>

<template>

    <main>


        <BackgroundPattern/>
        <TitleSection 
        title="Descuentos y promociones" 
        subtitle="En cientos de artesanías" />
        <CategoriesSlider />

        <div v-if="isLoading">
            <LoadingScreen style="min-height: 60dvh;"/>
        </div>
        <div v-else class="container">
            <ProductItem v-for="product in products"
            :productName="product.name"
            :productPrice="product.price"
            :productCompany="product"
            :showDelete="false"
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
    padding: 2.5rem 3rem 0rem 3rem;
}


</style>