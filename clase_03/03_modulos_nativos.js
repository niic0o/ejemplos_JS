const path = require('path');
const os = require('os');
const crypto = require('crypto');

const rutaCompleta = path.join(__dirname,  'archivo.txt');
console.log("La ruta completa del archivo.txt es:  " + rutaCompleta);

const hash = crypto.createHash('sha256').update('Hasheame esto!').digest('binary');
console.log("Hash generado: " , hash);

console.log("Plataforma: ", os.arch());
console.log("Memoria libre: ", os.freemem());
console.log(" ", os.version());
