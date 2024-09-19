<script setup>

import CheckedIcon from "@/assets/icons/general/CheckedIcon.vue";

</script>
<template>
    <main class="main__container">
        <div class="triangle__center"></div>
        <div class="triangle__corner"></div>
        <div class="back__icon">
            <img src="@/assets/img/general/back.png" alt="Back">
        </div>

        <div class="content">
            <div class="__items__terms_conditions">
                <div class="item">
                    <div class="checkbox">
                        <CheckedIcon class="checked__icon"/>
                    </div>
                    <p style="color: var(--background-primary)">He leído y acepto la <a href="">Política de privacidad*</a>
                    </p>
                </div>
                <div class="item">
                    <div class="checkbox">
                        <CheckedIcon class="checked__icon"/>
                    </div>
                    <p style="color: var(--background-primary)">He leído y acepto los <a href="">Términos y condiciones*</a>
                    </p>
                </div>
                <div class="item">
                    <div class="checkbox">
                        <CheckedIcon class="checked__icon"/>
                    </div>
                    <p style="color: var(--background-primary)">Acepto que me envíen promociones y eventos a mi correo
                        electrónico</p>
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
    transform: translateX(-50%);
    top: 77%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 450px;
    background-image: url('@/assets/img/general/triangleCenter.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
}

.triangle__corner {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background-image: url('@/assets/img/general/triangleCornerRight.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
}

.back__icon {
    position: absolute;

    img {
        width: 50px;
        cursor: pointer;
    }
}

.content {
    padding: 14rem 3rem 1rem 5rem;
    max-width: 600px;
}

.__items__terms_conditions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.item {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .checkbox {
        min-width: 24px;
        height: 24px;
        border: 2px solid var(--color-accent);
        border-radius: 4px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .checked__icon {
            max-width: 80%;
            max-height: 80%;
            object-fit: contain;
        }
    }

    p {
        margin: 0;
    }

    a {
        color: var(--text-contrast);
        text-decoration: underline;
        font-weight: bold;

    }


}</style>