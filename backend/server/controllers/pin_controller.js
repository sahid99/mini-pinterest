const Pin = require("../models/pin");
const PinCtrl = {};
const proxy = require("./proxy");

PinCtrl.getPinsMain = async (req, res) => {
    var proxy_res = await proxy.CuratedList();
    res.json(proxy_res);
};

PinCtrl.getFromPexelsAPI = async (req, res) => {
    var proxy_res = await proxy.SearchPin(req.params.query);
    res.json(proxy_res);
};

//Ruta que desaparecerá pronto
PinCtrl.getPins = async (req, res) => {
    var pins = await Pin.find();
    res.json(pins);
}

//Ruta que desaparecerá pronto
PinCtrl.savePin = async (req, res) => {
    const new_pin = new Pin(req.body);
    await new_pin.save();
    res.json({
        "status": "Saved"
    });
    console.log(new_pin);
}

module.exports = PinCtrl;