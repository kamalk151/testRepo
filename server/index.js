const express = require("express");
const db = require("./dbConfig");
const lang = require("./libs/lang/lang");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
const router = require("./routers/index");
dotenv.config();
const app = express();

app.use(bodyParser({ urlEncoded: true }));

app.use("/", router);

app.listen(process.env.PORT, (req, res) => {
  console.log(
    "server is running on this port number http://localhost:" + process.env.PORT
  );
});
