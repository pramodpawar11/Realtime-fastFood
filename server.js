const express = require("express")
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.render("home")
})

app.use(expressLayout);
app.use(express.static("public"))

// app.use('views',path.join(__dirname,"/resources/views"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/resources/views"))


app.listen(PORT,()=>console.log(`Port is running on ${PORT}`));