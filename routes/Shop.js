const express = require("express");
const router = express.Router();
const shopProducts = require("../controllers/shop");

router.get("/", shopProducts.ShopProduct);

module.exports = router;
