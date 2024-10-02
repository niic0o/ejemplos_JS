/*
Pasos para que fetch funcione en node.js 13.14.0.
1- en la raiz del proyecto 'npm init' en la terminal
2- agregar en package.json ...
    "type": "module",
    "dependencies": {
    "node-fetch": "^2.6.1"
  }
3- npm install
4- en la terminal "ren ej_03_solicitud_HTTP.js ej_03_solicitud_HTTP.mjs"
5- importar en ..mjs "import fetch from 'node-fetch';"
6- Usar fetch como si fuese nativo 
*/

import fetch from "node-fetch";
/*
------------ descomentar solo un fetch para ver y entender la magia ----

fetch("https://jsonplaceholder.typicode.com/users")
.then((respuesta)  => respuesta.json()) // convierto  la respuesta a un objeto json
.then((data) => console.log(data))  
.catch((error) => console.error(error));

fetch("https://jsonplaceholder.typicode.com/posts")
.then((respuesta)  => respuesta.json()) // convierto  la respuesta a un objeto json
.then((data) => console.log(data))  
.catch((error) => console.error(error));
*/

//mapeo data en un objeto y le digo que me muestre los valores que recibe el atributo name
fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => respuesta.json())
  .then((data) => data.map((elemento) => console.log(elemento.name)))
  .catch((error) => console.log(error));

setTimeout(() => {
  console.log("Ahora vamos a filtrar los datos por un nombre cuando llegue la promesa");
  console.log("...");
  console.log("...");
  console.log("Filtrando");
}, 1000);

setTimeout(() => {  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        let buscar = "nj";
        let resultado = data.filter((elemento) => elemento.name === buscar);
        // filter devuelve un array
        if(resultado.length > 0){
            console.log(resultado);
        }else{
            console.log("No se encontró el nombre");
            console.log("buscaremos otro")
        }
        
    })
    .catch((error) => console.log(error));
}, 2500);

setTimeout(() => {  
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        let buscar = "Glenna Reichert";
        let resultado = data.filter((elemento) => elemento.name === buscar);
        // filter devuelve un array
        if(resultado.length > 0){
            console.log(resultado);
        }else{
            console.log("No se encontró el nombre");
        }
        
    })
    .catch((error) => console.log(error));
}, 4000);
