const pool = require("../database/db");

async function getProductos(req, res) {
  pool.query("SELECT * FROM products", function (err, results) {
    for (i = 0; i < results.length; i++) {
      //   var sanitizar = JSON.stringify(results[i].name).replace(/-/g, "");\
      results[i].title = results[i].title.replace(/[,.-]/g, "");

      //Redondeo con reglas personalizadas
      const decimalP = results[i].price % 1;
      if (decimalP >= 0.6) {
        precioRedondeado = Math.round(results[i].price);
        results[i].price = precioRedondeado - 0.1;
      } else {
        results[i].price = Math.floor(results[i].price);
      }

      //Redondeo del descuento segun las reglas normales
      results[i].discountPercentage = Math.round(results[i].discountPercentage);

      //Redondeo con reglas personalizadas y sin decimales
      const decimalR = results[i].rating % 1;
      if (decimalR >= 0.6) {
        precioRedondeado = Math.round(results[i].rating);
        results[i].rating = precioRedondeado;
      } else {
        results[i].rating = Math.floor(results[i].rating);
      }

      //Categoria con letras invertidas
      const reverseString = (texto) => texto.split("").reverse().join("");
      results[i].category = reverseString(results[i].category);
    }

    res.status(200).send({ msg: results });
  });
}

module.exports = {
  getProductos,
};
