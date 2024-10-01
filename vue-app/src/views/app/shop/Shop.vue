<script setup>
import BackButton from '@/components/back-button/BackButton.vue';
import Diamond from '@/assets/img/general/Diamond.vue';
import DiamondHeader from '@/assets/img/general/DiamondHeader.vue';
import ChatIcon from '@icons/general/ChatIcon.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import FilterIcon from '@/assets/icons/general/FilterIcon.vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';

</script>

<template>

    <main>

        <div class="handicraft__img">
            <BackButton class="back__button" />
            <img src="/public/img/camiseta.png" alt="Camiseta artesanal">
            <div class="workshop__title">
                <h4>Tapiz Chumpi Andino III</h4>
            </div>
        </div>

        <div class="title">

            <Diamond class="diamond__icon" />
            <p>Conoce la historia detrás de este taller artesanal y conoce como producen sus textiles</p>
            <Diamond class="diamond__icon__right" />

        </div>

        <div class="title__container">

            <div class="header__title">
                <HeaderTitle
                title = "Artesanías"
                :hideBackButton=true
                 />
                <ChatIcon class="header__title__chat" />
            </div>
        </div>


        <div class="filter__products">
            <SearchBar 
            placeholder = "Buscar producto o palabra clave..." />
            <FilterIcon style="color: var(--color-accent)" />
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

    .workshop__title {
        position: absolute;
        z-index: 10;
        top: 10px;
        left: 50%;
        width:55%;
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