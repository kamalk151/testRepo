var express = require("express");
var {login,  forgotPassword, createUser, userList } = require("./../controllers/authController");
var router = express.Router();

/**
 * Veifying token for users controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */ 
const refreshToken = (req,res) => {
    console.log(req.cookies.refreshToken,'=====')
    try{
        let token =  req.cookies.refreshToken;
        
        if(token === undefined){
            return res.status(401).json({
                status: 'error',
                msgText: 'Invalid User'
            })
        }

        let tokenVal = '';
        if(tokenVal = jwt.verify(token, process.env.JWT_REFRESH_SECRET)) {                
            console.warn('Token Verified REFRES', tokenVal);           
            res.status(200).json({
                status: 'success',
                msgText: 'Valid User'
            })
        }
        
    }catch(err){
        return res.status(401).json({status:'error', msgText :'Either token has been expired or invalid.'})
    }
}

router.post("/login", login);
router.patch("/forgot-password", forgotPassword);
router.post("/create", createUser);
router.post("/user-list",  userList);
router.post("/refresh-token", refreshToken);

module.exports = router;
