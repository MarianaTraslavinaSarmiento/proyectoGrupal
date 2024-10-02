<script setup>
import CategoriesCarousel from "@components/categories-carousel/CategoriesCarousel.vue";
import HeaderTitle from "@/components/header-title/HeaderTitle.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import FilterIcon from "@icons/general/FilterIcon.vue";
import { reactive, ref, watch } from "vue";
import ProductItem from "@/components/product-item/ProductItem.vue";
import { useGetAllProducts } from "@/composables/useProduct";
import { useRoute } from "vue-router";

const { products: allProducts, isLoading } = useGetAllProducts()

const products = ref([])

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
  if (!allProducts.value) return;
  
  const dbCategory = categoryMap[routeCategory];
  if (dbCategory) {
    products.value = allProducts.value.filter(product => product.category === dbCategory);
  } else {
    products.value = allProducts.value;
  }
}

watch(
  () => route.params.category,
  (newCategory) => {
    if (newCategory in categoryMap) {
      filterProducts(newCategory);
    } else {
      products.value = allProducts.value;
    }
  },
  { immediate: true }
)

watch(
  allProducts,
  (newProducts) => {
    if (newProducts) {
      filterProducts(route.params.category);
    }
  },
  { immediate: true }
)
</script>

<template>
  <main>
    <HeaderTitle title="Categorías" customBackRoute="/app/inicio" />
    <CategoriesCarousel :routeParamName="'category'" />

    <div class="filter__products">
      <SearchBar 
        placeholder="Buscar producto o palabra clave..." />
      <FilterIcon />
    </div>

    <div class="container">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product-price="product.price"
        :id="product._id"
        :offer="product.offer"
        :product-name="product.name"
        :image-url="product.images_url"
        :product-company="product.shop.name"
      />
    </div>
  </main>
</template>

<style scoped>
main {
    font-family: var(--font-bellota);
}

.filter__products {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 35px;
    padding-inline: 3rem;
    gap: 1.5rem;
    color: var(--color-accent);
}

.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 3rem 0rem 3rem;
}

.product {
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }

    .product__info {
        padding: 10px;
        flex-grow: 1;
        display: flex;
        font-size: 14px;
        background-color: var(--background-secondary);
        flex-direction: column;
        justify-content: space-between;
        padding-block: 1.5rem;

        .product__name {
            font-weight: bold;
            margin: 0 0 5px 0;
            line-height: 1.2;
            font-size: 14px;
        }

        .product__price {
            font-weight: bold;
            margin: 0;
        }
    }
}
</style>
