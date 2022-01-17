var express = require("express");

var { userList } = require("../controllers/adminController");
var router = express.Router();


router.get("/user-list", userList);
module.exports = router;
