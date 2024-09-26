<template>
  <div ref="container" class="icon-container">
    <component
      v-for="i in iconCount"
      :key="i"
      :is="icon"
      class="icon"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  icon: {
    type: Object,
    required: true
  },
  sizeEm: {
    type: Number,
    default: 1
  }
});

const container = ref(null);
const containerWidth = ref(0);

const iconCount = computed(() => {
  if (containerWidth.value === 0) return 0;
  const iconSizePx = props.sizeEm * 16;
  const iconsPerRow = Math.floor(containerWidth.value / iconSizePx);
  return Math.max(1, iconsPerRow);
});

const updateContainerWidth = () => {
  if (container.value) {
    containerWidth.value = container.value.offsetWidth;
  }
};

onMounted(() => {
  updateContainerWidth();
  window.addEventListener('resize', updateContainerWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateContainerWidth);
});
</script>

<style scoped>
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
}

.icon {
  width: v-bind('`${sizeEm}em`');
  height: v-bind('`${sizeEm}em`');
}
</style>