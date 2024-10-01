<script setup>
import DiamondBorder from '@/assets/img/general/DiamondBorder.vue';
</script>

<template>
    <div class="background-pattern">
        <DiamondBorder class="diamond-border"/>
        <DiamondBorder class="diamond-border"/>
    </div>
</template>

<style lang="scss" scoped>
.background-pattern {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;

    .diamond-border {
        position: relative;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        color: var(--background-secondary);

        &:nth-child(1) {
            position: absolute;
            top: -10%;
            left: 45%;
        }

        &:nth-child(2) {
            position: absolute;
            top: 20%;
            left: -50%;
        }
    }
}
</style>