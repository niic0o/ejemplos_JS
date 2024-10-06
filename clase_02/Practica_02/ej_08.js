// Ejercicio 8: Destructuring
// Tarea: Usa destructuring para extraer el valor de "nombre" del objeto "persona".

let persona = {
    nombre: "Ana",
    edad: 30,
  };

let {nombre} = persona;
console.log(nombre);

//otro ejercicio
let {edad} = persona;
console.log("Quise decir, soy: " + nombre  + " y tengo: " + edad + " años");
