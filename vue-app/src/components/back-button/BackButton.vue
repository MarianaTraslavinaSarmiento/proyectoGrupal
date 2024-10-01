<script setup>
import BackIcon from '@icons/general/BackIcon.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    backgroundColor: {
        type: String,
        default: 'var(--background-secondary)'
    },
    customBackRoute: {  
        type: String
    },
    position: {
        type: String,
        default: 'absolute'
    }
})

const goBack = () => {
    if (props.customBackRoute) {
        router.push(props.customBackRoute); 
    } else {
        router.back();
    }
}
</script>

<template>
    {{console.log('reached', props.customBackRoute)}}
    <div class="header__container__back" :style="{ position: position }" @click="goBack">
        <BackIcon class="back__icon" :backgroundColor="backgroundColor"/>
    </div>
</template>

<style scoped>
.header__container__back {
    z-index: 5;
}
.back__icon {
    width: 50px;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
}
</style>