const mongoose = require("mongoose");
const {Schema} = mongoose;
const PinSchema = require("./pin").Schema;
const bcrypt = require("bcryptjs");

const BoardSchema = new Schema({
    user:{type: String, required: true},
    name: {type: String, required: true},
    uniqueName: {type: String, required: true, unique: true},
    pins:{type: [PinSchema]}
});

BoardSchema.methods.hashName = async (password) => {
    const salt = await bcrypt.genSalt(10); //Number rule to encrypt
    const hash = bcrypt.hash(password, salt);
    // return hash
    return password
};


module.exports = mongoose.model("Board", BoardSchema);