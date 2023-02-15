const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/teste", (req, res) => {
  res.status(200).send({ mensagem: "boas vindas a API" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running in url: http://localhost:${port}`);
});

module.exports = app;