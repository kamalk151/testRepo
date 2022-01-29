const Mongoose = require("mongoose");
const roleModels = require("./roleModel");
const userSchema = new Mongoose.Schema(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true, select: false },
    phone: { type: String, required: true, trim: true },
    role: { type: Mongoose.Schema.Types.ObjectId, ref: "roles" },
    gender: { type: String, required: true },
    profile_img: String,
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

userSchema.method.checkModel = () => {
  console.log("new method");
};

userSchema.pre("save", async function (next) {
  //this.foo = "bar";
  // roleModels.findOne({ role: "user" }, function (err, roleData) {
  //   if (err) {
  //     return res
  //       .status(401)
  //       .json({ status: "error", msgText: "Data not found!" });
  //   }
  //   console.log(roleData, "roleData");
  //   console.warn("request bod doc y", doc);
  //   //req.body.role_id = roleData._id;
  //   doc.role = roleData._id;
  // });
  next();
});

module.exports = Mongoose.model("users", userSchema);
