const express = require("express");
const ProductoController = require("../controllers/producto");

const api = express.Router();

api.get("/producto", ProductoController.getProductos);

module.exports = api;
