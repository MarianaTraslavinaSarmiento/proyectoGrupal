<script setup>
defineOptions({ name: "NavLink" });

const props = defineProps({
  iconComponent: {
    type: Object,
    required: false,
  },
  pageName: {
    type: String,
    default: "Home",
  },
  text: {
    type: String,
    default: "button",
  },
  alias: {
    type: String, 
    default: "",
  },
});

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isRouteCurrent = computed(() => {
  return route?.name?.toLowerCase() === props?.pageName?.toLowerCase();
});
</script>

<template>
  <div :class="['nav-link', { 'is-current-page': isRouteCurrent }]">
    <RouterLink :to="alias || { name: pageName }">
      <div class="link-content">
        <div class="link-icon">
          <component :is="iconComponent" />
        </div>
      </div>
    </RouterLink>
  </div>
</template>


<style lang="scss" scoped>
.nav-link {
  position: relative;
  .link-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 31px;
    height: 31px;
    .link-icon{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      color: var(--text-color);
      transition: color 0.3s;
      background-color: var(--background-secondary);
    }
    &:hover {
    .link-icon{
      color: var(--color-accent);
    }
  }
  }
  a {
    display: flex;
    align-items: center;
    padding: 0;
    position: relative;
    justify-content: center;
    &:before {
      content: "";
      height: 0px;
      width: 0px;
      background: var(--primary-color);
      position: absolute;
      left: 0;
      display: block;
      opacity: 0;
      transition: 0.5s ease opacity;
    }
  }
 
}
// scale 0.23529411764
.nav-link.is-current-page {
  a:before {
    opacity: 1;
  }
  .link-icon{
    position: relative;
    padding: 10.5px;
    top: -3px;
    width: 56px;
    height: 56px;
    transition: all 0.3s;
    color: var(--color-accent);
  }
}
</style>
