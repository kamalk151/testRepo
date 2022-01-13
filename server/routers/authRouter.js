var express = require("express");
const jwt = require("jsonwebtoken");
const { refreshToken } = require("./../libs/helper/commonFiles");
var {
  login,
  forgotPassword,
  createUser,
  userList,
} = require("./../controllers/authController");
var router = express.Router();

/**
 * Veifying token for users controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const refreshTokenFun = (req, res) => {
  if (refreshToken(req, res)) {
    console.log(req.cookies, " refresh token ");
    return res.status(200).json({
      status: "success",
      msgText: "Valid User",
      token: req.cookies.accessToken,
      data: { _id: req.tid },
    });
  } else {
    res.status(401).json({
      status: "error",
      msgText: "Either token has been a expired or invalid",
    });
  }
};

/**
 * (Logout) Remove cookies from controller
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const removeCookies = (req, res) => {
  if (req.header("authorization")) {
    //set access token
    res.cookie("accessToken", req.cookies.accessToken, {
      httpOnly: true,
      maxAge: 0,
    });
    res.cookie("refreshToken", req.cookies.refreshToken, {
      httpOnly: true,
      maxAge: 0,
    });
  }

  return res.status(200).json({
    status: "success",
    msgText: "logout user",
  });
};

router.post("/login", login);
router.post("/logout", removeCookies);
router.patch("/forgot-password", forgotPassword);
router.post("/create", createUser);
router.post("/user-list", userList);
router.post("/refresh-token", refreshTokenFun);

module.exports = router;
