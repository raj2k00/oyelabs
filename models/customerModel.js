const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your Email"],
      unique: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: [true, "Please provide Phone number"],
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
