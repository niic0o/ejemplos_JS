// server mjs

const http = require("http"); //Para convertir de Mosulo CommonJS a Modulo ES necesito crear un package.json
//en paclage.json agregar "type": "module",

// node se encarga de la logica de una creacion y conexion a un servidor usando el protocolo http
// si creamos un servidor, necesitamos programar la respuesta http que va a dar
const server = http.createServer( (req, res) =>{
    res.writeHead(200,  {'Content-Type': 'text/plain'});
    res.end("Hola mundo\n");
});

//le disgo al servidor creado que escuche
server.listen(3000, "127.0.0.1", () => {
    console.log("Soy un localhost y estoy escuchando en el puerto 3000");
});