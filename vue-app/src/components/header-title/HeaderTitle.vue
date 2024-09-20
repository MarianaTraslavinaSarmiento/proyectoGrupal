<script setup>

import Back from "@assets/img/general/Back.vue"
import DiamondHeader from "@assets/img/general/DiamondHeader.vue"
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="header__container">
        <div class="header__container__back">
            <Back class="back__icon" />
        </div>
        <div class="title">
            <span class="title__text">{{ title }}</span>
            <DiamondHeader class="title__diamond"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.header__container {
    height: 80px;
    font-family: Bellota;
    font-size: 1.7rem;
    position: relative; 

    &__back {
        position: absolute;

        .back__icon {
            width: 50px;
            cursor: pointer;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 80px;
        }
    }

    .title {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; 

        &__diamond {
            height: 70px;
            z-index: -1; 
        }

        &__text {
            color: var(--text-contrast);
            z-index: 1; 
            position: absolute; 
            left: 50%;
            transform: translateX(-50%); 
            width: 110px;  
            text-align: center;  
            font-weight: bold;
        }
    }
}




</style>