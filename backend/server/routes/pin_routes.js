const express = require("express");
const router = express.Router();
const PinCtrl = require("../controllers/pin_controller");
const auth = require("../middlewares/auth");

router.get("/", auth, PinCtrl.getPins);
router.get("/search/:query", auth, PinCtrl.getFromPexelsAPI);
router.post("/", auth, PinCtrl.savePin);

module.exports = router;