//REST
const inicializador = 100;
function sumar(...numeros){
    console.log(numeros);
    return numeros.reduce((acc, num) => acc + num, inicializador);
}

console.log(sumar(1, 2, 4 ,8, 16));

//funcion SPREAD

const numerote = [1024, 1048, 1096];
const numerito = [1.2, 2.3, 4.7];
const arreglo = [...numerote, 10, 20, ...numerito];
console.log(arreglo);
