const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./database");

// const proxy = require("./controllers/proxy");

//Setting 
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(require("./routes/index"));

//Startind the server
app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
})