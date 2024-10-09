const app = require('./src/server');
require('dotenv').config()

const PORT = process.env.PORT
app.listen(PORT, console.log(`Te estoy escuchando por el puerto ${PORT}`));
