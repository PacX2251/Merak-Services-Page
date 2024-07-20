const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
// const cors = require("cors");

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET"); //PUT,POST,DELETE
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "data", "productos.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error leyendo el archivo JSON:", err);
      res.status(500).send("Error al leer el archivo JSON");
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
