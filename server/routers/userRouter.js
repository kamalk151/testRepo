var express = require("express");
const jwt = require("jsonwebtoken");
var {
  detailsById,
  createUser,
  updateById,
  resetPassword,
} = require("./../controllers/userController");
var router = express.Router();

/**
 * Veifying token for users controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
 const refreshToken = (req,res) => {
  
  try {
    if (
      Object.keys(req.cookies).length != 0 &&
      req.cookies.refreshToken !== undefined
    ) {
      let refreshToken = req.cookies.refreshToken;
      let tokenVal = "";      
      if ((tokenVal = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET))) {
        let token = jwt.sign({ username: tokenVal.username }, process.env.JWT_ACCESS_SECRET, {
          expiresIn: 10 * 60, //#Number(process.env.JWT_ACCESS_EXPIREIN)
        });        
        res.set('token', token);
        console.warn("Token Verified new", tokenVal);
        return true;
      }
    }
    return false;
  
  } catch (err) {
    console.warn("Terr ", err);
    return false;
  }
};

/**
 * Veifying token for users controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */

const verifyToken = async (req, res, next) => {
   
  if (req.header("authorization")) {
    try {
      let token = req.header("authorization").trim().split(" ")[1];
      let tokenVal = "";
      //Set token property because it need in every response to handle the frontend session      
      console.log(process.env.JWT_ACCESS_SECRET,'=== access')       
      if ((tokenVal = jwt.verify(token, process.env.JWT_ACCESS_SECRET))) {
        res.set('token', token);
        console.warn("Token Verified ", tokenVal);
        next();
      }
    } catch (error) {
      if (error.name === "TokenExpiredError") {        
        let refeshToken =  await refreshToken(req,res)
        console.log('checking refresh token = ',refeshToken)
        if (refeshToken === false) {
          return res.status(401).json({
            status: "error",
            msgText: "Either token has been expired or invalid." + error,
          });
        } else {
          next()
        }
      } else {
        return res.status(401).json({
          status: "error",
          msgText: "Either token has been expired or invalid." + error,
        });
      }
    }
  }
};



/* Define middleware to check the token */
router.use(verifyToken);
router.post("/user-details", detailsById);
router.post("/create", createUser);
router.put("/update-by-id", updateById);
router.put("/reset-password", resetPassword);

module.exports = router;
