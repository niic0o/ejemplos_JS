//ambitos de una funcion
const { radicame, sumame, multiplicame, dividime } = require('./ej_10_arrow_tooltips.js');
let a = 32;
const c = 10;
let b = 6;

/*
Lo que se realizo aca es una ejecucion en cadena de funciones,
cada funcion realiza una operacion matematica, y le pasa su resultado a otra funcion
para que opere sobre eso y repita el procedimiento con otra funcion.
Se puede ver el scope de las variables que vienen como parametro y las declaradas de manera global
*/


function nieto(dos){
    let uno = radicame (dos, c);
    console.log("soy nieto y la radicacion es: " + uno);
    return uno;
}

function hijo (tres){
    let dos = sumame(tres,a);
    console.log("soy hijo y la suma es: " + dos);
    nieto(dos);
}

function padre(cuatro){
    const tres = multiplicame(cuatro,b);
    console.log("soy padre y la multiplicacion es: " + tres);
    hijo(tres);
}

function abuelo(){
    let cuatro = dividime(a,b);
    console.log("soy abuelo y la division es: " + cuatro);
    padre(cuatro);
}

abuelo();
console.log("Ahora ejecutaremos solo en el ultimo nivel la funcion nieto: ");
console.log(nieto(a));

// observacion, las ejecuciones del archivo require tambien se muestran en pantalla