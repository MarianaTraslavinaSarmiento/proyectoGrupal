<script setup>
import Diamond from '@/assets/img/general/Diamond.vue';

const props = defineProps({
    diamondRight: {
        type: Boolean,
        default: false
    }
})


</script>

<template>

    <div class="title">

        <Diamond class="diamond__icon" />
        <p>Tapiz Chumpi Andino III</p>
        <Diamond v-if="diamondRight" class="diamond__icon__right" />

    </div>

</template>

<style scoped>
.title {
    background-color: var(--background-primary);
    height: 50px;
    color: var(--text-color);
    position: relative;
    font-family: Bellota;


    .diamond__icon {
        width: 50px;
        height: 50px;
        position: absolute;
        transform: translateX(-50%);
    }

    p {
        margin-left: 30px;
        font-size: 1.8rem;
        font-weight: bold;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }

    .diamond__icon__right{
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
    }


}
</style>