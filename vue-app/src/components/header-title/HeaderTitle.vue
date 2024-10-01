<script setup>
import DiamondHeader from "@assets/img/general/DiamondHeader.vue"
import BackButton from '@components/back-button/BackButton.vue'


const props = defineProps({
    title: {
        type: String,
        required: false
    },
    hideDiamond: {
        type: Boolean,
        default: false
    },
    customBackRoute: {
        type: String,
    },
    hideBackButton: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="header__container">
        <div class="header__container__back">
            <BackButton v-if="!hideBackButton" class="back__icon" :customBackRoute="customBackRoute" />
        </div>
        <div v-if="!hideDiamond" class="title">
            <span class="title__text">{{ title }}</span>
            <DiamondHeader class="title__diamond"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.header__container {
    height: 80px;
    font-family: var(--font-bellota);
    font-size: 1.7rem;
    position: relative; 

    &__back {
        position: absolute;
        z-index: 5;
        transform: translate(0%);
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