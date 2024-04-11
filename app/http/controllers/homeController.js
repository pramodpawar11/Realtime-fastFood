const Menu = require("../../models/menuModel.js");

function homeController (){
    return {
        async index(req,res){
            const MenuData = await Menu.find({});
            console.log(MenuData);
            res.render("Home",{pizzas:MenuData});
        },
        
    }
}  

module.exports = homeController;