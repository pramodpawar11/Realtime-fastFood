const express = require("express");
const router = express.Router();
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customer/cartController");
const guest = require("../app/http/middlewares/guest.js");

router.get("/",homeController().index);

router.get("/cart",cartController().cart);

router.get("/login",guest,authController().login)
router.post("/login",authController().userLogin)

router.get("/signup",guest,authController().signup);
router.post("/signup",authController().userSignup);

router.post("/logout",authController().logout);

router.post("/update-cart",cartController().update);

module.exports = router;