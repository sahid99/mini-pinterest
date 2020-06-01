const express = require("express");
const app = express();
const morgan = require("morgan");
const { mongoose } = require("./database");
const cors = require("cors");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require('passport');

//Setting 
app.set("port", process.env.PORT || 4000);
require("./middlewares/passport");

//Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(session({
    secret: "sahid_secret",
    resave: true, 
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api/pin", require("./routes/pin_routes"));
app.use("/api/board", require("./routes/board_routes"));
app.use(require("./routes/index"));
app.use("/users", require("./routes/users_routes"));

//Startind the server
app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
})