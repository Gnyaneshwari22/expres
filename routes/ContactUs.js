const express = require("express");
const router = express.Router();
const ContactUSController = require("../controllers/conatctUs");

router.get("/contact-us", ContactUSController.getContactFile);

router.post("/contact-us", ContactUSController.postContactFile);

module.exports = router;
