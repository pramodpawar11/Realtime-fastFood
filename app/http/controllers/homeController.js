const Menu = require("../../models/menuModel.js");

function homeController (){
    return {
        async index(req,res){
            const MenuData = await Menu.find({});
            res.render("Home",{pizzas:MenuData});
        },
        
    }
}  

module.exports = homeController;