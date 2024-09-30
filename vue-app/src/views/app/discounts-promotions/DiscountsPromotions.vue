<script setup>

import TitleSection from '@/components/title-section/TitleSection.vue';
import CategoriesSlider from '@/components/categories-slider/CategoriesSlider.vue';
import ProductItem from '@/components/product-item/ProductItem.vue';

</script>

<template>

    <main>

        <TitleSection 
        title="Descuentos y promociones" 
        subtitle="En cientos de artesanías" />
        <CategoriesSlider />
        <div class="container">

            <ProductItem 
            productName="Talla en piedra"
            productPrice="S/ 100.00"
            productCompany="Talla en piedra"
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