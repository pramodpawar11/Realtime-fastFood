const Order = require("../../../models/orderModel");
const moment = require("moment");

function orderController (){
    return {
        async store(req,res){
            const {phone,address} = req.body;
            if(!phone || !address){
                req.flash("error","All credentials are required");
                return res.redirect("/cart");
            }
            const order =await Order.create({
                customerId:req.user._id,
                items:req.session.cart.items,
                phone:phone,
                address:address,
            });
            req.flash("success","order placed successfully")
            delete req.session.cart
            return res.redirect("/customer/orders");
        },
        async customerOrders(req,res){
            const order = await Order.find({customerId:req.user._id},null,{sort:{"createdAt":-1}});
            return res.render("customers/order",{
                orders:order,moment:moment
            });
        }
    }
}

module.exports = orderController