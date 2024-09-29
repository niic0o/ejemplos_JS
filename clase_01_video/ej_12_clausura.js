// clausuras: guarda la ejecucion de una funcion en un espacio de memoria

//1) se carga la definicion de micontador y se inicialica contador en 0
function micontador (){
    let contador = 0;
    return function(){        
    contador++;
    console.log(contador);
};
}

//2) con let guardamos el return de micontador() en un espacio de memoria 'contar'
let contar = micontador();
//3) ejecutamos contar ya que es una funcion
contar();
contar();
contar();
contar();
//4) por que cuenta y no inicializa?
//porque contar solo tiene 'return function()' en su memoria, no el inicializador.

//puedo ejecutar esas lineas en una sola linea de la sig manera:
contar(contar(contar(contar(contar(contar())))));