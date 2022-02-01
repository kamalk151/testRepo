const express = require("express");
let users = require("./userRouter");
let admin = require("./adminRouter");
let chat = require("./chatRouter")
let auth = require("./authRouter");
const router = express.Router();


router.use("/users", users);
router.use("/auth", auth);
//router.use("/chat", chat);
router.use("/admin", admin);

module.exports = router;
 