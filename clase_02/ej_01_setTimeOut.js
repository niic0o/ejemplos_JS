// retrasa la ejecucion por un tiempo determinado mientras continua ejecurando otros hilos

let cero = undefined;
let x = 5;
const time1 = 9000;
const time2 = 4000;

console.log("voy a dividir dos numeros");
console.log("La variable x= " + x + " divido por la variable cero = " + cero);
setTimeout(() => {
    console.log("Cero ahora vale: " + cero);
    let result = x / cero;
    console.log('resultado: ' + result)
}, time1)

//el resultado de la division sin el seTimeOut seria infinito, pero  con el seTimeOut se ejecuta despues de 2 segundos
//cuando ya tenemos el resultado de cero

console.log("Intentare que cero no valga " + cero);
setTimeout(() => {
    console.log("Procesando");
    cero = 2;
}, time2)
