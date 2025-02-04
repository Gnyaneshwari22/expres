const http = require("http");
const express = require("express");
const app = express();

//const server = http.createServer(app);
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/Admin");
const shopRoute = require("./routes/Shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
