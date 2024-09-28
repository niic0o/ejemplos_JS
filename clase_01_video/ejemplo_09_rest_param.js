const inicializador = 100;
function sumar(...numeros){
    console.log(numeros);
    return numeros.reduce((acc, num) => acc + num, inicializador);
}

console.log(sumar(1, 2, 4 ,8, 16));