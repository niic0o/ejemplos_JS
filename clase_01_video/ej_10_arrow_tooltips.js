//-------------funcion arrow--------------
//definiciones
let sumame = (a,b) => a + b ;
let multiplicame = (a,b) => a * b;
let dividime = (a,b) => a / b;
/**
 * calcula la potencia b-esima de un numero a
 * @param {number} a - base
 * @param {number} b - exponente
 * @returns {number} la potencia b-esima de a
 */
let potenciame = (a,b) => a ** b;

/**
 * calcula la raiz a-esima de un numero b
 * @param {number} a - indice de la raiz.
 * @param {number} b - numero base.
 * @returns {number} la raiz a-esima de b.
 */
let radicame = (a,b) => b ** (1/-a);


// calculos

function test_ej_10(){ 
let a = 2;
let b = 6;
let x = '10';

console.log(sumame(a,b));
console.log(multiplicame(a,b));
console.log(dividime(a,b));
console.log(potenciame(x,b));
console.log(radicame(a,x));
}

test_ej_10();

//exportacion de funciones
const operaciones = {
    sumame,//: (a,b) => a + b,
    multiplicame,//: (a,b) => a * b,
    dividime,//: (a,b) => a / b,
    potenciame,//: (a,b) => a ** b,
    radicame,//: (a,b) => b ** (1/-a)
};

module.exports = operaciones;