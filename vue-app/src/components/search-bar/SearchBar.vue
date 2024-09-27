<script setup>
import { ref } from 'vue';
import SearchIcon from '@icons/search-bar/SearchIcon.vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Buscar producto o tienda...'
    }
});

const searchQuery = ref('');

const handleSearch = () => {
    // Implementar lógica de búsqueda aquí
    console.log('Buscando:', searchQuery.value);
};
</script>


<template>
    <div class="search-bar">
        <SearchIcon class="search-icon" />
        <input v-model="searchQuery" type="text" :placeholder="placeholder" @input="handleSearch"
            class="search-input" />
    </div>
</template>


<style lang="scss" scoped>
.search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--background-secondary);
    border-radius: 8px;
    padding: 8px 16px;
    .search-icon {
        color: var(--color-accent);
        margin-right: 12px;
        width: 24px;
        height: 24px;
    }

    .search-input {
        border: none;
        background: transparent;
        width: 100%;
        color: var(--text-color);
        font-family: var(--font-bellota);
        font-size: 1.5em;
        font-weight: 500;
        line-height: 1;
        outline: none;
        overflow: hidden;
        margin-right: 12px;
    
        &::placeholder {
            color: rgb(from var(--text-contrast) r g b /50%);
        }
    }
}


</style>
