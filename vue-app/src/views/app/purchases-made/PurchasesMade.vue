<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import ChatIcon from '@/assets/icons/general/ChatIcon.vue';
import { useGetAllPurchases } from '@/composables/usePurchase';
import { useUserStore } from '@/stores/user';
import { formatoPesosColombianos } from '@/utils/formatMoney';
import ProductItem from '@/components/product-item/ProductItem.vue';
import { useGetAllProducts } from '@/composables/useProduct';

const userStore = useUserStore();
const { purchases, isLoading } = useGetAllPurchases(userStore.userInfo._id);
const { products } = useGetAllProducts()

</script>

<template>
    <main>
        <HeaderTitle title="Compras realizadas" />
        <div class="carousel__container">
            <div v-for="product in purchases" :key="product._id" class="carousel__item">
                <div class="carousel__image">
                    <img :src="product.images_url" alt="">
                </div>
                <div class="carousel__details">
                    <h2 class="carousel__title">{{ product.name }}</h2>
                    <p class="carousel__price">{{ formatoPesosColombianos(product.price) }}</p>
                    <p class="carousel__dimensions">{{ product.size }}, {{ product.weight }}</p>
                    <p class="carousel__producer">{{ product.shop.name }}</p>
                    <button class="carousel__button">Ver seguimiento del producto</button>
                </div>
                <ChatIcon class="carousel__chat__icon" />
            </div>
        </div>

        <p class="follow__more">Sigue viendo más artesanías</p>

        <div class="container__carousel">

            <ProductItem v-for="product in products" 
            :key="product.id" 
            :productPrice="product.price" 
            :id="product._id"
            :productName="product.name" 
            :imageUrl="product.images_url"
            :productCompany="product.shop.name" />

        </div>

    </main>
</template>

<style lang="scss" scoped>
main {
    font-family: Bellota;
}

.carousel {
    &__container {
        max-height: 350px;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &::-webkit-scrollbar {
            display: none;
        }

        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    &__item {
        display: flex;
        max-height: 150px;
        background-color: var(--background-secondary);
        border-radius: 10px;
        padding: 20px;
        color: var(--text-color);
        position: relative;
    }

    &__chat__icon {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
    }

    &__image {
        flex: 0 0 30%;
        margin-right: 20px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }

    &__details {
        flex: 0.87;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
    }

    &__title {
        margin: 0 0 3px 0;
        font-size: 13px;
    }

    &__price {
        margin-bottom: 5px;
    }

    &__dimensions,
    &__producer {
        margin-bottom: 5px;
    }



    &__button {
        margin-top: auto;
        background-color: var(--background-primary);
        color: var(--text-color);
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

    }

}


.follow__more {
    color: var(--text-contrast);
    font-size: 1.8rem;
    font-weight: bold;
    padding: 2rem;
}

.container__carousel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 3rem 0rem 3rem;
}
</style>