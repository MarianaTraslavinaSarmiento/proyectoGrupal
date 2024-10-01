<script setup>
import HeaderTitle from '@/components/header-title/HeaderTitle.vue';
import { ref, onMounted } from 'vue';
// import emailjs from '@emailjs/browser';

const userProblem = ref('');
const selectedImage = ref(null);
const showPopup = ref(false);

onMounted(() => {
  emailjs.init('rgBM3mtwnsSV0v9t4'); 
});

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      selectedImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert('Por favor, selecciona una imagen válida.');
  }
};

const removeImage = () => {
  selectedImage.value = null;
};


const sendEmail = async (problem) => {
  try {
    let imageData = null;
    if (selectedImage.value) {
      // Redimensionar y comprimir la imagen si es necesario
      imageData = await resizeImage(selectedImage.value, 800, 600);
    }

    const templateParams = {
      problem: problem,
      image: imageData
    };

    console.log('Enviando email con parámetros:', JSON.stringify(templateParams, null, 2));

    const response = await emailjs.send(
      'service_dc063yj',
      'template_kb1i1rz',
      templateParams
    );

    console.log('Email enviado, respuesta:', response);

    if (response.status === 200) {
      showPopup.value = true;
      setTimeout(() => {
        showPopup.value = false;
      }, 3000);
      // Limpiar el formulario después de enviar con éxito
      userProblem.value = '';
      selectedImage.value = null;
    } else {
      throw new Error('Respuesta no exitosa de EmailJS');
    }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    alert('Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
  }
};

const sendPredefinedProblem = (problemText) => {
  sendEmail(problemText);
};

const sendCustomProblem = () => {
  if (userProblem.value.trim() !== '') {
    sendEmail(userProblem.value);
  } else {
    alert('Por favor, describe tu problema antes de enviar.');
  }
};


const resizeImage = (dataUrl, maxWidth, maxHeight) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const resizedImage = canvas.toDataURL('image/jpeg', 0.7);
      console.log('Imagen redimensionada:', resizedImage.substring(0, 50) + '...');
      resolve(resizedImage);
    };
    img.src = dataUrl;
  });
};
</script>

<template>
  <div class="customer-service">
    <header-title :title="'Comentarios a la app'" :hideDiamond="false" />

    <div class="frequent-problems">
      <h2>Problemas Frecuentes</h2>
      <button @click="sendPredefinedProblem('La aplicación no carga de manera correcta')" class="problem">La aplicación no carga de manera correcta</button>
      <button @click="sendPredefinedProblem('Errores al querer comprar en la aplicación')" class="problem">Errores al querer comprar en la aplicación</button>
      <button @click="sendPredefinedProblem('No puedo ver las imágenes de las tiendas y/o artesanías')" class="problem">No puedo ver las imágenes de las tiendas y/o artesanías</button>
      <button @click="sendPredefinedProblem('No me permite usar un cupón de descuento')" class="problem">No me permite usar un cupón de descuento</button>
      <button @click="sendPredefinedProblem('No me deja inscribirme a los talleres')" class="problem">No me deja inscribirme a los talleres</button>
      <button @click="sendPredefinedProblem('El QR interactivo no funciona de manera correcta')" class="problem">El QR interactivo no funciona de manera correcta</button>
    </div>
    
    <div class="other-problem">
      <h2>Otro</h2>
      <textarea 
        v-model="userProblem" 
        placeholder="Describe aquí tu problema..."
        rows="4"
      ></textarea>
      
      <div v-if="selectedImage" class="image-preview">
        <img :src="selectedImage" alt="Imagen adjunta" />
        <button @click="removeImage" class="remove-image" aria-label="Eliminar imagen">
          &times;
        </button>
      </div>
    </div>

    <div class="button-group">
      <label for="image-upload" class="attach-button">
        Adjuntar captura
        <input 
          type="file" 
          id="image-upload" 
          accept="image/*" 
          @change="handleImageUpload" 
          class="hidden-input"
        >
      </label>
      <button @click="sendCustomProblem" class="send-button">Enviar</button>
    </div>

    <div v-if="showPopup" class="popup">
      Se ha enviado el problema correctamente.
    </div>
  </div>
</template>

<style scoped lang="scss">
.customer-service {
  position: relative;
  min-height: 100vh;
  font-family: 'Bellota', sans-serif;
  color: white;
  padding-bottom: 70px;
}

.frequent-problems, .other-problem {
  margin: 50px 30px;

  h2 {
    color: var(--text-contrast);
    font-size: 1.6rem;
    margin-bottom: 20px;
    margin-top: 50px;
  }
}

.frequent-problems {
  margin-top: 20px;
}

.other-problem {
  margin-top: 0px;

  h2 {
    margin-top: -20px;
  }
}

.problem {
  background-color: var(--background-secondary);
  color: var(--text-color);
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
  height: 20vh;
  background-color: var(--background-secondary);
  color: rgb(from var(--text-color) r g b / 40%);
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  resize: vertical;
}

.button-group {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
}

.attach-button, .send-button {
  background-color: var(--background-secondary);
  color: var(--text-color);
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
  background-color: var(--background-primary);
}

.image-preview {
  position: relative;
  margin-top: 15px;
  
  img {
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .remove-image {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
}

.hidden-input {
  display: none;
}

.popup {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--background-primary);
  color: var(--text-color);
  padding: 15px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>