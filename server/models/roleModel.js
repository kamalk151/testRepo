const Mongoose = require("mongoose");
const userRole = new Mongoose.Schema({
  label: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  status: { type: Number, default: 1 },
  created_at: {type: Date, default: Date.now() },
  updated_at: {type: Date, default: Date.now() }
});

userRole.method.checkModel = () => {
  console.log("new method");
};
module.exports = Mongoose.model("roles", userRole);
