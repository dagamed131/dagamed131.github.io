const UserModel = require('../models/UserModel')
//level 3
//const md5 = require("md5");
//
//level 4
//const bcrypt = require("bcrypt");
//
//level 5
const passport = require("passport");
//
exports.register = async (req, res) => {
    //level 5
    UserModel.register({username: req.body.username}, req.body.password, function (err, user) {
        if (err){
            console.log(err)
            res.redirect("/register")
        }else {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/posts")
            });
        }
    })
    //

    //level 4
    /*bcrypt.hash(req.body.password, 10, function(err, hash) {
        const newUser = new UserModel({
            email: req.body.username,
            //level 1 2
            //password: req.body.password
            //level 3
            //password: md5(req.body.password)
            //level 4
            password:hash
            //
        });
        newUser.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.render("secrets");
            }
        });
    })*/
    //
};

exports.login = async (req, res) => {
    //level 5
        let user =new UserModel({
            username:req.body.username,
            password:req.body.password
        })

        req.login(user, function (err){
            if (err){
                console.log(err)
            }else {
                passport.authenticate("local")(req, res, function () {
                    res.redirect("/posts")
                });
            }
        })
    //

    /*const username = req.body.username;
    const password = req.body.password;
    //const password = req.body.password;
    //level 3
    //const password = md5(req.body.password);
    //

    UserModel.findOne({email: username}, function(err, foundUser){
        if (err) {
            res.send("404")
        } else {
            if (foundUser) {
                bcrypt.compare(password, foundUser.password, function(err, result) {
                    if(result===true) {
                        res.render("secrets");
                    }
                });
                //if (foundUser.password === password) {
                //    res.render("secrets");
                //}
            }
        }
    })*/

};
//level 6
/*exports.authGoogle = async (req, res) => {
    console.log("asd")
    passport.authenticate('google',{ scope: ["profile"] })
}*/