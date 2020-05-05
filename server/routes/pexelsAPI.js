const express = require("express");
const router = express.Router();

const PexelCtrl = require("../controllers/api_pexel");

router.get("/", PexelCtrl.getFromPexelsAPI);

module.exports = router;
