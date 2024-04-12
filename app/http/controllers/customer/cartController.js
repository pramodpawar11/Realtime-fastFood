const cartController = () => {
  return {
    cart(req, res) {
      res.render("customers/cart");
    },
    update(req, res) {
        console.log(req.session.cart);
    //   if (!req.session.cart) {
    //     req.session.cart = {
    //       items: {},
    //       totalQty: 0,
    //       totalPrice: 0,
    //     };
    //   }
    //   let cart = req.body.cart;
    //   console.log(cart);
      return res.json({data:"All ok"})
    },
  };
};
module.exports = cartController;
