var express = require('express');
const jwt = require('jsonwebtoken')
var { detailsById, createUser, updateById, resetPassword } = require('./../controllers/userController');
var router = express.Router();
/**
 * Veifying token for users controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const verifyToken = async (req,res,next) => {
    if(req.header('authorization')) { 
        try{
            let token =  req.header('authorization').trim().split(' ')[1];
            let tokenVal = '';
            console.log(jwt.verify(token,'secret'))
            if(tokenVal = jwt.verify(token,'secret')){
                console.warn('Token Verified ', tokenVal);
                next();
            } else {
               console.log('===elss====')
            }
        }catch(err){
            console.log('refresh token == = ')
            let rtoken = await refreshToken(req)
            if(rtoken) {
                next()
            }
            return res.status(401).json({status:'error', msgText :'Either token has been expired or invalid.' + err})
        }        
    }
}

/**
 * Veifying token for users controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
 const refreshToken = (req) => {
    
    if(Object.keys(req.cookies).length != 0 && req.cookies.refreshToken !== undefined) {
        try{
            let refreshToken = req.cookies.refreshToken; 
            let tokenVal = '';
            if(tokenVal = jwt.verify(refreshToken, 'refreshSecret')) {
                let token = jwt.sign({ username: tokenVal.username }, "secret", {
                    expiresIn: 10 * 60,
                });
                req.token = token;
                console.warn('Token Verified new', tokenVal);
                return true               
            }
        } catch(err) {
            return false
        }        
    }
}


/* Define middleware to check the token */
router.use(verifyToken)
router.post('/user-details', detailsById);
router.post('/create', createUser);
router.put('/update-by-id', updateById);
router.put('/reset-password', resetPassword);

module.exports = router; 