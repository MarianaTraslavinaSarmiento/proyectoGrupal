<script setup>
import HeadBar from '@/components/head-bar/HeadBar.vue';
import Nav from '@/components/nav/Nav.vue';
import TitleSection from '@components/title-section/TitleSection.vue'

</script>

<template>
    <HeadBar />
    <main>

        <TitleSection title="Talleres y tiendas artesanales" subtitle="Tiendas de artesanías de todas partes del Perú"
            :showFilter="true" />

        <div class="workshops__container">
            <div class="item">
                <div class="item__title">
                    <h5>Arte Abedail Aller Escalante</h5>
                    <p>Cusco</p>
                </div>
                <div class="item__image">
                    <img src="/public/img/workshopOne.png" alt="">
                </div>
            </div>
            <div class="item">
                <div class="item__title">
                    <h5>Arte Abedail Aller Escalante</h5>
                    <p>Cusco</p>
                </div>
                <div class="item__image">
                    <img src="/public/img/workshopOne.png" alt="">
                </div>
            </div>
        </div>

    </main>
    <Nav />
</template>

<style lang="scss" scoped>
.workshops__container {
    font-family: Bellota;
    display: flex;
    padding: 15px 20px;
    gap: 20px;

    justify-content: center;
    align-items: center;
}

.item {
    max-width: 180px;
    color: var(--color-black);
    border-radius: 5px;

    &__title {
        background-color: var(--background-secondary);
        padding: 5px;
        border-radius: 5px 5px 0px 0px;
        font-size: 1.2rem;
        color: var(--text-color);

        h5 {
            margin: 0px;
        }

    }

}
</style>