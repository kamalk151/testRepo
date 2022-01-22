const userModel = require("./../models/userModel");
const addressModel = require("./../models/userAddressModel");
const roleModel = require("./../models/roleModel");
const jwt = require("jsonwebtoken");
const lang = require("./../libs/lang/lang");
const {
  hashPassword,
  verifyPassword,
} = require("./../libs/helper/commonFiles");

/**
 * Refresh token function
 */
const setTokenCookies = (req, res, data) => {
  //access token
  let token = jwt.sign(
    { username: req.body.username, _id: data.id, role: data.role.role },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: Number(process.env.JWT_ACCESS_EXPIREIN),
    }
  );
  //refresh token
  let refreshToken = jwt.sign(
    { username: req.body.username, _id: data.id, role: data.role.role },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: Number(process.env.JWT_REFRESH_EXPIREIN),
    }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: Number(process.env.JWT_REFRESH_EXPIREIN) * 1000,
  });
  //set access token
  res.cookie("accessToken", token, {
    httpOnly: true,
    maxAge: Number(process.env.JWT_ACCESS_EXPIREIN) * 1000,
  });
  return token;
};

/**
 * Create method to store user information
 * @param {*} req
 * @param {*} res
 */
const userRole = async () => {
  try {
    let role = await roleModel.findOne({ role: "user" });
    console.log(role, "== role   = ");
    return role._id;
  } catch (err) {
    throw err;
  }
};

/**
 * Create method to store user information
 * @param {*} req
 * @param {*} res
 */
const fetchUser = async (reqObj) => {
  try {
    let userData = await userModel.findOne(reqObj);
    console.log(userData, "== role   = ");
    return userData;
  } catch (err) {
    throw err;
  }
};

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

    userModel
      .findOne({ username: req.body.username })
      .select("+password")
      .populate("role", "role")
      .then((result) => {
        if (result === null) {
          return res
            .status(404)
            .json({ status: "success", msgText: "User " + lang.not_found });
        }

        if (verifyPassword(req.body.password, result.password)) {
          //Set cookies for token
          let token = setTokenCookies(req, res, result);
          console.log(result);
          return res.status(200).json({
            status: "success",
            msgText: lang.got_result,
            data: result,
            token: token,
          });
        }
        return res
          .status(401)
          .json({ status: "error", msgText: lang.password_not_match });
      })
      .catch((err) => {
        return res.status(403).json({ status: "error", msgText: "" + err });
      });
  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: "" + err });
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

  userModel
    .findOne({ username: req.body.username })
    .then((data) => {
      if (data) {
        /*Encypt password */
        let salt = Number(process.env.SALT);
        let hash = hashPassword(req.body.password, salt);

        data.password = hash;
        data.save((err) => {
          if (err) {
            return res.status(500).json({ status: "error", msgText: "" + err });
          }
        });
        return res
          .status(200)
          .json({ status: "success", msgText: lang.got_updated });
      }

      res.status(403).json({ status: "error", msgText: lang.went_wrong });
    })
    .catch((err) => {
      res.status(403).json({ status: "error", msgText: "" + err });
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
    let userExist = await fetchUser({ username: req.body.username });
    console.log(userExist);
    if (userExist !== null && Object.keys(userExist.toObject()).length !== 0) {
      return res.status(409).json({
        status: "error",
        msgText: ` ${lang.user}${lang.already_exist}`,
      });
    }
    let role_id = await userRole();

    let data = await new userModel();
    data.first_name = req.body.first_name;
    data.last_name = req.body.last_name;
    data.username = req.body.username;
    data.phone = req.body.phone;
    data.gender = req.body.gender;
    data.role = role_id;
    data.password = hash;

    data.save(function (err, result) {
      if (err) {
        return res.status(500).json(err);
      } else {
        let address = new addressModel();
        address.user_id = result._id;
        address.addressTitle = "Home";
        address.addressOne = "Mayur Vihar Dasna";
        address.addressTwo = "Dasna, Adhyatmik Nagar";
        address.city = "Ghaziabad";
        address.state = "UP";
        address.save();
      }
      return res.status(200).json({
        status: "success",
        msgText: "Successfully saved result",
        data,
      });
    });
  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: err.toString() });
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
      return res
        .status(200)
        .json({ status: "success", msgText: lang.got_result, data });
    });
  } catch (err) {
    return res.status(500).json({ status: "errors", msgText: err });
  }
};

/**
 * Refresh token method for generate the access token
 */
const authRoutes = {
  login,
  forgotPassword,
  createUser,
  userList,
};

module.exports = authRoutes;
