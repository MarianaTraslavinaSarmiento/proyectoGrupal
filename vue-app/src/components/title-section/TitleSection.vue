<script setup>
    import Diamond from '@assets/img/general/Diamond.vue';
    import FilterIcon from '@icons/general/FilterIcon.vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false           
        },
        showFilter: {
            type: Boolean,
            default: false
        }
    })

</script>

<template>
    <main>
        <div class="title">
            <Diamond class="diamond__icon" />
            <div class="text">
                <p class="text__title">{{ title }}</p>
                <p class="text__subtitle">{{ subtitle }}</p>
            </div>
            <FilterIcon v-if="showFilter" class="filter__icon"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.title {
    height: 75px;
    position: relative;
    color: var(--color-black);
    font-family: Bellota;
    margin-bottom: -60px;

    .diamond__icon {
        width: 50px;
        height: 60px;
        position: absolute;
        top: 5px;
        transform: translateX(-50%);
    }

    .text {
        padding-inline-start: 3.5rem;
        padding-top: 2.5rem;

        &__title {
            color: var(--text-contrast);
            font-size: 1.8rem;
            margin-bottom: 6px;
            font-weight: bold;
        }

        &__subtitle {
            color: rgb(from var(--text-contrast) r g b / 50%);
            font-size: 1.3rem;
        }
    }

    .filter__icon {

        width: 35px;
        height: 35px;
        position: absolute;
        right: 17px;
        bottom: 5px;
        color: var(--color-accent);
    }

}
</style>
