<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
</script>


<template>
  <div class="customer">
    <header-title :hideDiamond="true" />
    <div class="customer-service"> 
    <div class="content-section">
        <div class="diamond-divider">
          <SmallTriangles v-for="i in 5" :key="i" />
        </div>
        
        <p class="workshop-description">
          El Taller de Arte Awaq Ayllus reúne a más de 60 tejedores y tejedoras ayacuchanos que producen tapices murales y delicadas piezas bordadas para diversos usos decorativos y utilitarios.
        </p>
        
        <h2 class="section-title">Taller de arte Awaq Ayllus - Documental</h2>
        
        <div class="video-container">
          <iframe 
            :src="videoSrc" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
        
        <p class="interactive-prompt">Conoce más del taller de forma interactiva</p>
        <p class="qr-instruction">Escanea el código QR con tu celular y disfruta de la experiencia.</p>
        
        <div class="qr-code">
          <div class="placeholder-qr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.customer-service {
    background-color: #fff;
    color: #8B0000;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .content-section {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .diamond-divider {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .workshop-description {
    font-style: italic;
    margin-bottom: 20px;
  }
  
  .section-title {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    margin-bottom: 20px;
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
  }
  
  .qr-instruction {
    margin-bottom: 20px;
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
</style>
