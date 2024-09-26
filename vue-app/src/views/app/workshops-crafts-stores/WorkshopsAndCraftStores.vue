<script setup>
import HeadBar from '@/components/head-bar/HeadBar.vue';
import Nav from '@/components/nav/Nav.vue';
import TitleSection from '@components/title-section/TitleSection.vue'
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';

</script>

<template>
    <HeadBar />
    <main>

        <TitleSection
        title="Talleres y tiendas artesanales"
        subtitle="Tiendas de artesanías de todas partes del Perú"
        :showFilter="true"
        />

    </main>
    <Nav />
</template>

<style lang="scss" scoped>

</style>