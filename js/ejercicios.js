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


/*function nombreYedad() {
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
nombreYedad();*/

// Pedir un número y mostrar los números pares desde 1 hasta n.
/*function multiplosDeDos() {
    const numero = parseInt(prompt('Ingresa un número'));
    let pares = '';
    for (let i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        pares += i + ', ';
      }
    }
    alert(`Los números pares desde 1 hasta ${numero}, son: ${pares}`);
}*/



// MULTIPLOS DE DOS 

//1-Pedir un número, mostrar el doble de n.

/*function doble() {
    const nmr = parseInt(prompt('Ingresa un número'));
    const resultado = nmr + nmr;
   alert(`el doble de ${nmr}, es, ${resultado} `);
    
    }
    doble();*/

 // Pedir un número, mostrar el triple de n.
 /*function tripleDen() {
    const nmr3 = parseInt(prompt('Ingresa un número'));
    const resultado = parseInt( nmr3 * 3);
    alert(`el triple de ${nmr3}, es ${resultado}`);
 }
 tripleDen();*/

 // Pedir un número, mostrar la mitad de n.
 /*function mitadDeNumero() {
    const mitadNmr = parseInt(prompt('Ingresa un numero'));
    const resultado = parseInt( mitadNmr / 2);
    alert(`la mitad de ${mitadNmr}, es, ${resultado}`);
 }
 mitadDeNumero();*/

 // Pedir un número, mostrar la tercera parte de n.

 /*function terceraParteNumero() {
    const numero = parseInt(prompt('Ingrese un numero'));
    const resultado = parseInt( numero / 3);
    alert(`la tercera parte de ${numero} es ${resultado}`);
 }
 terceraParteNumero();*/


 // Pedir un número, mostrar el cuadrado de n.

// Pedir un número, mostrar n reducido en 5.
 function reducidoDeCinco() {
    let reducido = parseInt(prompt('Ingresa un numero'));
     for (let i = 0; i = reducido ; i++) {
        
         }

 }

// Pedir un número, mostrar el doble de n más 4.
// Pedir un número, mostrar si es positivo, negativo o si es cero.
// Pedir un número, mostrar si es par, impar o si es cero.
// Pedir un número, mostrar si es un número primo o no.
// Pedir dos números, mostrar la suma.
// Pedir dos números, mostrar la resta.
// Pedir dos números, mostrar la multiplicación.
// Pedir dos números, mostrar la división.
// Pedir dos números, mostrar el resto de la división.
// Pedir dos números, mostrar si el primer número es divisible por el segundo.
// Pedir dos números y el nombre de una operación, mostrar el resultado.
// Pedir un número, mostrar la suma total desde 1 hasta n.
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
// Pedir un número, mostrar los números desde n hasta 0.


     



