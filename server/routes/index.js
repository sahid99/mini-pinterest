const express = require("express");
const router = express.Router();
// const proxy = require("../controllers/proxy");

router.get("/", async (req, res) => {
    // var proxy_res = await proxy("flower");
    res.json({"hello": "world!"});
});

module.exports = router;
