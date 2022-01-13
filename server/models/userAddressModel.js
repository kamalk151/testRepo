const Mongoose = require("mongoose");
const addressSchema = new Mongoose.Schema({
  addressTitle: { type: String, required: true, trim: true },
  addressOne: { type: String, required: true, trim: true },
  addressTwo: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  user_id: { type: Number, required: true },
  status: { type: Number, default: 1 },
  created_at: Date,
  updated_at: Date,
});

addressSchema.method.checkModel = () => {
  console.log("new method");
};
module.exports = Mongoose.model("userAaddress", addressSchema);
