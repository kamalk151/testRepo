const userModel = require("../models/userModel");
const lang = require("../libs/lang/lang");

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

const adminRoutes = {
  userList
};

module.exports = adminRoutes;
