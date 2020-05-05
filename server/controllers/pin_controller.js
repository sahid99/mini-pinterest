const Pin = require("../models/pin");
const PinCtrl = {};

PinCtrl.getPins = async (req, res) => {
    var pins = await Pin.find();
    res.json(pins);
}

PinCtrl.savePin = async (req, res) => {
    const new_pin = new Pin(req.body);
    await new_pin.save();
    res.json({
        "status": "Saved"
    });
    console.log(new_pin);
}

module.exports = PinCtrl;