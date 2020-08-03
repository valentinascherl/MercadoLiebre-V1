//Llamo a express y a su método
const express = require("express");
const app = express();

//Defino el puerto a usar
const port = 5000;

//Rutas
const rutasMain = require("./routes/main");

//Creo el servidor en el puerto indicado
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

//Envío los datos a sus respectivas rutas requeridas
app.use("/", rutasMain);