const userModel = require("../models/userModel");
const lang = require("../libs/lang/lang");
const { refreshToken } = require("./../libs/helper/commonFiles");

/**
 * Fetch User list
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
      return res
        .status(200)
        .json({ status: "success", msgText: lang.got_result, data });
    });
  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: err });
  }
};

/**
 * Fetch User list
 * @param {*} req
 * @param {*} res
 * returns json object
 */
const userDelete = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.id) {
      return res
        .status(401)
        .json({ status: "error", msgText: "Invalid Request" });
    }
    userModel.deleteOne({ _id: req.body.id }, (err, data) => {
      if (err) {
        return res.status(500).json({ status: "error", msgText: err });
      }
      return res
        .status(200)
        .json({ status: "success", msgText: lang.got_deleted });
    });
  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: "" + err });
  }
};

const adminRoutes = {
  userList,
  userDelete,
};

module.exports = adminRoutes;
