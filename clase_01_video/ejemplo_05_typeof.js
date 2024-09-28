const nombre = 'Rogelio';
const edad = 55;    
function coso (){
    console.log('soy un coso');
}
const algo = {
    unacosa: 'pedro',
    idcosa: 8
}

let simbolo = Symbol("1sd/6"); //esto crea un espacio de memoria con esos valores simbolicos
//uso de typeof
console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(coso));
console.log(typeof(algo));
if(typeof(edad) === 'number'){
    console.log('edad es un numero');
}

if(typeof(algo) === 'object'){
    console.log(algo.idcosa);
    console.log(algo.unacosa);
}

if(typeof(coso) === 'function'){
    coso();
}

//typeof me tira un string diciendome que tipo de dato es