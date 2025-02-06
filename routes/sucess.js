const express = require("express");
const router = express.Router();
const SucessController = require("../controllers/sucess");

router.get("/success", SucessController.getSucessFile);

module.exports = router;
