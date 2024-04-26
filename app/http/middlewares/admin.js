function admin(req,res,next){
    if(req.isAuthenticated && req?.user?.role=="admin"){
        console.log("hello world")
        return next();
    }
    return res.redirect("/");
}
module.exports = admin