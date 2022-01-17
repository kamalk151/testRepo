const Mongoose = require("mongoose");
const userSchema = new Mongoose.Schema({
  first_name: { type: String, required: true, trim: true },
  last_name: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true, select: false },
  phone: { type: String, required: true, trim: true },
  gender: { type: String, required: true },
  role_id: {type: Number, default: 1},
  profile_img: String,
  status: { type: Number, default: 1 },
  created_at: {type:Date, default:Date.now()},
  updated_at: {type:Date, default:Date.now()}
});

userSchema.method.checkModel = () => {
  console.log("new method");
};
module.exports = Mongoose.model("users", userSchema);