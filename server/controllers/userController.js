const userModel = require('./../models/userModel')
const bcrypt = require('bcrypt');
const {hashPassword} = require('./../libs/helper/commonFiles')
/**
 * Find user details by user id
 * @param {*} req 
 * @param {*} res 
 * returns json object
 */
const detailsById = async (req, res) => {
    try{         
        userModel.findById(req.body.id, (err, data) => {
            if(err) {
                return res.status(500).json({ status:'error', msgText: err})
            }            
            return res.send(data)
        });    
    } catch(err) {
        return res.status(500).json({ status:'errors', msgText: err})
    }
};

/**
 * Update method to update user details
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updateById = async (req, res) => {
    try{
        if(!req.body) {
            return res.status(400).json({status:'error', msgText: 'invalid request'})
        }
        
        let updateData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username            
        }
        userModel.findByIdAndUpdate(req.body.id, updateData, function(err, data) {
            if(err) {
                return res.status(500).json({status:'error', msgText: err })
            }             
            return res.status(200).json({status:'success', msgText: 'Successfully got updated.', data})
        })
    }
    catch(err){
        return res.status(500).json({status:'error', msgText: err})
    }
};

/**
 * Reset Password is for updating the password 
 * @param {*} req 
 * @param {*} res 
 */
const resetPassword = async (req, res) => {

    let data = {
        password: req.body.password        
    }

    userModel.findOneAndUpdate({_id: req.body.id }, data, function(err,data) {
        if(err) {
            return res.status(500).json({status:'error', msgText: err })
        }
        return res.status(200).json({status:'success', msgText: 'Successfully got updated.', data })
    })

};

const updateAddressById = async (req, res) =>{
    res.send(' hi kamla')
};

const addressListById = async (req, res) =>{
    res.send(' hi kamla')
};
/**
 * Create method to store user information
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) =>{
    
    try{
        console.log(req.body,process.env.SALT)
        /*Encypt password */
        let salt = Number(process.env.SALT)
        let hash = hashPassword(req.body.password, salt);
        
        let data = new userModel()
        data.first_name = req.body.first_name;
        data.last_name = req.body.last_name;
        data.username = req.body.username;
        data.password = hash;
        
        data.save(function(err) {
            if(err) { return res.status(500).json(err) }

            return res.status(200).json({status:'success', msgText: 'Successfully saved result', data})
        });
        
    }
    catch(err){
        return res.status(500).json({status:'error', msgText: err})
    }
     
};

const userRoutes = {detailsById,addressListById,updateAddressById,resetPassword,updateById,createUser}
module.exports = userRoutes