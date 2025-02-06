const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
});

router.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
});

module.exports = router;
