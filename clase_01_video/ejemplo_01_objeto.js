console.log("hola mundo!");

//inspeccion de objetos. Busco a pedro, cambio por Jorge guardo y entro en un if
const persona = { nombre: "Pedro", edad: "40", direccion: "Alla nio" };
persona.nombre = persona.nombre.replace("Pedro", "Jorge");
console.log(persona.nombre);
if (persona.nombre === "Jorge") {
  console.warn("esto es peligroso");
  console.info("esto es informativo");
  console.error("esto es un error");
}

//en cuantos milisegundos mi maquina ejecuta una porcion de codigo?
console.time("Ejecute este codigo en");
for (let i= 0; i < 10000; i++){
    // simular un proceso de ejecucion
    let temp = Math.sqrt(i);
}
console.timeEnd("Ejecute este codigo en");
