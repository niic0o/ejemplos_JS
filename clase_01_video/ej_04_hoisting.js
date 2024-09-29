// proceso en el que js carga definiciones y asignaciones primero, luego el resto del codigo

console.log(nombre);  //aca nombre esta declarado  pero no asignado, por lo que es undefined
console.log(edad); // solo esta definida edad
mostraNombre(); //aca ejecuta la funcion
mostraEdad();

function mostraEdad(){
    edad = 50;
    console.log(edad);
}

var edad = 31; // aca edad recien es asignada
var nombre = 'Pedro'; // aca nombre recien es asignado


function mostraNombre(){
    let nombre  = 'Juan';
    return console.log(nombre);
}

console.log(edad);