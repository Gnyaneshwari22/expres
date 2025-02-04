const http = require("http");
const express = require("express");
//const server = http.createServer(app);
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST" name="add-product"><label>Name:</lable><input type="text" name="title" /><br></br><label>Number:</lable><input type="number" name="numberofprod" /><br></br><button type="submit">SUBMIT</button></form>`
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send(`<h1>Welcome to Express home JS</h1>`);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
