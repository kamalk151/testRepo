var express = require("express");
var {
  login,
  createUser,
  forgotPassword,
} = require("./../controllers/userController");

var router = express.Router();

router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/create", createUser);

module.exports = router;
