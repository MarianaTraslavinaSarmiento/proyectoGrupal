<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    iconComponent: {
        type: Object
    },
    pageName: {
        type: String
    },
    text: {
        type: String
    },
    alias: {
        type: String
    },
});

const route = useRoute();
const isRouteCurrent = computed(() => {
    return route.name?.toLowerCase() === props.pageName.toLowerCase();
});
</script>

<template>
    <div class="menu-nav-link" :class="{ 'is-current-page': isRouteCurrent }">
        <RouterLink :to="alias || { name: pageName }">
            <div class="link-content">
                <div class="link-icon">
                    <component :is="iconComponent"/>
                </div>
                <span class="link-text">{{ text }}</span>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.menu-nav-link {
    display: flex;
    a {
        text-decoration: none;
        width: 100%;
    }

    .link-content {
        display: flex;
        align-items: center;
        gap: 1em;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: rgba(var(--color-accent-rgb), 0.1);
        }
    }
    
    .link-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 40%;
        padding: .5em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-accent);
        background-color: var(--background-secondary);
    }
    
    .link-text {
        color: var(--color-text);
        font-family: var(--font-bellota);
        font-size:1.3rem;
    }
}

.is-current-page {
    .link-content {
        background-color: rgba(var(--color-accent-rgb), 0.1);
        font-weight: bold;
    }
}
</style>