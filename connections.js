const mongoose = require("mongoose");

const mongoDbConnection = async (URL) => {
  try {
    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to database");
  } catch (error) {
    console.error("Connection failed:", error);
  }
};

module.exports = { mongoDbConnection };
