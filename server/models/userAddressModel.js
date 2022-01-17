const Mongoose = require("mongoose");
const addressSchema = new Mongoose.Schema(
  {
    user_id: { type: Object, required: true },
    addressTitle: { type: String, trim: true },
    addressOne: { type: String, trim: true },
    addressTwo: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    status: { type: Number, default: 1 },
  },
  { timestamps: true }
);

addressSchema.method.checkModel = () => {
  console.log("new method");
};
module.exports = Mongoose.model("userAddress", addressSchema);
