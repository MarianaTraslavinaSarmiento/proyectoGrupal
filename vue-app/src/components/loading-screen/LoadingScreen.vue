<script setup>

import Spinner from "@assets/img/general/Spinner.vue"
import { ref } from "vue";

const isLoading = ref(false)


</script>

<template>

<div v-if="isLoading" class="loading__spinner">
    <Spinner class="animate__spin" />
</div>

</template>

<style scoped>

.loading__spinner {

  width: 100%;
  height: 100%;
  margin: auto;
}

.animate__spin {
  animation: spin 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

@keyframes spin {
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
}

</style>