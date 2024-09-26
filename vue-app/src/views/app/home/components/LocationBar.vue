<script setup>
import { ref } from 'vue';
import LocationIcon from '@icons/home/LocationIcon.vue';

const props = defineProps({
    placeholder: {
        type: String,
        default: 'Ubicación de entrega actual'
    }
});

const emit = defineEmits(['update:location']);

const location = ref('');

const handleInput = () => {
    emit('update:location', location.value);
};
</script>

<template>
    <div class="search__location">
        <div class="location">
            <LocationIcon class="location__icon" />
            <input type="text" :placeholder="placeholder" class="location__input" v-model="location"
                @input="handleInput" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search__location {
    padding: 15px 0px 0px 0px;
    font-size: 1.5rem;
}

.location {
    display: flex;
    margin-inline: 25px;
    background-color: var(--background-secondary);
    align-items: center;
    padding: 5px;
    border-radius: 5px;


    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--background-base);
        min-width: 20px;
        height: 30px;
    }

    &__input {
        width: 90%;
        background-color: var(--background-secondary);
        height: 30px;
        background: none;
        border: none;
        color: var(--text-color);

        &::placeholder {
            color: rgb(from var(--text-color) r g b / 30%);
        }

    }

}
</style>