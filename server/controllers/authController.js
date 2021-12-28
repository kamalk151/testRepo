const userModel = require("./../models/userModel");
const jwt = require('jsonwebtoken')
const lang = require("./../libs/lang/lang");
const {
  hashPassword,
  verifyPassword,
} = require("./../libs/helper/commonFiles");

/**
 * Find user details by user id
 * @param {*} req
 * @param {*} res
 * returns json object
 */
const login = async (req, res) => {
  try {    
    if (!req.body.password || !req.body.username) {
      return res
        .status(401)
        .json({ status: "error", msgText: "Invalid Request" });
    }    
    userModel.findOne({ username: req.body.username}).select('+password')
    .then(data => {
      if(verifyPassword(req.body.password, data.password)){
        let token = jwt.sign({username:req.body.username}, 'secret', { expiresIn: 60*60 })

        return res.status(500).json({ status: "success", msgText: lang.got_result, data, token:token});  
      }
      return res.status(500).json({ status: "error", msgText: lang.password_not_match });
    }).catch(err=>{
      return res.status(500).json({ status: "error", msgText: err });      
    });

  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: err });
  }
};

/**
 * Forgot Password is for updating the password
 * @param {*} req
 * @param {*} res
 */
const forgotPassword = async (req, res) => {
    if (!req.body.password) {
      return res
        .status(401)
        .json({ status: "error", msgText: "invalid reequest." });
    }

    if (req.body.password !== req.body.confirm_password) {    
      return res
        .status(401)
        .json({ status: "error", msgText: lang.cpassword_not_match });
    }

    userModel.findOne({ username: req.body.username })
      .then((data) => {
          if(data) {     
            console.log(data);   
          /*Encypt password */
          let salt = Number(process.env.SALT);
          let hash = hashPassword(req.body.password, salt);

          data.password = hash;
          data.save((err) => {
            if (err) {
              return res.status(500).json({ status: "error", msgText: '' + err });
            }
          });
          return res
            .status(200)
            .json({ status: "success", msgText: lang.got_updated });
        }

        res.status(403).json({ status: "error", msgText: lang.went_wrong });

      }).catch((err) => {
        res.status(403).json({ status: "error", msgText: '' + err });
      });

};

/**
 * Create method to store user information
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    
    /*Encypt password */
    let salt = Number(process.env.SALT);
    let hash = hashPassword(req.body.password, salt);
    userModel.findOne({ username: req.body.username})
    let data = new userModel();
    data.first_name = req.body.first_name;
    data.last_name = req.body.last_name;
    data.username = req.body.username;
    data.password = hash;

    data.save(function (err) {
      if (err) {
        return res.status(500).json(err);
      }

      return res.status(200).json({
        status: "success",
        msgText: "Successfully saved result",
        data,
      });
    });
  } catch (err) {
    return res.status(500).json({ status: "error", msgText: err });
  }
};

/**
 * Find all user
 * @param {*} req
 * @param {*} res
 * returns json object
 */
 const userList = async (req, res) => {
  try {    
    
    userModel.find({}, (err, data) => {
        if (err) {
          return res.status(500).json({ status: "error", msgText: err });
        }
        return res.status(200).json({ status: "success", msgText: lang.got_result, data});
      }
    );
  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: err });
  }
};

const authRoutes = {
  login,
  forgotPassword,
  createUser,
  userList
};

module.exports = authRoutes;
