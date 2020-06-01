const UserCtrl = {};
const User = require("../models/user"); 
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("config");

//Secret for token generation
const token_secret = config.get("token_secret");

UserCtrl.getUsers = (req, res) => {
    res.json({status:"works"});
};

UserCtrl.signin = async function (req, res, next) {
    const {email} = req.body;
    const newUser = await User.findOne({email:email});
    passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err || !user) {
        return res.status(400).json({
            message: 'Something is not with the login/signin',
            user   : user
        });
    }       
    req.login(user, {session: false}, (err) => {
       if (err) {
           res.send(err);
       }
       const token = jwt.sign({id:newUser._id}, token_secret);
       return res.json({auth:true, token, user: email});
    });
    })(req, res);
};


UserCtrl.signup = async (req, res) => {
    const {
        name, 
        email,
        password,
        confirm_password 
    } = req.body;
    const errors = [];
    if(password != confirm_password){
        errors.push({text: "Las contraseñas no coinciden."});
    }
    if(password.length < 4){
        errors.push({text: "La contraseña debe ser mayor a 4 digitos."});
    }
    if(errors.length > 0){
        res.json({errors, name, email, password, confirm_password});
    }else{
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        const token = jwt.sign({id:newUser._id}, token_secret, {
            expiresIn: 60*60*24
        });
        res.json({auth: true, token, user: email});
    }
};

module.exports = UserCtrl;