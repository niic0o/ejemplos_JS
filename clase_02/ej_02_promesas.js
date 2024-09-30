let persona = {
  nombre: "juan",
  edad: 71,
};

let persona2 = {
  nombre: "pedro",
  edad: 69,
};

console.log(
  "La persona: " + persona.nombre + " tiene: " + persona.edad + " años"
);
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (persona.edad >= 70) {
      resolve("Jubilacion aceptada");
    } else {
      reject("Jubilacion rechazada");
    }
  }, 3000);
});

promesa
  .then((exito) => {
    console.log(persona.nombre + " recibirá su jubilacion");
  })
  .catch((error) => {
    console.log(persona.nombre + " no recibirá su jubilacion");
  });

console.log(
  "La persona: " + persona2.nombre + " tiene: " + persona2.edad + " años"
);
let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (persona2.edad >= 70) {
      resolve("Jubilacion aceptada");
    } else {
      reject("Jubilacion rechazada");
    }
  }, 6000);
});

promesa2
  .then((exito) => {
    console.log(persona2.nombre + " recibirá su jubilacion");
  })
  .catch((error) => {
    console.log(persona2.nombre + " no recibirá su jubilacion");
  });
