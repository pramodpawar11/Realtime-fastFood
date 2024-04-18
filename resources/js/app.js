const axios = require("axios");
import { initAdmin } from './admin.js';

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector("#cart-count");
import Noty from 'noty';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelector("nav-items")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})





const updatePizza = async (pizza) => {
    try {
        const res = await axios.post("/update-cart", pizza);
        cartCount.innerHTML = res.data.totalQty
        new Noty({
            type:"success",
            timeout:1000,
            text: "Item added to cart"
          }).show()

    } catch (error) {
        console.error("Error updating cart:", error);
    }
};

addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let pizza = JSON.parse(btn.dataset.pizza);
        console.log(pizza);
        updatePizza(pizza);
    });
});

const alertMsg = document.getElementById("success-alert");
if(alertMsg){
    setTimeout(()=>{
        alertMsg.remove();
    },2000);
}

initAdmin()

