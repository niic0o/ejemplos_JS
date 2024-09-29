var nombre = "Juan";
nombre = "Pedro";
console.log(nombre);

//perduracion de los asignaciones en el ambito de una condicion
let edad = 25;
let años;
if (edad === 25) {
  edad = 30;
  console.log(edad);
  let años = 20;
  console.log(años);
}
console.log(edad);
console.log(años);

const tiempo = 25;
if (tiempo === 25){
    //no se puede realizar: tiempo = 30;
    const tiempo = 20;
    console.log(tiempo);
}
console.log(tiempo);

//arreglos
const colores = ['azul', 'amarillo', 'verde'];
colores.pop();
console.log(colores);
colores.pop(); // quita de la cola
console.log(colores);
colores.push('violeta'); //agrega a la cola
console.log(colores);
colores.unshift('celeste'); // agrega a la pila
console.log(colores);