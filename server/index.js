const express = require("express");
const http = require("http");
const db = require("./dbConfig");
const lang = require("./libs/lang/lang");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routers/index");
dotenv.config();
const app = express();
const server = http.createServer(app);
const socketio = require('socket.io')
let chat = require("./controllers/chatController")

//Middleware
//if passing witCredential true from client side
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(bodyParser({ urlEncoded: true }));

var io = socketio(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});
chat(io);

//app.use("/chat", chat);
app.use("/", router);


const port = process.env.PORT || 1000;
server.listen(port, (req, res) => {
  console.log(
    "server is running on this port number http://localhost:" + port
  );
});
