console.log("Hola mundo");
console.log("Chau mundo");

const axios = require('axios');

axios("https://jsonplaceholder.typicode.com/users")
.then((response) => console.log(response.data))
.catch((error) => console.error(error));

