'use strict';
//pedir un nombre y saludarlo.
const $form1 = document.getElementById('form1');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

$form1.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Hola, ${$form1.name.value}!`, 'success')
});

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

// Pedir edad al usuario y responder si es o no es mayor de edad.
const $mayorDeEdad = document.getElementById('form2');

$mayorDeEdad.addEventListener('submit', (e) => {
  e.preventDefault();

});
function mayordeedad() {
  const $edad = document.getElementById('edad').value;
  if ($edad >= 18) {
    alert('Eres mayor de edad',  'success');
} else {
    alert('Upss NO eres mayor de edad',  'success');
  
}
}
mayordeedad();

 //PEDIR NOMBRE Y EDAD AL USUARIO. SI SE LLAMA PEPITA 
//Y ES MAYOR DE EDAD PERMITIR INGRESO A LA SALA DE ESPERA #1.
//SI SE LLAMA PEPITA Y ES MENOR DE EDAD PERMITIR INGRESO A LA SALA #2
//SI NO ES PEPITA PERO ES MAYOR DE EDADA INGRESO A LA SALA #3
//SI NO SE LLAMA PEPITA Y NO ES MAYOR DE EDAD DIRIGIR A LA SALA #4
    
const $nombreEdad = document.getElementById('form3');

$nombreEdad.addEventListener('submit', (e) => {
  e.preventDefault();
});
function verificarDatos() {
  const Nombre = document.getElementById('username3').value;
  const Edad = document.getElementById('edad3').value;
  if (Nombre === 'pepita' && Edad >= 18) {
    alert('Por favor ingresa a la sala #1');
  } else if (Nombre === 'pepita' && Edad <= 18) {
    alert('Puedes Ingresara a la sala #2');
  }else if (Nombre != 'pepita' && Edad >= 18) {
    alert('Puedes Ingresar a la sala #3')
  }else{
    alert('Ingresa a la sala #4');
  }
}
verificarDatos();
  

