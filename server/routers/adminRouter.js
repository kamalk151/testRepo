var express = require("express");
const jwt = require("jsonwebtoken");
const responseMiddleware = require("express-mung");
var { userList, userDelete } = require("../controllers/adminController");
const { refreshToken } = require("./../libs/helper/commonFiles");

var router = express.Router();

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
router.use(
  responseMiddleware.json(function transform(body, req, res) {
    // do something with body
    if (
      req.cookies.refreshToken !== undefined &&
      req.cookies.refreshToken !== null
    ) {
      body.token = req.cookies.accessToken;
    }
    return body;
  })
);

router.get("/user-list", userList);
router.delete("/user-delete", userDelete);
module.exports = router;
