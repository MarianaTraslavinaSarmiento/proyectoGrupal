<script setup>

import CheckedIcon from "@assets/icons/general/CheckedIcon.vue";
import SquareBackground from "@assets/img/general/SquareBackground.vue"
import BackIcon from '@icons/general/BackIcon.vue'
import DropdownArrow from "@assets/img/general/DropdownArrow.vue"

import { ref } from 'vue';
const checkedTerms = ref(false);
const checkedPolicy = ref(false);
const checkedPromotions = ref(false);



</script>
<template>
    <main class="main__container">

        <SquareBackground class="triangle__corner " />
        <SquareBackground class="triangle__center" />
        <div class="back">
            <BackIcon class="back__icon" />
        </div>

        <div class="content">
            <div class="__items__terms_conditions">
                <div class="item">
                    <label class="custom__checkbox">
                        <input type="checkbox" v-model="checkedPolicy" />
                        <span class="checkmark">
                            <CheckedIcon v-if="checkedPolicy" class="icon" />
                        </span>
                        <span class="label__text">
                            He leído y acepto la <a href="">Política de privacidad*</a>
                        </span>
                    </label>
                </div>
                <div class="item">
                    <label class="custom__checkbox">
                        <input type="checkbox" v-model="checkedTerms" />
                        <span class="checkmark">
                            <CheckedIcon v-if="checkedTerms" class="icon" />
                        </span>
                        <span class="label__text">
                            He leído y acepto los <a href="">Términos y condiciones*</a>
                        </span>
                    </label>
                </div>
                <div class="item">
                    <label class="custom__checkbox">
                        <input type="checkbox" v-model="checkedPromotions" />
                        <span class="checkmark">
                            <CheckedIcon v-if="checkedPromotions" class="icon" />
                        </span>
                        <span class="label__text">
                            Acepto que me envíen promociones y eventos a mi correo electrónico
                        </span>
                    </label>
                </div>
            </div>
        </div>

        <span v-show="checkedPolicy && checkedTerms" class="register_now">
            <DropdownArrow class="arrow_icon"/>
            <a href="">Registrarse</a>
        </span>
    </main>
</template>
  
<style lang="scss" scoped>
.main__container {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    font-family: Bellota;
    font-size: 1.5rem;
}

.triangle__center {
    position: absolute;
    left: 50%;
    top: 77%;
    left: 50%;
    transform: translate(-100%, -50%);
    width: 450px;
    height: 450px;
    z-index: -1;
}

.triangle__corner {
    position: absolute;
    top: 0;
    right: 0;
    left: 290px;
    transform: translateY(-50%);
    width: 280px;
    height: 280px;
    z-index: -1;
    
}

.back {
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

.content {
    padding: 14rem 3rem 1rem 4rem;
    max-width: 600px;
}

.__items__terms_conditions {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.custom__checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        border: 2px solid var(--color-accent);
        border-radius: 6px;
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
    }

    .label__text {
        color: var(--background-primary);
        margin-left: 10px;
    }

    a {
        color: var(--text-contrast);
        text-decoration: underline;
        font-weight: bold;
    }

}

.register_now {
    color: var(--text-contrast);
    display: flex;
    height: 20px;
    position: absolute;
    bottom: 3rem;
    right: 4rem;

    .arrow_icon {
        width: 15px;
    }

    a {
        text-decoration: underline;
        font-size: 1.7rem;
        margin-left: 10px;
    }

}
</style>