const bcrypt = require("bcrypt");
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
  refreshToken: function (password, hash) {
    // Load hash from the db, which was preivously stored
    return bcrypt.compareSync(password, hash, function (err, res) {
      if (err) return false;
      return true;
    });
  },
};

module.exports = commonFiles;
