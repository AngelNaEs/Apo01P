const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Importacion de Rutas
const productoRoutes = require("./router/producto");

//Configuracion Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Header HTTP - CORS
app.use(cors());

//Configuracion de rutas
app.use(`/`, productoRoutes);

module.exports = app;
