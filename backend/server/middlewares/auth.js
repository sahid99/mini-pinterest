const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next){

    const token = req.headers['x-auth-token'];
    //Check token given
    if(!token){
        //Important the return so it doesn´t continue to do things
        return res.status(401).json({message: "No token, auth denied"});
    }

    try{
        const decode = jwt.verify(token, config.get("token_secret"));
        req.user = decode;
        next();
    }catch(e){
        return res.status(400).json({message: "Token is not valid"});
    }
}

module.exports = auth;