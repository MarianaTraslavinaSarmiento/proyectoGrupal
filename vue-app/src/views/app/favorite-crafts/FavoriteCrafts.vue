<script setup>

import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import CategoriesCarousel from '@/components/categories-carousel/CategoriesCarousel.vue';
import ProductItem from '@/components/product-item/ProductItem.vue';
import { ref, watch, reactive } from 'vue';
import { useRoute } from 'vue-router';

import { useGetAllFavoriteProducts } from '@/composables/useProduct';


import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const { favoriteProducts, isLoading } = useGetAllFavoriteProducts();

const products = ref([]);

const route = useRoute();

const categoryMap = reactive({
    'textileria': 'Textileria',
    'ceramica': 'Ceramica',
    'orfebreria': 'Orfebrería',
    'piedra': 'Talla en piedra',
    'madera': 'Talla en madera',
    'bordado': 'Bordado',
    'joyeria': 'Joyería',
    'metalisteria': 'Hojalatería',
    'tradicional': 'Pintura tradicional',
    'impresiones': 'Estampado'
});

const filterProducts = (routeCategory) => {


    if (!favoriteProducts.value) return;

    const dbCategory = categoryMap[routeCategory];
    if (dbCategory) {
        products.value = favoriteProducts.value.filter(product => product.category === dbCategory);
    } else {
        products.value = favoriteProducts.value;
    }
};

// Observar cambios en la categoría de la ruta
watch(
    () => route.params.category,
    (newCategory) => {
        if (!newCategory) {
            products.value = favoriteProducts.value;
        }
        
        if (newCategory in categoryMap) {
            filterProducts(newCategory);
        } else {
            products.value = favoriteProducts.value;
        }
    },
    { immediate: true }
);

// Observar cambios en los productos favoritos
watch(
    favoriteProducts,
    (newProducts) => {
        if (newProducts) {
            filterProducts(route.params.category);
        }
    },
    { immediate: true }
);

// Observar cambios en userStore.user.favorites
watch(
    () => userStore.user.favorites, // Observa los cambios en los favoritos del usuario
    (newFavorites) => {
        if (newFavorites) {
            // Actualizar la lista de productos filtrados en función de los favoritos
            filterProducts(route.params.category);
        }
    },
    { deep: true } // Observa cambios profundos en el array de favoritos
);

</script>


<template>
    <main>

        <HeaderTitle customBackRoute="/app/home" title="Tus artesanías favoritas" />

        <CategoriesCarousel :routeParamName="'category'" />

        <div class="container">

            <ProductItem v-for="product in products" 
            :key="product.id" 
            :productName="product.name"
            :productPrice="product.price" 
            :id="product._id" 
            :imageUrl="product.images_url"
            :productCompany="product.shop.name" 
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