const Mongoose = require("mongoose");
const userRole = new Mongoose.Schema({
  label: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  status: { type: Number, default: 1 },
  created_at: Date,
  updated_at: Date,
});

userRole.method.checkModel = () => {
  console.log("new method");
};
module.exports = Mongoose.model("roles", userRole);
