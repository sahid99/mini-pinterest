const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/users_controller");
const passport = require("passport");

router.get("/", UserCtrl.getUsers);
router.post("/signin", UserCtrl.signin);
router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.json({mess:"yes"});
});
router.post("/signup", UserCtrl.signup);

module.exports = router;