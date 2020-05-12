const express = require("express");
const router = express.Router();
const PinCtrl = require("../controllers/pin_controller");

router.get("/", PinCtrl.getPinsMain);

module.exports = router;
