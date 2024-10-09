const express = require('express'); //importo las funcionalidades de express
const morgan = require('morgan'); //importo las funcionalidades de morgan
// morgan registra informacion sobre solicitudes y respuestas HTTP
// te informa de los errores que peueden estar ocurriendo. La app express utiliza ese middleware


const app = express(); //creo una aplicacion express

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
    res.send("Que lo que");
    console.log("(metodo) (ruta) (estado) (latencia)");
    next();
})

module.exports = app; // exporto la app

