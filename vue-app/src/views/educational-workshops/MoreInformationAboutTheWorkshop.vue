<script setup>
import { ref, onMounted } from 'vue';
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import SmallTriangles from "@/assets/icons/your-shopping-cart/smallTriangles.vue";

const videoSrc = ref("https://www.youtube.com/embed/_Nr9VPY8b-Q");
const trianglesCount = ref(1);

onMounted(() => {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
</script>

<template>
  <div class="customer">
    <div class="content-wrapper">
      <div class="header-section">
        <div class="diamond-divider">
          <SmallTriangles v-for="i in trianglesCount" :key="i" />
        </div>
        <header-title :hideDiamond="true" />
      </div>
      <div class="customer-service">
        <div class="content-section">
          <p class="workshop-description">
            El Taller de Arte Awaq Ayllus reúne a más de 60 tejedores y tejedoras ayacuchanos que producen tapices murales y delicadas piezas bordadas para diversos usos decorativos y utilitarios.
          </p>
          <div class="diamond-divider content-diamonds">
            <SmallTriangles v-for="i in trianglesCount" :key="i" />
          </div>
          
          <h2 class="section-title">Taller de arte Awaq Ayllus - Documental</h2>
        </div>
      </div>
    </div>
    
    <div class="video-wrapper">
      <div class="video-background">
        <div class="video-container">
          <iframe 
            :src="videoSrc" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    
    <div class="content-wrapper">
      <div class="customer-service">
        <div class="content-section">
          <p class="interactive-prompt">Conoce más del taller de forma interactiva</p>
          <p class="qr-instruction">Escanea el código QR con tu celular y disfruta de la experiencia.</p>
          
          <div class="qr-code">
            <div class="placeholder-qr"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.customer {
  font-family: Bellota;
  background-color: #fff;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.header-section {
  position: relative;
}

.diamond-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  width: 220px;
  margin: 0 auto;
}

.content-diamonds {
  background-color: transparent;
  padding: 5px 0;
}

.header-section .diamond-divider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.header-section :deep(header-title) {
  position: relative;
  z-index: 2;
}

.customer-service {
  color: #8B0000;
  padding: 0px 20px 20px;
}


.workshop-description {
  font-size: 14px;
  line-height: 1.4;
  margin: 10px 0;
  color: #333;
  text-align: center;
}

.section-title {
  font-size: 1.5em;
  color: #8B0000;
}

.video-wrapper {
  width: 100%;
  background-color: #8B0000;
  padding: 20px 0;
  margin-bottom: 20px;
}

.video-background {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.interactive-prompt {
  font-weight: bold;
  margin-bottom: 10px;
  color: #8B0000;
}

.qr-instruction {
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}

.qr-code {
  display: flex;
  justify-content: center;
}

.placeholder-qr {
  width: 150px;
  height: 150px;
  background-color: #8B0000;
}

:deep(.small-triangle) {
  width: 10px;
  height: 10px;
  margin: 0 2px;
  fill: aqua;
}
</style>