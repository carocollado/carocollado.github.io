const btn = document.getElementById('button');
const nombre = document.getElementById('from_name');
const email = document.getElementById('from_email');
const telefono = document.getElementById('from_phone');
const mensaje = document.getElementById('message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_nb0oir8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar!';
      nombre.value = '';
      email.value = '';
      telefono.value = '';
      mensaje.value = '';

      alert('Enviado!')

    }, (err) => {
      btn.value = 'Enviar!';
      alert(JSON.stringify(err));
    });
});

emailjs.init('KhO3otRelQQyFMqS7')