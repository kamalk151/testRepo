const express = require("express");
const db = require("./dbConfig");
const lang = require("./libs/lang/lang");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routers/index");
dotenv.config();
const app = express();

//Middleware
//if passing witCredential true from client side
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
app.use(bodyParser({ urlEncoded: true }));

app.use("/", router);

app.listen(process.env.PORT, (req, res) => {
  console.log(
    "server is running on this port number http://localhost:" + process.env.PORT
  );
});
