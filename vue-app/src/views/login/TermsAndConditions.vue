<script setup>

import CheckedIcon from "@/assets/icons/general/CheckedIcon.vue";
import TriangleBackground from "@/assets/img/general/TriangleBackground.vue"
import Back from "@/assets/img/general/Back.vue"

import { ref } from 'vue';
const checkedTerms = ref(false);
const checkedPolicy = ref(false);
const checkedPromotions = ref(false);



</script>
<template>
    <main class="main__container">

        <TriangleCorner class="triangle__corner " />
        <TriangleBackground class="triangle__center" />
        <div class="back">
            <Back class="back__icon" />
        </div>

        <div class="content">
            <div class="__items__terms_conditions">
                <div class="item">
                    <div>
                        <input type="checkbox" id="privacyPolicy" class="checkbox" v-model="checkedPolicy" />
                        <CheckedIcon v-if="checkedPolicy" class="icon" />
                    </div>

                    <label for="privacyPolicy" style="color: var(--background-primary)">
                        He leído y acepto la <a href="">Política de privacidad*</a>
                    </label>
                </div>
                <div class="item">
                    <div>
                        <input type="checkbox" id="termsAndsConditions" class="checkbox" v-model="checkedTerms" />
                        <CheckedIcon v-if="checkedTerms" class="icon" />
                    </div>
                    <label for="privacyPolicy" style="color: var(--background-primary)">
                        He leído y acepto la <a href="">Política de privacidad*</a>
                    </label>
                </div>
                <div class="item">
                    <div>
                        <input type="checkbox" id="promotions" class="checkbox" v-model="checkedPromotions" />
                        <CheckedIcon v-if="checkedPromotions" class="icon" />
                    </div>

                    <label for="privacyPolicy" style="color: var(--background-primary)">
                        He leído y acepto la <a href="">Política de privacidad*</a>
                    </label>
                </div>
            </div>
        </div>
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
    width: 150px;
    height: 150px;
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
    gap: 3rem;
}

.item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;

    .checkbox {
        min-width: 27px;
        min-height: 27px;
        border: 2px solid var(--color-accent);
        border-radius: 6px;
        appearance: none;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        background-color: transparent;
    }

    .icon {
        width: 16px;
        height: 16px;
        position: absolute
    }


    p {
        margin: 0;
    }

    a {
        color: var(--text-contrast);
        text-decoration: underline;
        font-weight: bold;

    }


}
</style>