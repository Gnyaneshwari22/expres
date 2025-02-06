const path = require("path");

exports.getSucessFile = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "sucess.html"));
};
