<script setup lang="ts">
import { ref, onMounted } from 'vue';
import emailjs from '@emailjs/browser';
import AcordionContact from '../../widgets/acordeon/AcordionContact.vue';
import AcordionsContact01 from '../../viewmodels/components/acordions/AcordeonContact01';
import AcordionsContact02 from '../../viewmodels/components/acordions/AcordeonContact02';
import AcordionsContact03 from '../../viewmodels/components/acordions/AcordeonContact03';
import AcordionsContact04 from '../../viewmodels/components/acordions/AcordeonContact04';
import AcordionsContact05 from '../../viewmodels/components/acordions/AcordeonContact05';

const acordionContact01 = new AcordionsContact01();
const acordionContact02 = new AcordionsContact02();
const acordionContact03 = new AcordionsContact03();
const acordionContact04 = new AcordionsContact04();
const acordionContact05 = new AcordionsContact05();

const tittle = ref('');
const name = ref('');
const time = ref('');
const message = ref('');
const email = ref('');
const buttonText = ref('Enviar email');


const sendEmail = () => {
  buttonText.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_kdpvnxl';

  emailjs.send(serviceID, templateID, {
    tittle: tittle.value,
    name: name.value,
    time: time.value,
    message: message.value,
    email: email.value,
  })
    .then(() => {
      buttonText.value = 'Enviar email';
      alert('Email enviado con éxito');
      tittle.value = '';
      name.value = '';
      time.value = '';
      message.value = '';
      email.value = '';
    }, (err) => {
      buttonText.value = 'Enviar email';
      alert(JSON.stringify(err));
    });
};


onMounted(() => {
  emailjs.init('2BmjcIlqihJacMXBA');
});


</script>

<template>
  <div class="container">
    <div class="box-contact pt-tablet-6 pt-mobile-1">
      <div class="w-50 row-column g-2 pt-1 w-tablet-100">
        <div>
            <AcordionContact :tittle="acordionContact01.tittle" :text="acordionContact01.text"/>
            <AcordionContact :tittle="acordionContact02.tittle" :text="acordionContact02.text"/>
            <AcordionContact :tittle="acordionContact03.tittle" :text="acordionContact03.text"/>
            <AcordionContact :tittle="acordionContact04.tittle" :text="acordionContact04.text"/>
            <AcordionContact class="d-none-tablet" :tittle="acordionContact05.tittle" :text="acordionContact05.text"/>
        </div>
        <div class="d-flex g-2 d-none-tablet">
            <a class="text a d-flex align-center" style="gap: 10px;font-size: 1.2rem;" href="tel:643358803">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg> +34 643 35 88 03
            </a>
            <a class="text a d-flex align-center" style="gap: 10px;font-size: 1.2rem;" href="mailto:josetrujillosilva@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" height="22" fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
                </svg> josetrujillosilva@gmail.com
            </a>
        </div>
      </div>
      <div class="box-form-contact">
        <h2 style="color: #fff;">Contacta conmigo:</h2>
        <p class="text d-none-tablet" style="color: #fff;">Este es un formulario simple de contacto, es importante que en el mensaje me indiques donde puedo contactar contigo. Gracias.</p>
        <form @submit.prevent="sendEmail" class="w-100">
          <div class="field d-none-tablet">
            <input class="text input-form-contact" type="text" name="tittle" id="tittle" v-model="tittle" placeholder="Título del mensaje...">
          </div>
          <div class="field">
            <input class="text input-form-contact" type="text" name="name" id="name" v-model="name" placeholder="Tu nombre...">
          </div>
          <div class="field">
            <input type="hidden" name="time" id="time" v-model="time">
          </div>
          <div class="field">
            <textarea class="text input-form-contact h-20 h-tablet-10" name="message" id="message" v-model="message" placeholder="Escribe aquí tu mensaje"></textarea>
          </div>
          <div class="field">
            <input type="hidden" name="email" id="email" v-model="email" value="josetrujillosilva@gmail.com">
          </div>

          <input class="btn-form-contact text" type="submit" id="button" :value="buttonText">
        </form>
      </div>
    </div>
  </div>
</template>