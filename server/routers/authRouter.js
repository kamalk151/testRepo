var express = require("express");
var {login,  forgotPassword, createUser, userList, refreshToken } = require("./../controllers/authController");
var router = express.Router();

const refresToken = (req,res,next) => {
    console.log(req,'=====')
}
 

/**
 * Veifying token for users controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
 const verifyToken = (req,res,next) => {
    if(req.header('authorization')) {
        try{
            let token =  req.header('authorization').trim().split(' ')[1];
            let tokenVal = '';
            if(tokenVal = jwt.verify(token,'secret')) {                
                console.warn('Token Verified ', tokenVal);
                next();           
            }            
        }catch(err){
            return res.status(401).json({status:'error', msgText :'Either token has been expired or invalid.'})
        }
    }
}


router.post("/login", login);
router.patch("/forgot-password", forgotPassword);
router.post("/create", createUser);
router.post("/user-list",  userList);
router.post("/refresh-token", refreshToken);

module.exports = router;
