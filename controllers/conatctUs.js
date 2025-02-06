const path = require("path");

exports.getContactFile = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
};

exports.postContactFile = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};
