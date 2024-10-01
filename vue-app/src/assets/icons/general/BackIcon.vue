<script setup>

const props = defineProps({
    backgroundColor: {
        type: String,
        default: 'var(--background-secondary)'
    }
});

</script>

<template>

    <svg width="277" height="277" viewBox="0 0 277 277" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="138.5" width="195.161" height="195.869" rx="7" transform="rotate(45 138.5 0)" :fill="backgroundColor"/>
    <path d="M226.651 138.441H164.502" stroke="var(--color-accent)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M191.495 105L164.5 138.442L191.495 171.883" stroke="var(--color-accent)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

</template>


