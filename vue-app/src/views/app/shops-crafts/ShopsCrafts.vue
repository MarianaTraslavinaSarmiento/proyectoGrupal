<script setup>
import HeadBar from '@/components/head-bar/HeadBar.vue';
import Nav from '@/components/nav/Nav.vue';
import TitleSection from '@components/title-section/TitleSection.vue'
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue'
import { useGetAllShops } from '@/composables/useShop';
import router from '@/router';
import { computed } from 'vue';

const { shops, isLoading } = useGetAllShops();

const handleGoShop = (id) => {
    router.push('/app/shops-crafts/' + id);
}

</script>

<template>
    <main>

        <TitleSection title="Talleres y tiendas artesanales" subtitle="Tiendas de artesanías de todas partes de Colombia"
            :showFilter="true" />

        <div v-if="isLoading">
            <LoadingScreen class="loading" style="min-height: 60dvh;" />
        </div>
        <div v-else class="workshops__container">
            <div @click="handleGoShop(shop._id)" v-for="shop in shops" :key="shop._id" class="item">
                <div class="item__title">
                    <h5>{{ shop.name }}</h5>
                    <p>{{ shop.location }}</p>
                </div>
                <div class="item__image">
                    <img :src="shop.image_url" alt="">
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.workshops__container {
    font-family: Bellota;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px 20px;
    gap: 20px;
    margin-bottom: 60px;

    justify-content: center;
    align-items: center;
    height: auto;
}

.text__subtitle{
    font-size: 1.3rem;
}

.item {
    color: var(--color-black);
    border-radius: 5px;
    height: 180px;
    display: flex;
    flex-direction: column;

    &__title {
        background-color: var(--background-secondary);
        padding: 5px;
        border-radius: 5px 5px 0px 0px;
        font-size: 1.2rem;
        color: var(--text-color);
        height: auto;

        h5 {
            margin: 0px;
        }
    }

    &__image {
        height: 100px;
        flex-grow: 1;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 0px 0px 5px 5px;
        }
    }

}
</style>