const express = require("express")
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3000;
const webRouter = require("./routers/web");
const {mongoDbConnection} = require("./connections");



app.use(expressLayout);
app.use(express.static("public"))

mongoDbConnection("mongodb://127.0.0.1:27017/pizza-database");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/resources/views"));
app.use("/",webRouter);


app.listen(PORT,()=>console.log(`Port is running on ${PORT}`));