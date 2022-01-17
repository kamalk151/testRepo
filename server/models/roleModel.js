const Mongoose = require("mongoose");
const userRole = new Mongoose.Schema({
  label: { type: String },
  role: { type: String },
  status: { type: Number },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

userRole.method.checkModel = () => {
  console.log("new method");
};

module.exports = Mongoose.model("roles", userRole);
