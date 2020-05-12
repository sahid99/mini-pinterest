const express = require("express");
const router = express.Router();
const PinCtrl = require("../controllers/pin_controller");

router.get("/", PinCtrl.getPins);
router.get("/search/:query", PinCtrl.getFromPexelsAPI);
router.post("/", PinCtrl.savePin);

module.exports = router;