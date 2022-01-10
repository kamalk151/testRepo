var express = require("express");
const jwt = require("jsonwebtoken");
const responseMiddleware = require('express-mung')
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
const refreshToken = (req, res) => {
  try {
    console.log('refresh token = ')
    if (
      Object.keys(req.cookies).length != 0 &&
      req.cookies.refreshToken !== undefined
    ) {
      let refreshToken = req.cookies.refreshToken;
      let tokenVal = "";
      if (
        (tokenVal = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET))
      ) {
        let token = jwt.sign(
          { username: tokenVal.username },
          process.env.JWT_ACCESS_SECRET,
          {
            expiresIn: Number(process.env.JWT_ACCESS_EXPIREIN), //#Number(process.env.JWT_ACCESS_EXPIREIN)
          }
        );

        //set access token
        res.cookie('accessToken', token, {
          httpOnly: true,
          maxAge: Number(process.env.JWT_ACCESS_EXPIREIN) * 1000,
        });
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
      if ((tokenVal = jwt.verify(token, process.env.JWT_ACCESS_SECRET))) {
        console.warn("Token Verified ", tokenVal);
        next();
      }
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        /*Calling refresh token for update the token */
        let refeshToken = refreshToken(req, res);        
        if (refeshToken === false) {
          //401 unautohrized response (request has not been completed)
          return res.status(401).json({
            status: "error",
            msgText: "Either token has been expired or invalid." + error,
          });
        } else {
          next();
        }
      } else {
        console.log("==== token ess ==");
        //401 unautohrized response (request has not been completed)
        return res.status(401).json({
          status: "error",
          msgText: "Either token has been expired or invalid." + error,
        });
      }
    }
  } else {
    return res.status(401).json({
      status: "error",
      msgText: "Either token has been expired or not assigned.",
    });
  }
};

 
/* Define middleware to check the token */
router.use(verifyToken);

//middleware to modify response body object
router.use(responseMiddleware.json(
  function transform(body, req, res) {
    // do something with body
    if(req.cookies.refreshToken !== undefined && req.cookies.refreshToken !== null) {
      body.token = req.cookies.accessToken
    }    
    return body;
  }
));

router.post("/user-details", detailsById);
router.post("/create", createUser);
router.put("/update-by-id", updateById);
router.put("/reset-password", resetPassword);

module.exports = router;
