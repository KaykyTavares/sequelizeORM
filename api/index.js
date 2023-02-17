const express = require("express");
const routes = require("./routes")

const app = express();

routes(app)

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running in url: http://localhost:${port}`);
});

module.exports = app;