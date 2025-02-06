const path = require("path");
const http = require("http");
const express = require("express");
const app = express();

//const server = http.createServer(app);
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/Admin");
const shopRoute = require("./routes/Shop");
const contactUs = require("./routes/ContactUs");
const success = require("./routes/sucess");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoute);
app.use(contactUs);
app.use(success);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
