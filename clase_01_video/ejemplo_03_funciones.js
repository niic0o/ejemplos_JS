//alcance de una variable:
const nombre = 'Leo';

function mostrarNombreLocal(){
    //nuevo ambito de variable
    let nombre = 'Pedro'
    console.log(nombre);
}

function mostrarNombreGlobal(){
    console.log(nombre);
}

mostrarNombreLocal();
mostrarNombreGlobal();

