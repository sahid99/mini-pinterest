const proxy = require("../controllers/proxy");
const PexelCtrl = {};

PexelCtrl.getFromPexelsAPI = async (req, res) => {
    var proxy_res = await proxy("flower");
    res.json(proxy_res);
};

module.exports = PexelCtrl;