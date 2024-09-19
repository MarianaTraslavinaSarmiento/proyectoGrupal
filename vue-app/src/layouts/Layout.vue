<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    import HeadBar from '@components/head-bar/HeadBar.vue'
    import Nav from '@components/nav/Nav.vue'

    const route = useRoute();
    const requiresNav = computed(() => route.meta.requiresNav);
    const requiresHeadBar = computed(() => route.meta.requiresHeadBar);
</script>

<template>
  <div class="layout">
    <div v-show="requiresHeadBar">
        <HeadBar />
    </div>
    <main>
        <slot />
    </main>
    <div v-show="requiresNav">
        <Nav />
    </div>
  </div>

</template>

<style lang="scss" scoped>
.layout {
  margin: 0px;
}
</style>