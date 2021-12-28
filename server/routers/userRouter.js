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
const verifyToken = (req,res,next) => {
    if(req.header('authorization')) { 
        try{
            let token =  req.header('authorization').trim().split(' ')[1];
            let tokenVal = '';
            if(tokenVal = jwt.verify(token,'secret')){ 
                
                    console.warn('Token Verified ', tokenVal);
                    next();                
            }   
        }catch(err){
            return res.status(401).json({status:'error', msgText :'Either token has been expired or invalid.'})
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