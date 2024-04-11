const express = require("express");
const router = express.Router();
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customer/cartController");

router.get("/",homeController().index);

router.get("/cart",cartController().cart);

router.get("/login",authController().login)

router.get("/signup",authController().signup);

module.exports = router;