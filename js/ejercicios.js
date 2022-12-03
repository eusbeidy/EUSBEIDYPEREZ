'use strict'
//ejercicio

//let nombre = prompt('Ingresa nombre');
//alert('Bienvenido' + nombre);

//EJERCICIO 2
 
/*let edad = prompt('Ingresa tu edad');

if (edad >= 18) {
    alert('usted es mayor de edad');
} else {
    alert('no es mayor de edad');
}*/

//EJERCICIO 3

/*const nombre = prompt('Ingresa tu nombre');
const edad = Number(prompt('Ingresa tu edad'));

let espepita;
let esMayorDeEdad;

if (nombre === 'pepita') {
    espepita = true;
} else {
    espepita = false;
}

if (edad >= 18) {
    esMayorDeEdad = true;
} else {
    esMayorDeEdad = false;
}

let destino = null;

if (espepita && esMayorDeEdad) {
    destino = 1;
    
}
if (espepita && !esMayorDeEdad) {
    destino = 2;
}
if (!espepita && esMayorDeEdad) {
    destino = 3;
}

switch (destino) {
    case 1:
        console.log(`Ingresa a la sala #${destino}`);
        
        break;
    case 2:
        console.log(`Ingresa a la sala #${destino}`);
        break;
     case 3:
        console.log(`Ingresa a la sala #${destino}`);
        break;
    default:
        console.log('Ingresa a la sala #4')
        break;
}*/

//EJERCICIO  CON FUNCIONES día 2/12/22
//pedir nombre al usuario y saludarlo

/*function saludo() {
    let nombre = prompt('Escribe tu Nombre');
    if (nombre === null) {
        alert('No se escribio ningun nombre.');
    }else{
        alert('Hola,' + nombre);
    }
    alert('hola, Bienvenido,' + nombre);
}
 saludo();
*/

// PEDIR EDAD AL USUARIO Y RESPONDER SI ES O NO ES MAYOR DE EDAD

/*function mayorDeEdad() {
    let edad = Number(prompt('Ingrese su edad'));
   edad >= 18 ? alert('Eres mayor de edad') : alert('Eres menor de edad');
 }

mayorDeEdad();*/

// PEDIR NOMBRE Y EDAD AL USUARIO. SI SE LLAMA PEPITA E
//Y ES MAYOR DE EDAD PERMITIR INGRESO A LA SALA DE ESPERA #1.
//SI SE LLAMA PEPITA Y ES MENOR DE EDAD PERMITIR INGRESO A LA SALA #2
//SI NO ES PEPITA PERO ES MAYOR DE EDADA INGRESO A LA SALA #3
//SI NO SE LLAMA PEPITA Y NO ES MAYOR DE EDAD DIRIGIR A LA SALA #4


function nombreYedad() {
    let Nombre= prompt('Ingrese su Nombre');
    let Edad = Number(prompt('Ingrese su Edad'));
    

    if (Nombre === 'Pepita' && Edad >= 18){
        alert('Ingresa a la sala #1');
    }else if (Nombre === 'Pepita' && Edad <= 18){
        alert('Ingresa a la sala #2');
    }else if (Nombre != 'Pepita' && Edad >= 18) {
        alert('Ingresa a la sala #3');
    } else{
        alert('ingresa a la sala de espera #4');
    }
}
nombreYedad();
    



