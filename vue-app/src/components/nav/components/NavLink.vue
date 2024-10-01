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
  <div class="nav-link" :class="{ 'is-current-page': isRouteCurrent }">
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
  width: 35px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .link-content {
    position: relative;
    width: 100%;
    height: 35px;

    .link-icon {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      padding: 6px;
      border-radius: 50%;
      color: var(--text-color);
      background-color: var(--background-secondary);
      transition: all 0.3s ease;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 100%;

    &:before {
      content: "";
      height: 0;
      width: 0;
      background: var(--primary-color);
      position: absolute;
      left: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &.is-current-page {
    .link-icon {
      width: 66px;
      height: 66px;
      padding: 11px;
      display: flex;
      flex-direction: column;
      align-items: flex;
      justify-content: center;
      bottom: -11px;
      color: var(--color-accent);
    }

    a:before {
      opacity: 1;
    }
  }

  &:hover .link-icon {
    color: var(--color-accent);
  }
}
</style>