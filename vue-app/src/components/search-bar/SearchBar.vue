<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import SearchIcon from '@icons/search-bar/SearchIcon.vue';
import { useGetAllProducts } from '@/composables/useProduct';
import { useGetAllShops } from '@/composables/useShop';
import { useGetAllWorkshopsWithStoreInCharge } from '@/composables/useWorkshop';

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Buscar producto, tienda o taller...'
    }
});

const router = useRouter();
const searchQuery = ref('');
const searchResults = ref([]);
const isLoading = ref(false);

const { products } = useGetAllProducts();
const { shops } = useGetAllShops();
const { workshops } = useGetAllWorkshopsWithStoreInCharge();

const handleSearch = () => {
    isLoading.value = true;
    const query = searchQuery.value.toLowerCase();
    
    const filteredProducts = products.value?.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    ) || [];
    
    const filteredShops = shops.value?.filter(shop => 
        shop.name.toLowerCase().includes(query) ||
        shop.location.toLowerCase().includes(query)
    ) || [];
    
    const filteredWorkshops = workshops.value?.filter(workshop => 
        workshop.name.toLowerCase().includes(query) ||
        workshop.target_audience.toLowerCase().includes(query) ||
        workshop.store_in_charge[0].name.toLowerCase().includes(query)
    ) || [];

    searchResults.value = [
        ...filteredProducts.map(p => ({ ...p, type: 'product' })),
        ...filteredShops.map(s => ({ ...s, type: 'shop' })),
        ...filteredWorkshops.map(w => ({ ...w, type: 'workshop' }))
    ];

    isLoading.value = false;
};

watch(searchQuery, () => {
    if (searchQuery.value) {
        handleSearch();
    } else {
        searchResults.value = [];
    }
});

const navigateToResult = (result) => {
    switch(result.type) {
        case 'product':
            router.push({ name: 'detailsOfHandicrafts', params: { id: result._id } });
            break;
        case 'shop':
            router.push({ name: 'ShopsCraftsOne', params: { id: result._id } });
            break;
        case 'workshop':
            router.push({ name: 'WorkshopInfo', params: { workshop: result._id } });
            break;
    }
    searchQuery.value = '';
    searchResults.value = [];
};
</script>

<template>
    <div class="search-container">
        <div class="search-bar">
            <SearchIcon class="search-icon" />
            <input 
                v-model="searchQuery"
                type="text" 
                :placeholder="placeholder" 
                class="search-input"
            />
        </div>
        <div v-if="searchResults.length > 0" class="search-results">
            <div 
                v-for="result in searchResults" 
                :key="result._id"
                class="search-result-item"
                @click="navigateToResult(result)"
            >
                <img :src="result.image_url || result.images_url" :alt="result.name" class="result-image">
                <div class="result-info">
                    <h3>{{ result.name }}</h3>
                    <p>{{ result.type === 'product' ? result.category : 
                         result.type === 'shop' ? result.location : 
                         result.target_audience }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search-container {
    position: relative;
    width: 100%;
    font-family: Bellota;
}

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
            color: rgb(from var(--text-color) r g b /44%);
        }
    }
}

.search-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--background-primary);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
}

.search-result-item {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: var(--background-secondary);
    }

    .result-image {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 4px;
        margin-right: 12px;
    }

    .result-info {
        h3 {
            font-size: 1.2em;
            margin: 0 0 4px 0;
            color: var(--text-color);
        }

        p {
            font-size: 0.9em;
            margin: 0;
            color: var(--text-color-secondary);
        }
    }
}
</style>