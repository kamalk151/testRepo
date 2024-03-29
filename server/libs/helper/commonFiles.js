const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let commonFiles = {
  /**
   * Update password while create new user
   * */
  hashPassword: function (password, saltRounds) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  },

  /**
   * Update password while create new user
   */
  verifyPassword: function (password, hash) {
    // Load hash from the db, which was preivously stored
    return bcrypt.compareSync(password, hash, function (err, res) {
      if (err) return false;
      return true;
    });
  },

  /**
   * Update password while create new user
   */
  refreshToken: function (req, res) {
    try {
      console.log("refresh token = ");
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
            { username: tokenVal.username, _id: tokenVal._id, role:tokenVal.role },
            process.env.JWT_ACCESS_SECRET,
            {
              expiresIn: Number(process.env.JWT_ACCESS_EXPIREIN), //#Number(process.env.JWT_ACCESS_EXPIREIN)
            }
          );
          req.tid = tokenVal._id;
          req.role = tokenVal.role;
          //set access token
          res.cookie("accessToken", token, {
            httpOnly: true,
            maxAge: Number(process.env.JWT_ACCESS_EXPIREIN) * 1000,
          });
          //set access token
          console.warn("Token Verified new", tokenVal);
          return true;
        }
      }
      return false;
    } catch (err) {
      console.warn("Terr ", err);
      return false;
    }
  },
};

module.exports = commonFiles;
