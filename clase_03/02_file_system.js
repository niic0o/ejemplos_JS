const fs = require("fs");

//lectura síncrona de un archivo
function leer(archivo) {
  try {
    const data = fs.readFileSync(archivo, "utf-8");
    console.log(data);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }
}

function escribir() {
  try {
    const create = fs.writeFileSync(
      "nuevoArchivo.txt",
      "El siguiente archivo contiene texto generado por un comando write file",
      "utf-8"
    );
    console.log("Archivo generado con exito!");
  } catch (error) {
    console.error("Error al generar el archivo:", error);
  }
}

let archivo = "archivo.txt";

leer(archivo);
escribir();
leer("nuevoArchivo.txt"); // si el archivo existe lo sobreescribe.
