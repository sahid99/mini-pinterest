const mongoose = require("mongoose");
const config = require("config");
const URI = config.get("db_uri");

mongoose.connect(URI,{
    useCreateIndex: true,
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is conected"))
    .catch(err => console.error(err));

module.exports = mongoose;