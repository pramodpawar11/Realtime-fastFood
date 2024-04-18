const express = require("express");
const router = express.Router();
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customer/cartController");
const orderController = require("../app/http/controllers/customer/orderController");
const adminOrderController = require("../app/http/controllers/admin/orderController");
const guest = require("../app/http/middlewares/guest.js");
const admin = require("../app/http/middlewares/admin.js");
const auth = require("../app/http/middlewares/auth.js");

router.get("/", homeController().index);

router.get("/cart", cartController().cart);
router.post("/update-cart", cartController().update);

router.get("/login", guest, authController().login);
router.post("/login", authController().userLogin);

router.get("/signup", guest, authController().signup);
router.post("/signup", authController().userSignup);

router.post("/logout", authController().logout);

router.post("/orders", auth, orderController().store);
router.get("/customer/orders", auth, orderController().customerOrders);

router.get("/admin/orders", admin, adminOrderController().index);

module.exports = router;
