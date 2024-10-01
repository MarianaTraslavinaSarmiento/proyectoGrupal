<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import SmallTriangles from "@/assets/icons/your-shopping-cart/smallTriangles.vue";
import { useGetOneWorkshop } from '@/composables/useWorkshop';
import LoadingScreen from '@/components/loading-screen/LoadingScreen.vue';

const route = useRoute();
const router = useRouter();
const workshopId = computed(() => route.params.workshop);
const { workshop, isLoading, error } = useGetOneWorkshop(workshopId);

const trianglesCount = ref(1);
const videoId = ref('');

watch(() => workshop.value, (newWorkshop) => {
  if (newWorkshop && newWorkshop.video_url) {
    const url = new URL(newWorkshop.video_url);
    videoId.value = url.searchParams.get('v') || '';
  }
}, { immediate: true });

onMounted(() => {
  if (!workshopId.value) {
    router.push('/app/talleres-educativos');
  }
});
</script>

<template>
  <div v-if="isLoading">
    <LoadingScreen style="min-height: 60dvh;" />
  </div>
  <div v-else-if="error" class="error-message">
    Lo sentimos, no pudimos cargar la información del taller. Por favor, inténtalo de nuevo más tarde.
  </div>
  <div v-else-if="workshop" class="workshop-about">
    <div class="content-wrapper">
      <div class="header-section">
        <div class="diamond-divider">
          <SmallTriangles v-for="i in trianglesCount" :key="i" />
        </div>
        <header-title :hideDiamond="true" />
      </div>
      <div class="workshop-info">
        <div class="content-section">
          <p class="workshop-description">
            {{ workshop.description }}
          </p>
          <div class="diamond-divider content-diamonds">
            <SmallTriangles v-for="i in trianglesCount" :key="i" />
          </div>
          <h2 class="section-title">{{ workshop.name }}</h2>
        </div>
      </div>
    </div>
    
    <div class="video-wrapper" v-if="videoId">
      <div class="video-background">
        <div class="video-container">
          <iframe 
            :src="`https://www.youtube.com/embed/${videoId}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    
    <div class="content-wrapper">
      <div class="workshop-details">
        <div class="content-section">
          <p class="interactive-prompt">Conoce más del taller de forma interactiva</p>
          <p class="qr-instruction">Escanea el código QR con tu celular y disfruta de la experiencia.</p>
          
          <div class="qr-code">
            <img :src="workshop.image_bar_code" alt="QR Code" class="colored-qr" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="error-message">
    No se encontró información para este taller.
  </div>
</template>

<style scoped lang="scss">
.workshop-about {
  font-family: Bellota;
  background-color: var(--background-base);

  .content-wrapper {
    max-width: 800px;
    margin: 0 auto;
  }

  .header-section {
    position: relative;

    .diamond-divider {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    :deep(header-title) {
      position: relative;
      z-index: 2;
    }
  }

  .diamond-divider {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 220px;
    margin: 0 auto;

    &.content-diamonds {
      background-color: transparent;
      padding: 5px 0;
    }
  }

  .customer-service {
    color: var(--background-base);
    padding: 0px 20px 20px;
  }

  .workshop-description {
    font-size: 14px;
    line-height: 1.4;
    margin: 10px 0;
    color: var(--color-confirmation);
    text-align: center;
    padding: 0px 30px;
    margin-top: 0px;
  }

  .section-title {
    font-size: 1.7rem;
    color: var(--text-contrast);
    padding: 0px 20px;
    margin-bottom: 15px;
  }

  .video-wrapper {
    width: 100%;
    background-color: var(--background-secondary);
    padding: 20px 0;
    margin-bottom: 20px;

    .video-background {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .video-container {
      position: relative;
      padding-bottom: 56.25%; 
      height: 0;
      overflow: hidden;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .interactive-prompt {
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--text-contrast);
    font-size: 1.6rem;
    padding: 0px 20px;
  }

  .qr-instruction {
    margin-bottom: 20px;
    color: rgb(from var(--text-contrast) r g b / 40%);
    font-size: 1.4rem;
    padding-right: 80px;
    padding: 0px 20px;
    margin-right: 60px;
  }

  .qr-code {
    display: flex;
    justify-content: center;
  }

  .placeholder-qr {
    width: 150px;
    height: 150px;
    background-color: var(--background-secondary);
  }

  :deep(.small-triangle) {
    width: 10px;
    height: 10px;
    margin: 0 2px;
    fill: aqua;
  }
}

.error-message {
  color: red;
  text-align: center;
  padding: 20px;
}

img {
    width: 50%;
    /* max-width: 100%; */
    height: auto;
}



</style>