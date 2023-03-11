var mongoose = require("mongoose");
const validator = require("validator");
const bcyptjs = require("bcryptjs");
const JWT = require("jsonwebtoken");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    minLength: [2, "name should be more the 2 word"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    validate: [validator.isEmail, "Please enter valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    // minLength: [7, "password should be min 8 charecter"],
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
});

// change password formate
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcyptjs.hash(this.password, 10);
});

// compare password
userSchema.methods.comparePassword = async function (enterdPassword) {
  return await bcyptjs.compare(enterdPassword, this.password);
};

// JWT Token
userSchema.methods.getJWTToken = function(){
  return JWT.sign({id:this._id},process.env.JWT_SECRET)
}

var User = mongoose.model("User", userSchema);
module.exports = User;





