const colores = ['azul', 'amarillo', 'verde', 'dorado', 'celeste', 'anaranjado'];

//extraigo un color del arreglo
const aislar = colores.filter((color) => !color.search('celeste'));
console.log(aislar);
//quito un color del arreglo
const filtrar = colores.filter((color) => color.search('celeste'));
console.log(filtrar);

//map aplica una regla a todos los elementos del vector
const numeritos = [2, 4, 6, 8, 10];

const numerasos = numeritos.map((numero) => numero ** 5);
console.log(numerasos);

// objeto metodos
let objeto = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Bogota',
    saludo : function() {return ('Hola soy ' + this.nombre + ' de ' + this.ciudad + ' Y tengo ' + this.edad + ' de edad')}
}
console.log(objeto.saludo())
objeto.edad = 32;
objeto.ciudad = 'Caracas';
console.log('Me equivoque. ' + objeto.saludo());