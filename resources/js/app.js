const axios = require("axios");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

const updatePizza = async (pizza)=>{
    const res = await axios.post("/update-cart",pizza);
    console.log(res);
    
}
addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let pizza = JSON.parse(btn.dataset.pizza);
        updatePizza(pizza);
    });
});
