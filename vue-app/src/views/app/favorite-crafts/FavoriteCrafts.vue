<script setup>

import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import CategoriesCarousel from '@/components/categories-carousel/CategoriesCarousel.vue';
import ProductItem from '@/components/product-item/ProductItem.vue';


</script>

<template>
    <main>

        <HeaderTitle title="Tus artesanías favoritas" />

        <CategoriesCarousel />

        <div class="container">

            <ProductItem 
            :showDiscount="false"
            :showDiscountText="false"
            productName="Talla en piedra" 
            productPrice="S/ 100.00" 
            productCompany="Talla en piedra"
            :showDelete="true" />

        </div>
    </main>
</template>

<style scoped>

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