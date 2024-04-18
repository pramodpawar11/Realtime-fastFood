const Order = require("../../../models/orderModel"); // Adjust the path accordingly

function orderController() {
    return {
        async index(req, res) {
            try {
                const orders = await Order.find({ status: { $ne: 'completed' } })
                    .sort({ 'createdAt': -1 })
                    .populate('customerId', '-password')
                    .exec();

                if (req.xhr) {
                    return res.json(orders);
                } else {
                    return res.render('admin/orders', { orders });
                }
            } catch (error) {
                console.error('Error in orderController.index:', error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}

module.exports = orderController;
