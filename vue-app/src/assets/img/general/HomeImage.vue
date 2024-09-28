<script setup>
    import { computed } from 'vue';
    
    const props = defineProps({
        imageUrl: {
            type: String,
            required: true,
            default: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
        }
    });

    const image = computed(() => props.imageUrl);
</script>

<template>
    <svg height="100%" viewBox="0 0 773 1314" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <path
            d="M115.52 301.893L115.507 301.908L115.494 301.923C45.3906 382.511 6 490.377 6 603.749V1284.21C6 1296.91 16.2974 1307.21 29 1307.21H744C756.703 1307.21 767 1296.91 767 1284.21V600.572C767 490.385 728.408 384.097 659.874 305.878L659.87 305.873L659.865 305.867L525.236 152.951L403.358 14.5191C394.204 4.12119 378.002 4.11639 368.841 14.5088L115.52 301.893Z"
            fill="url(#pattern0_126_4088)" stroke="currentColor" stroke-width="12" />
        <defs>
            <pattern id="pattern0_126_4088" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_126_4088"
                    transform="matrix(0.00246891 0 0 0.00142554 -0.36679 -0.000113423)" />
            </pattern>
            <image height="100%" id="image0_126_4088" :href="image" />
        </defs>
    </svg>
</template> 

<style scoped>
    #image0_126_4088 {
        object-fit: fill;
    }
</style>