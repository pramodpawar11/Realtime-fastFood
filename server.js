require("dotenv").config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3000;
const webRouter = require("./routers/web");
const { mongoDbConnection } = require("./connections");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo");

app.use(flash());
app.use(expressLayout);
app.use(express.static("public"));

// console.log("Session Secret:", process.env.Session_Secret);
// console.log("Database URL:", process.env.DataBase_URL);


// Setup MongoDB connection and session store
mongoDbConnection(process.env.DataBase_URL);

app.use(
  session({
    secret: process.env.Session_Secret,
    resave: false,
    store: new MongoStore({
      mongoUrl: process.env.DataBase_URL,
      collectionName: "session"
    }),
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // Session cookie expiry time
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/resources/views"));
app.use("/", webRouter);

app.listen(PORT, () => console.log(`Port is running on ${PORT}`));
