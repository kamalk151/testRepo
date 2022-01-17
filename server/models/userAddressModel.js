const Mongoose = require("mongoose");
const addressSchema = new Mongoose.Schema({
  addressTitle: { type: String,  trim: true },
  addressOne: { type: String,  trim: true },
  addressTwo: { type: String,  trim: true },
  city: { type: String,  trim: true },
  state: { type: String,  trim: true },
  user_id: { type: Object, required: true },
  status: { type: Number, default: 1 },
  created_at: {type:Date, default:Date.now()},
  updated_at: {type:Date, default:Date.now()},
});

addressSchema.method.checkModel = () => {
  console.log("new method");
};
module.exports = Mongoose.model("userAddress", addressSchema);
