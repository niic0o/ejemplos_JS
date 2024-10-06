// Ejercicio 9: Promesas y Async/Await
// Tarea: Completa la función async para que espere la resolución de la promesa y luego imprima el resultado.
// Describe la cadena de ejecucion.

let persona = {nombre: "pedro",  edad: 25, ciudad: "madrid", calle: "San Martin", numero: 1245};

async function obtenerDatos() {
    let promesa = new Promise((resolve) => {
      setTimeout(() => resolve(persona), 1000);
    });    

    let resultado = await promesa;
    console.log(resultado);
  }
  
  obtenerDatos();

/*
1 obtenerDatos() se ejecuta →
2 Se crea la promesa promesa con new Promise((resolve) => { ... }) →
3 Se ejecuta el código dentro de la promesa, que incluye setTimeout(() => resolve(persona), 1000) →
4 El setTimeout programa la ejecución de resolve(persona) para dentro de 1 segundo →
5 El código continúa ejecutándose y llega a let resultado = await promesa; →
6 El await se queda esperando a que la promesa promesa se resuelva →
7 (1 segundo después) El setTimeout ejecuta resolve(persona), lo que resuelve la promesa promesa →
8 La promesa promesa se resuelve y devuelve el objeto persona →
9 El await recibe el resultado de la promesa y asigna el objeto persona a la variable resultado →
10 Se ejecuta console.log(resultado), lo que imprime el objeto persona en la consola →
*/