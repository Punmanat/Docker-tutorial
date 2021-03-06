const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT | 3000;
const router = require("./router/router");
const ejs = require("ejs");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./templates"));
app.use(router);

app.listen(port, () => {
  console.log(`Server is running bind port docker on ${port}`);
});