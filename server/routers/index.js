const express = require("express");
let users = require("./userRouter");
let auth = require("./authRouter");
const router = express.Router();
/**
 * Refresh token function 
 */
 const refreshToken = (req, res,next)=> {
    console.log(req,'====',req.cookie)
    next() 
    //console.log(req.cookie['refreshToken'])
}

router.use("/users", users);
router.use("/auth", auth);

module.exports = router;
 