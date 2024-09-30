<script setup>
import HomeImage from '@/assets/img/general/HomeImage.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
    id: {
        type: String,
        required: true,
        default: '123'
    },
    imageUrl: {
        type: String,
        required: true,
        default: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
    },
    workshopTitle: {
        type: String,
        required: true,
        default: 'Taller de Artesania'
    }
});

const onClick = () => {
  router.push(`/app/talleres-educativos/info/${props.id}`);
}
</script>


<template>
    <div class="month__workshop" @click="onClick">
        <HomeImage :id="id" class="home__img" :imageUrl="imageUrl" />
        <p>{{ workshopTitle }}</p>
    </div>
</template>

<style lang="scss" scoped>
.month__workshop {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
    gap: 1em;

    .home__img {
        width: 75%;
        color: var(--color-border);
        cursor: pointer;
    }

    p {
        color: var(--text-contrast);
        font-size: large;
        font-weight: bold;
    }
}

</style>