var express = require("express");
const jwt = require('jsonwebtoken')
const { refreshToken } = require("./../libs/helper/commonFiles"); 
var {login,  forgotPassword, createUser, userList } = require("./../controllers/authController");
var router = express.Router();

/**
 * Veifying token for users controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
 const refreshTokenFun = (req, res) => {
        console.log(req.cookies.accessToken)
    if (refreshToken(req, res)) {      
        return res.status(200).json({
            status: 'success',
            msgText: 'Valid User',
            token: req.cookies.accessToken
        })
    } else{
        console.warn("Terr ", err);
        res.status(401).json({
            status: 'error',
            msgText: 'Invalid User'
        })
    }
};

router.post("/login", login);
router.patch("/forgot-password", forgotPassword);
router.post("/create", createUser);
router.post("/user-list",  userList);
router.post("/refresh-token", refreshTokenFun);

module.exports = router;
