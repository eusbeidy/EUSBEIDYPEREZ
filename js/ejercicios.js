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
     alert(`Los números pares desde 1 hasta ${numero}, son: ${pares}`);
}t pares = '';
    for (let i = 1; i <= numero; i++) {
      if (i % 2 === 0) {
        pares += i + ', ';
      }
    }
  */



// MULTIPLOS DE DOS 

//1-Pedir un número, mostrar el doble de n.

/*function doble() {
    const nmr = parseInt(prompt('Ingresa un número'));
    const resultado = nmr * 2;
   alert('el doble de' + nmr + ' es ' + resultado);
    
    }
    doble();

 // Pedir un número, mostrar el triple de n.
 /*function eltriple() {
    const numero = parseInt(prompt('Ingresa un número'));
    const resultado = parseInt( numero * 3);
    alert(`el triple de ${numero} es ${resultado}`);
 }
 eltriple();*/

 // Pedir un número, mostrar la mitad de n.

 /*function laMitad() {
    const numero = parseInt(prompt('Ingresa un numero'));
    const resultado = numero / 2;
    alert(`la mitad de ${numero} es ${resultado}`);
 }
 laMitad();*/

 // Pedir un número, mostrar la tercera parte de n.

 /*function terceraParte() {
    const numero = parseInt(prompt('Ingrese un numero'));
    const resultado = numero / 3;
    alert(`la tercera parte de ${numero} es ${resultado}`);
 }
 terceraParte();*/


 // Pedir un número, mostrar el cuadrado de n.
 /* function elcuadrado() {
    const numero = parseInt(prompt('Ingresa un numero'));
    alert(`el cuadrado de ${numero} es ${numero * numero}`)
  }
  elcuadrado();*/

//Pedir un número, mostrar n reducido en 5.

 /*function reducidoDeCinco() {
    let reducido = parseInt(prompt('Ingresa un numero'));
    alert(`el numero ${reducido} reducido en 5 es ${reducido - 5}`)
 }
  reducidoDeCinco();*/

// Pedir un número, mostrar el doble de n más 4.

/*function dobleDeMasCuatro() {
    let numero = parseInt(prompt('Ingrese un numero'));
    let resultado = numero * 2 + 4;
    alert(`el doble de ${numero}, mas 4 es ${resultado}`);
    
}
 dobleDeMasCuatro();*/


// Pedir un número, mostrar si es positivo, negativo o si es cero.

/*function positivoNegativoCero() {
    const numero = parseInt(prompt('Ingrese un numero'));
    if (numero === 0) {
        alert('Ingreso un cero');
    }else if (numero < 0){
        alert('Ingreso un numero negativo');
    }else {
        alert('Ingreso un numero positivo');
    }
}
positivoNegativoCero();*/

// Pedir un número, mostrar si es par, impar o si es cero.
 /* function ceroParImpar() {
    const numero = parseInt(prompt('Ingresa un numero'));
    if (numero === 0) {
        alert('numero' + numero + 'es cero')
    }else if (numero % 2 === 0) {
        alert('el numero' + numero + 'es un numero par');
    }else{
        alert('el numero ' + numero + 'es un numero impar');
    }
    
  }
  ceroParImpar();*/


// Pedir un número, mostrar si es un número primo o no.
 /*function esPrimo() {
    const numero = parseInt(prompt('Ingresa un numero mayor que 1'));
    if (numero < 2) {
        alert('error, debes ingresar un numero mayor que 1')
        return
    }
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    if (contador === 2) {
        alert(`el numero ${numero} es primo`);
    }else{
        alert(`el numero ${numero}, no es primo`);
    }
 }
 esPrimo();*/
// Pedir dos números, mostrar la suma.
/*const sumaDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    alert(` ${numero1} + ${numero2} = ${numero1 + numero2}`);
}
sumaDeDosNumeros();*/
// Pedir dos números, mostrar la resta.

/*const restaDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    alert(` ${numero1} - ${numero2} = ${numero1 - numero2}`);
}
restaDeDosNumeros();*/

// Pedir dos números, mostrar la multiplicación.

/*const multiplicacionDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    alert(`${numero1} * ${numero2} = ${numero1 * numero2}`)
}
multiplicacionDeDosNumeros();*/

// Pedir dos números, mostrar la división.

/*const divicionDeDosNumeros = ()=> {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const resultado = numero1 / numero2
    alert(`${numero1} / ${numero2} = ${resultado}`)
}
divicionDeDosNumeros();*/

// Pedir dos números, mostrar el resto de la división.

/*function elResto() {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const resultado = numero1 % numero2;
    alert(` El resto es ${resultado }`)
}
elResto();*/

// Pedir dos números, mostrar si el primer número es divisible por el segundo.

/*const divisible = () => {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const resultado = numero1 % numero2;
    if (numero1 === numero2) {
        alert(`Si es divisible el Resultado es, ${numero1 / numero2}`);
    } else{
        alert('no se encontraron resultados.')
    }
}
divisible();*/

// Pedir dos números y el nombre de una operación, mostrar el resultado.

/*const resultado = () => {
    const numero1 = parseInt(prompt('Ingresa el primer numero'));
    const numero2 = parseInt(prompt('Ingresa el segundo numero'));
    const nOperacion = prompt('Ingresa el nombre de una Operacion');
    switch (nOperacion) {
        case sumar:
            alert(`${numero1} + ${numero2} = ${numero1 + numero2}`);
            break;
    
        default:
            break;
    }
          
}
resultado();*/


// Pedir un número, mostrar la suma total desde 1 hasta n.
  
/*function SumaUnoN() {
    let numero = parseInt(prompt('Ingresa un numero.'));
for (let  i= 1;  i <= numero ; i++) {
    if (i + numero) {
        console.log(i)
    }
}
SumaUnoN();*/

// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
/*function sumaPares() {
    const numero = parseInt(prompt('Ingresa un numero.'));
    let resultado= 0;
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultado = resultado + i;
        }

    }
    alert('la suma de los pares es' +  resultado);
}
 sumaPares();*/

// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
/*function sumaImpares() {
    const numero = parseInt(prompt('Ingresa un numero.'));
    let resultado = 0;
    for (let i = 1; i <= numero; i++) {
      if (i % 2 ===/ 0) {
        resultado += i ;
      }
    }
    alert('la suma de los impares' + resultado);
}
 sumaImpares();*/

// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
/*function multiplos() {
    const numero = parseInt(prompt('Ingresa un numero'));
    let i = 0;
    while (i =< numero) {
        if (i % 3 === 0) {
            
        }
        i++;
    }
}
 multiplos();

// Pedir un número, mostrar los números desde n hasta 0.

function numeros() {
    const numero = parseInt(prompt('Ingresar un numero.'));
    for (let i = numero; i >= 0 ; i--) {
        console.log(i);
        
    }
}
numeros();*/


     



