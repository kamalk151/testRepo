var express = require("express");

var { userList, userDelete } = require("../controllers/adminController");
var router = express.Router();

router.get("/user-list", userList);
router.get("/user-delete", userDelete);
module.exports = router;
