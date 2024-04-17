const passport = require("passport");
const User = require("../../models/userModel");
const bcrypt = require('bcrypt');


const authController = ()=>{
    return {
        login:function(req,res){
            res.render("auth/login");
        },
        async userLogin(req,res,next){
            passport.authenticate("local",(err,user,info)=>{
                if(err){
                    req.flash("erro",info.message)
                    return next(err)
                }
                if(!user){
                    req.flash("error",info.message)
                    return res.redirect("/login");
                }
                req.logIn(user,(err)=>
                {
                    if(err){
                        req.flash("error",info.message)
                        return next(err)
                    }
                    return res.redirect("/")
                })
            })(req,res,next)
        },
        signup(req,res){
            res.render("auth/signup");
        },
        async userSignup(req,res){
            const {username,email,password} = req.body;
            const usersEmail = await User.findOne({email});
            if(usersEmail){
                req.flash("message","Email is already exists")
                return res.redirect("/signup");
            }
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password,salt);
            const user = await User.create({
                username,
                email,
                password:hashPassword
            });
            return res.redirect("/login");
        }
    }
}
module.exports = authController;