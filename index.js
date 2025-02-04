const http = require("http");
const express = require("express");
//const server = http.createServer(app);

const app = express();

app.use((req, res, next) => {
  console.log("In the frst middle ware");
  next();
});

app.use((req, res, next) => {
  console.log("In the second middle ware");
  res.send(`<h1>Welcome to Express JS</h1>`);
});

app.listen(4000, () => {
  console.log("Server started on port 3000");
});
