const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./database");
const cors = require("cors");


//Setting 
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/pin", require("./routes/pin_routes"));
app.use(require("./routes/index"));

//Startind the server
app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
})