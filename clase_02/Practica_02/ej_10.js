// Ejercicio 10: Fetch API
// Tarea: Completa la función para obtener datos desde una API utilizando fetch y async/await.

import fetch from "node-fetch"; // Importa la función fetch de node-fetch

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    data.forEach(user => {
      let { name, username, email } = user
      console.table([ { name, username, email } ]);      });
  }
  
  fetchData();
/*
  let personas { name, username, email } = user
  console.table(personas)*/