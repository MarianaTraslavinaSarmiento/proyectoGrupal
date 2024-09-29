<script setup>
import BackButton from '@/components/back-button/BackButton.vue';



</script>

<template>

    <main>

        <div class="handicraft__img">
            <BackButton class="back__button" />
            <img src="/public/img/camiseta.png" alt="Camiseta artesanal">
        </div>

        


    </main>





</template>

<style lang="scss" scoped>

main {
    font-family: Bellota
}

.handicraft__img {
    position: relative;
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
        z-index: 10;
    }
}


</style>