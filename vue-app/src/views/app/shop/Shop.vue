<script setup>
import BackButton from '@/components/back-button/BackButton.vue';
import Diamond from '@/assets/img/general/Diamond.vue';
import DiamondHeader from '@/assets/img/general/DiamondHeader.vue';
import ChatIcon from '@icons/general/ChatIcon.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import FilterIcon from '@/assets/icons/general/FilterIcon.vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import { useRoute } from 'vue-router';
import { useGetOneShop } from '@/composables/useShop'
import { useGetAllProducts } from '@/composables/useProduct';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';
import ProductItem from '@/components/product-item/ProductItem.vue';

const route = useRoute();

const { shop, isLoading: isLoadingShop } = useGetOneShop(route.params.id)
const { products, isLoading: isLoadingProducts } = useGetAllProducts('?shop_id=' + route.params.id)



</script>

<template>

    <main>

        
        <BackButton />

        <div v-if="isLoadingShop">
            <LoadingScreen />
        </div>

        <div v-else class="handicraft__img">
            <img :src="shop.image_url" alt="">
            <div class="workshop__title">
                <h4>{{ shop.name }}</h4>
            </div>
        </div>

        <div class="title">

            <Diamond class="diamond__icon" />
            <p>Conoce la historia detrás de este taller artesanal y conoce como producen sus artesanias</p>
            <Diamond class="diamond__icon__right" />

        </div>

        <div class="title__container">

            <div class="header__title">
                <HeaderTitle title="Artesanías" :hideBackButton=true />
                <ChatIcon class="header__title__chat" />
            </div>
        </div>


        <div class="filter__products">
            <SearchBar placeholder="Buscar producto o palabra clave..." />
            <FilterIcon style="color: var(--color-accent)" />
        </div>


        <div v-if="isLoadingProducts || isLoadingShop">
            <LoadingScreen style="min-height: 60dvh;" />
        </div>
        <div v-else class="container">
            <ProductItem v-for="product in products" :productName="product.name" :productPrice="product.price"
                :imageUrl="product.images_url" :productCompany="shop.name" :id="product._id"/>
        </div>


    </main>


</template>

<style lang="scss" scoped>
main {
    font-family: Bellota
}


.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 100%;
    margin: 0 auto;
    padding: 2.5rem 3rem 7rem 3rem;
}

.handicraft__img {
    width: 100%;
    height: 250px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .back__button {
        position: absolute;
    }

    .workshop__title {
        position: absolute;
        z-index: 10;
        top: 10px;
        left: 50%;
        width: 55%;
        transform: translate(-50%, -50%);
        color: var(--text-color);
        font-size: 1.7rem;
        font-weight: bold;
        background-color: var(--background-secondary);
        padding: 10px;
        border-radius: 5px;
        text-align: center;
    }
}


.title {
    background-color: var(--background-primary);
    height: 70px;
    color: var(--text-color);
    position: relative;

    .diamond__icon {
        width: 50px;
        height: 50px;
        top: 10px;
        position: absolute;
        transform: translateX(-50%);
    }

    p {
        margin-inline: 30px;
        font-size: 1.7rem;
        font-weight: bold;
        position: relative;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        text-decoration: underline;
    }

    .diamond__icon__right {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 10px;
        transform: translateX(50%);
    }

}

.title__container {

    position: relative;
    margin-block: 15px;

    .header__title {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &__chat {
            position: absolute;
            right: 10px;
            z-index: 1;
            color: var(--color-accent);
            width: 50px;
            height: 50px;
        }
    }


}

.filter__products {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height: 35px;
    padding-inline: 3rem;
    gap: 1.5rem;
}
</style>