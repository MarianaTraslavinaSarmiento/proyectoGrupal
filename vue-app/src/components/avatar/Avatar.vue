<script setup>
    import {computed} from 'vue'
    import { useUserStore } from '@stores/user.js'

    const userStore = useUserStore()

    const user = computed(() => userStore.user)
</script>

<template>
    <div class="avatar">
        <img :src="user.avatar" :alt="user.name" class="avatar-img">
    </div>
</template>

<style lang="scss" scoped>
    .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        border: 2.5px solid var(--color-border);

        .avatar-img {
            aspect-ratio: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>