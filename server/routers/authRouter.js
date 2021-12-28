var express = require("express");
var {login,  forgotPassword, createUser, userList } = require("./../controllers/authController");
var router = express.Router();

router.post("/login", login);
router.patch("/forgot-password", forgotPassword);
router.post("/create", createUser);
router.post("/user-list", userList);

module.exports = router;
