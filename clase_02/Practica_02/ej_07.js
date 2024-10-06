// Ejercicio 7: Objetos
// Tarea: Completa el objeto "persona" añadiendo una propiedad "saludar" que sea una función que devuelva "Hola, mi nombre es [nombre]".

let persona = {
    nombre: "Juan",
    edad: 25,
    saludar: () => "Hola, mi nombre es " + persona.nombre
  };

console.log(persona.saludar());