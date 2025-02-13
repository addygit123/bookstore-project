const express = require("express");
const { createAOrder } = require("./order.controller");

const router = express.Router();

//post order endpoint
router.post("/", createAOrder);

module.exports = router;
