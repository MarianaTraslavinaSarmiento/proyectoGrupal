<script setup>
import BackButton from '@/components/back-button/BackButton.vue';
import TitleHandicrafts from '@/components/title-handicrafts/TitleHandicrafts.vue';

</script>

<template>

    <main>


        <div class="handicraft__img">
            <BackButton  />
            <img src="" alt="">
        </div>


        <TitleHandicrafts />


    </main>


</template>

<style lang="scss" scoped>

.handicraft__img {
    width: 100%;
    height: 350px;
    background-color: red;
}



</style>
