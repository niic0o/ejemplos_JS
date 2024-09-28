/* console log y explicitacion de un objeto
console.log("hola mundo!");

const persona = {nombre: "Juan", edad: "40", direccion: "Alla nio"};
console.log(persona);
console.table(persona);
console.warn("esta es una advertencia");
console.error("este es un error");
*/

//inspeccion de objetos. Busco a pedro, cambio por Jorge guardo y entro en un if
const persona = { nombre: "Pedro", edad: "40", direccion: "Alla nio" };
persona.nombre = persona.nombre.replace("Pedro", "Jorge");
console.log(persona.nombre);
if (persona.nombre === "Jorge") {
  console.warn("esto es peligroso");
  console.info("esto es informativo");
  console.error("esto es un error");
}

//medir tiempos de ejecucion
console.time("Tiempo de ejecucion");
for (let i= 0; i < 10000; i++){
    // simular un proceso de ejecucion
    let temp = Math.sqrt(i);
}
console.timeEnd("Tiempo de ejecucion");
