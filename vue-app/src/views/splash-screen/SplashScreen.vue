<script setup>
import { ref, onMounted, computed } from 'vue';
import SquareBackground from '@assets/img/general/SquareBackground.vue';
import RuraqMakiIcon from '@icons/RuraqMakiIcon.vue';

const containerRef = ref(null);
const viewportSize = ref({ width: 0, height: 0 });

const updateViewportSize = () => {
    if (containerRef.value) {
        viewportSize.value = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
};

onMounted(() => {
    updateViewportSize();
    window.addEventListener('resize', updateViewportSize);
});

const squareSize = 150;
const visibleSquares = computed(() => ({
    cols: Math.ceil(viewportSize.value.width / squareSize) + 2,
    rows: Math.ceil(viewportSize.value.height / squareSize) + 2
}));

const animationOffset = ref(0);

const animateGrid = () => {
    animationOffset.value = (animationOffset.value + 0.5) % squareSize;
    requestAnimationFrame(animateGrid);
};

onMounted(() => {
    animateGrid();
});
</script>

<template>
    <div class="splash-screen" ref="containerRef">
        <div class="app-logo-container">
            <RuraqMakiIcon class="app-logo" />
        </div>
        <div class="square-grid" :style="`
      transform: translate(${-animationOffset}px, ${-animationOffset}px);
      width: ${visibleSquares.cols * squareSize}px;
      height: ${visibleSquares.rows * squareSize}px;
    `">
            <div v-for="i in visibleSquares.rows * visibleSquares.cols" :key="i" class="square-container">
                <SquareBackground opacity="0.30" is-inverted="true" class="square" />
                <SquareBackground opacity="0.30" is-inverted="true" class="square square-top-left" />
                <SquareBackground opacity="0.30" is-inverted="true" class="square square-top-right" />
                <SquareBackground opacity="0.30" is-inverted="true" class="square square-bottom-left" />
                <SquareBackground opacity="0.30" is-inverted="true" class="square square-bottom-right" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.splash-screen {
    background-color: var(--color-black);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    //touch-action: none;

    .app-logo-container {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        height: 100%;

        .app-logo {
            color: var(--text-color);
            width: 75%;
            position: relative;
            top: -10%;
            z-index: 1;

        }
    }
}

.square-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    grid-template-rows: repeat(auto-fill, 150px);
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
}

.square-container {
    position: relative;
    width: 150px;
    height: 150px;
    overflow: hidden;
}

.square {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5px;

    &.square-top-left {
        top: -50%;
        left: -50%;
    }

    &.square-top-right {
        top: -50%;
        right: -50%;
    }

    &.square-bottom-left {
        bottom: -50%;
        left: -50%;
    }

    &.square-bottom-right {
        bottom: -50%;
        right: -50%;
    }
}
</style>