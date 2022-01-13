const userModel = require("./../models/userModel");
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
const detailsById = async (req, res) => {
  try {
    userModel.findById(req.body.id, (err, data) => {
      if (err) {
        return res.status(500).json({ status: "error", msgText: err });
      }
      if (!data) {
        return res.status(200).json({
          status: "success",
          msgText: lang.not_found,
          data,
        });
      }
      return res.status(200).json({
        status: "success",
        msgText: lang.got_result,
        data,
      });
    });
  } catch (err) {
    return res.status(500).json({ status: "error", msgText: err });
  }
};

/**
 * Update method to update user details
 * @param {*} req
 * @param {*} res
 * @returns
 */
const updateById = async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ status: "error", msgText: "invalid request" });
    }

    let updateData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
    };
    userModel.findByIdAndUpdate(req.body.id, updateData, function (err, data) {
      if (err) {
        return res.status(500).json({ status: "error", msgText: err });
      }
      return res.status(200).json({
        status: "success",
        msgText: lang.got_updated,
        data,
        token: req.token,
      });
    });
  } catch (err) {
    return res.status(500).json({ status: "error", msgText: err });
  }
};

/**
 * Reset Password is for updating the password
 * @param {*} req
 * @param {*} res
 */
const resetPassword = async (req, res) => {
  if (!req.body.password) {
    return res
      .status(401)
      .json({ status: "error", msgText: "invalid arguments." });
  }

  if (req.body.password !== req.body.confirm_password) {
    return res
      .status(403)
      .json({ status: "error", msgText: lang.confirm_password });
  }

  try {
    userModel
      .findOne({ _id: req.body.id })
      .select("+password")
      .then((data) => {
        console.log("data", data);
        if (verifyPassword(req.body.old_password, data.password)) {
          /*Encypt password */
          let salt = Number(process.env.SALT);
          let hash = hashPassword(req.body.password, salt);

          data.password = hash;
          data.save((err) => {
            if (err) {
              return res.status(501).json({ status: "error", msgText: err });
            }
          });
          return res
            .status(200)
            .json({ status: "success", msgText: lang.got_updated });
        }

        return res
          .status(403)
          .json({ status: "error", msgText: lang.password_not_match });
      })
      .catch((err) => {
        res.status(501).json({ status: "error", msgText: err });
      });
  } catch (err) {
    res.status(501).json({ status: "error", msgText: err });
  }
};

const updateAddressById = async (req, res) => {
  res.send(" hi kamla");
};

const addressListById = async (req, res) => {
  res.send(" hi kamla");
};
/**
 * Create method to store user information
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  try {
    console.log(req.body, process.env.SALT);
    /*Encypt password */
    let salt = Number(process.env.SALT);
    let hash = hashPassword(req.body.password, salt);

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

const userRoutes = {
  detailsById,
  addressListById,
  updateAddressById,
  resetPassword,
  updateById,
  createUser,
};

module.exports = userRoutes;
