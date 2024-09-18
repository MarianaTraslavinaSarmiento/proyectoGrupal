<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    import Nav from '@components/nav/Nav.vue'

    const route = useRoute();
    const requiresNav = computed(() => route.meta.requiresNav);
</script>

<template>
  <div class="layout">
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