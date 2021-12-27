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
const login = async (req, res) => {
  try {
    if (!req.body.password || !req.body.username) {
      return res
        .status(401)
        .json({ status: "error", msgText: "Invalid Request" });
    }
    console.log("=================");
    /*Encypt password */
    let salt = Number(process.env.SALT);
    let hash = hashPassword(req.body.password, salt);

    userModel.findOne(
      { username: req.body.username, password: hash },
      (err, data) => {
        if (err) {
          return res.status(500).json({ status: "error", msgText: err });
        }
        return res.send(data);
      }
    );
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

const authRoutes = {
  login,
  forgotPassword,
  createUser,
};

module.exports = authRoutes;
