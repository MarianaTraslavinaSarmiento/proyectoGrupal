<script setup>
import Spinner from "@assets/img/general/Spinner.vue"
</script>

<template>

<div class="loading__spinner">
    <Spinner class="animate__spin" />
</div>

</template>

<style scoped>

.loading__spinner {

  display: flex;
  justify-content: center;
  align-items: center;
}

.animate__spin {
  animation: spin 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: var(--background-secondary);
}

@keyframes spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

</style>