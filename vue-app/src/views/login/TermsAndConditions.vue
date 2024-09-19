<script setup>

</script>

<template>
    <main>
        
        <div class="container">
            <div class="triangle__center"></div>
            <div class="triangle__corner"></div>
        </div>

    </main>
</template>

<style lang="scss" scoped>

.container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.triangle__center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-image: url('@/assets/img/general/triangleCenter.png');
    background-size: contain;
    background-repeat: no-repeat;
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
}
</style>