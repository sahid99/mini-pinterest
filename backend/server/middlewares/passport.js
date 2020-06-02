const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const IerrorDispatcher = require("../design_patterns/builder/errorDispatcher");

const errorDispatcher = new IerrorDispatcher();
//Error Build
const errorBuilders = require("../design_patterns/builder/errorBuilders");
//Concrete Builders
const authErrorBuilder = new errorBuilders.authErrorBuilder();
const passwordErrorBuilder = new errorBuilders.passwordErrorBuilder();

//The posible errors 
const authError = errorDispatcher.construct(authErrorBuilder);
const passwordError = errorDispatcher.construct(passwordErrorBuilder);

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const user = await User.findOne({email: email});
    
    if(!user){
        return done(null, false, authError.error);
    }
    else{
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        }
        else{
            return done(null, false, passwordError.error);
        }
    }
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
});