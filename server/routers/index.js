const express = require("express");
let users = require("./userRouter");
let auth = require("./authRouter");
const router = express.Router();

router.use("/users", users);
router.use("/auth", auth);

module.exports = router;
