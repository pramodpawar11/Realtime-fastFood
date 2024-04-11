const { error } = require("laravel-mix/src/Log");
const mongoose = require("mongoose");
const mongoDbConnection = (URL) => {
  mongoose.connect(URL);
  const connection = mongoose.connection;
  connection.on("connected",()=>{
    console.log("connected to database");
  });
  connection.on("error",(error)=>{
    console.log("connection fail"+error);
  })
};
module.exports = {mongoDbConnection}
