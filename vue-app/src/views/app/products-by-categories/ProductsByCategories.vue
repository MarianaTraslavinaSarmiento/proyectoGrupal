<script setup>
import CategoriesCarousel from "@components/categories-carousel/CategoriesCarousel.vue";
import HeaderTitle from "@/components/header-title/HeaderTitle.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import FilterIcon from "@icons/general/FilterIcon.vue";
import { reactive } from "vue";

// const categories = [
//   {name: "Textilería", icon: Textile},
//   {name: "Cerámica", icon: Ceramics},
//   {name: "Orfebrería", icon: Goldsmithing},
//   {name: "Piedra", icon: StoneCarving},
//   {name: "Madera", icon: WoodCarving},
//   {name: "Bordado", icon: Embroidery},
//   {name: "Joyeria", icon: Jewelry},
//   {name: "Metalistería", icon: SheetMetal},
//   {name: "Tradicional", icon: PaintingTraditiona},
//   {name: "Impresiones", icon: Printed},
// ]

let products = reactive([
    {
        name: "Camiseta",
        category: "Textilería"
    },
    {
        name: "Camiseta",
        category: "Cerámica"
    },
    {
        name: "Camiseta",
        category: "Orfebrería"
    }
])

console.log("Productos:", products)

const filterProducts = (category) => {
    let filtered = products.filter(product => product.category == category.name)
    console.log(filtered)
}

</script>

<template>
    <main>
        <HeaderTitle title="Categorías" />
        <CategoriesCarousel :routeParamName="'category'" @selectCategory="filterProducts" />

        <div class="filter__products">
            <SearchBar 
            placeholder = "Buscar producto o palabra clave..." />
            <FilterIcon />
        </div>

        <div class="container">
            <div class="product">
                <img src="/public/img/camiseta.png" alt="Tapiz Chumpi Andino III" />
                <div class="product__info">
                    <h4 class="product__name">Tapiz Chumpi Andino</h4>
                    <p class="product__price">S/ 600</p>
                    <p class="product__description">Taller Awaq Ayllus</p>
                </div>
            </div>

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
