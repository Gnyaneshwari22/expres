const path = require("path");

exports.ShopProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
