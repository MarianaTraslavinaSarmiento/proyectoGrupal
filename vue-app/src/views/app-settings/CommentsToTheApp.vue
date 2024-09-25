<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';

</script>


<template>
  <div class="customer-service">
    <header-title :title="'Comentarios a la app'" :hideDiamond="false" />

    <div class="frequent-problems">
      <h2>Problemas Frecuentes</h2>
      <button class="problem">La aplicación no carga de manera correcta</button>
      <button class="problem">Errores al querer comprar en la aplicación</button>
      <button class="problem">No puedo ver las imágenes de las tiendas y/o artesanías</button>
      <button class="problem">No me permite usar un cupón de descuento</button>
      <button class="problem">No me deja inscribirme a los talleres</button>
      <button class="problem">El QR interactivo no funciona de manera correcta</button>
    </div>
    
    <div class="other-problem">
      <h2>Otro</h2>
      <textarea 
        v-model="userProblem" 
        placeholder="Describe aquí tu problema..."
        rows="4"
      ></textarea>
      <div class="button-group">
        <button class="attach-button">Adjuntar captura</button>
        <button class="send-button">Enviar</button>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">

.frequent-problems{

    font-family: Bellota;
    margin-top: 20px;
    margin: 50px 30px;

        h2{
            color: red;
            margin-top: 50px;
            font-size: 1.6rem;
            margin-bottom: 20px;
    }
}

.other-problem h2{
    color: red;
}
.app-comments {
  font-family: 'Bellota', sans-serif;
  color: white;
  padding: 20px;
  
  h2 {
    color: var(--color-border);
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
}

.frequent-problems, .other-problem {
  margin-top: 20px;
}

.problem {
  background-color: var(--background-secondary);
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 100%;
  text-align: left;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
}

textarea {
  width: 100%;
  background-color: var(--background-secondary);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  resize: vertical;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.attach-button, .send-button {
  background-color: var(--background-secondary);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
}

.send-button {
  background-color: var(--color-border);
}
</style>