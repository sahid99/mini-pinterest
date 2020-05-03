const mongoose = require("mongoose");

const URI = "mongodb+srv://sahid:enrico99@cluster0-wqsvs.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI,{
    useCreateIndex: true,
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is conected"))
    .catch(err => console.error(err));

module.exports = mongoose;