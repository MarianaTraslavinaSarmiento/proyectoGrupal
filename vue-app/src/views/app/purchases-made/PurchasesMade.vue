<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import ChatIcon from '@/assets/icons/general/ChatIcon.vue';
</script>

<template>
    <main>
        <HeaderTitle title="Compras realizadas" />
        <div class="carousel__container">
            <div class="carousel__item">
                <div class="carousel__image">
                    <img src="" alt="">
                </div>
                <div class="carousel__details">
                    <h2 class="carousel__title">Vasija pequeña con diseño de flor</h2>
                    <p class="carousel__price">S/.50</p>
                    <p class="carousel__dimensions">13x10 cm, 2 KG</p>
                    <p class="carousel__producer">Asoc. de artesanos productores de Chazuta</p>
                    <button class="carousel__button">Ver seguimiento del producto</button>
                </div>
                <ChatIcon class="carousel__chat__icon" />
            </div>

            <div class="carousel__item">
                <div class="carousel__image">
                    <img src="" alt="">
                </div>
                <div class="carousel__details">
                    <h2 class="carousel__title">Vasija pequeña con diseño de flor</h2>
                    <p class="carousel__price">S/.50</p>
                    <p class="carousel__dimensions">13x10 cm, 2 KG</p>
                    <p class="carousel__producer">Asoc. de artesanos productores de Chazuta</p>
                    <button class="carousel__button">Ver seguimiento del producto</button>
                </div>
                <ChatIcon class="carousel__chat__icon" />
            </div>


        </div>
        
    </main>
</template>

<style lang="scss" scoped>
main {
    font-family: Bellota;
}

.carousel {
    &__container {
        max-height: 400px;
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
            height: auto;
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
        color:  var(--text-color);
        border: none;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #f0f0f0;
        }
    }
}
</style>