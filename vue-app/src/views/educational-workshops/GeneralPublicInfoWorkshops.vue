<script setup>

import Back from "@assets/img/general/Back.vue"
import SmallTriangle from "@assets/icons/workshops/SmallTriangle.vue";
import SubscribeWorkshop from "@assets/icons/workshops/SubscribeWorkshop.vue";

</script>



<template>
    <main class="main__container">


        <div class="start__registration">
            <div class="back__icon">
                <router-link to="/singup">
                    <div class="back">
                        <Back class="back__icon" />
                    </div>
                </router-link>
            </div>

            <div class="workshop__container">

                <img src="https://www.conasi.eu/blog/wp-content/uploads/2020/09/ceramica-y-porcelana-para-cocinar-1111-1.jpg" alt="Taller de Cerámica" class="workshop__image" />
            
                <div class="workshop__name">
                    <div class="workshop__icon">
                        <SmallTriangle class="smallTriangle__icon" />
                    </div>
                    <div class="workshop__orginal__name">
                        <h1>Taller de cerámica artesanal</h1>
                    </div>
                </div>

                <section class="workshop-details">
                    <p class="description">
                    En este taller dado por los artesanos de Cerámicas Tater Vera aprenderán a usar la arcilla para crear cosas para el hogar con diseños típicos ayacuchanos.
                    </p>
                    <p class="audience">Para el público en general</p>
                    <p class="note">*los niños menores de 8 años se recomienda que estén acompañados de un adulto</p>
                    <div class="meta-info">
                    <p><span class="label">Duración:</span> 2 meses</p>
                    <p><span class="label">Fecha de inicio:</span> 8 de Julio</p>
                    <p><span class="label">Horario:</span> 4 a 6 PM cada sábado</p>
                    <p><span class="label">Materiales:</span> Materiales dados en clase</p>
                    <p><span class="label">Modalidad:</span> Presencial</p>
                    <p><span class="label">Lugar:</span> En el Ministerio de Cultura, Lima, Perú</p>
                    </div>

                    <div class="register__all">

                        <button class="register-button">
                        <SubscribeWorkshop class="SubscribeWorkshop__icon" />
                        <span class="button-text">Inscribirse al taller</span>
                        </button>
                        <h2>*Cupos limitados</h2>
                    </div>
                </section>
  
            
            </div>
        </div>

        

    </main>
</template>
  


<style lang="scss" scoped>

.main__container {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    font-family: Bellota;
    font-size: 1.5rem;
}

.back__icon {
    position: absolute;

    img {
        width: 50px;
        cursor: pointer;
    }
}

.back {
    position: absolute;

    .back__icon {
        width: 50px;
        cursor: pointer;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
    }
}


.register__all{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width:80vw;
    height: 10vh;

}

.register__all h2{
    color: rgb(from var(--text-contrast) r g b / 50%);
    font-size: 1.3rem;
    margin-left: 5%;
    margin-top: 4%;
    width:120px;
    // border: 1px solid red;
}


.workshop__image{
    display: flex;
    flex-direction:column;
    width: 100vw;
    height: 40vh;
}

.smallTriangle__icon {
    width: 40px;
    height: 40px;
    position: absolute;
    margin-left:-3%;

}

.workshop__name{
    display: flex;
    flex-direction:row;
    background-color: var(--background-primary);
    // border: 1px solid red;
    width: 100vw;
    height: 40px;
    margin: 0px;
}


.workshop__orginal__name{
    display: flex;
    flex-direction:row;
    align-items:center;
    // border: 1px solid blue;
    margin-left:8%;
    width: 100vw;
    height: 40px;
}

.workshop__orginal__name h1{
    font-size: 1.7rem;
    width: 100vw;
    height: 40px;
    margin-top: 4%;
}


.workshop-details {
  margin: 5% 8%;

  .description {
    font-size: 1.3rem;
    color: var(--text-black);
    margin-bottom: 15px;
  }

  .audience {
    font-size: 1.8rem;
    color: var(--text-contrast);
    font-weight: bold;
    margin-bottom: 5px;
  }

  .note {
    font-size: 1.3rem;
    color: rgb(from var(--text-black) r g b / 50%);
    margin-bottom: 15px;
  }

  .meta-info {
    font-size: 0.9rem;
    color: var(--text-black);
    margin-top: 15px;
    
    p {
      margin-bottom: 5px;
      font-size: 1.7rem;
    }

    .label {
      font-weight: bold;
      color: var(--text-contrast);
      font-size: 1.7rem;
    }
  }

  .register-button {
  display: flex;
  align-items: center;
  background-color: var(--background-primary);
  color: var(--text-color);
  border: none;
  padding: 10px 15px;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 20px;
  width: 65%;
  position: relative;
  border-radius: 10px;

  .SubscribeWorkshop__icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .button-text {
    font-weight: bold;
    flex-grow: 1;
    font-size:1.4rem;
  }

  .button-note {
    font-size: 1.2rem;
    color: var(--color-accent);
    white-space: nowrap;
        }
    }
}

.back {
    position: absolute;

    .back__icon {
        width: 50px;
        cursor: pointer;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
    }
}

.content {
    padding: 14rem 3rem 1rem 4rem;
    max-width: 600px;
}

.__items__terms_conditions {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.custom__checkbox {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;

    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 30px;
        width: 30px;
        border: 2px solid var(--color-accent);
        border-radius: 6px;
    }

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
    }

    .label__text {
        color: var(--background-primary);
        margin-left: 10px;
    }

    a {
        color: var(--text-contrast);
        text-decoration: underline;
        font-weight: bold;
    }

}

</style>
