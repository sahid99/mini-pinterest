const mongoose = require("mongoose");
const {Schema} = mongoose;

const PinSchema = new Schema({
    api_ID:{type: String, required: true},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    url: {type: String, required: true} 
});

module.exports = mongoose.model("Pins", PinSchema);