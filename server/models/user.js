
const mongoose = require("mongoose");

  const userSchema = new mongoose.Schema({
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    registeredOn: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    permissions: {
      type: String,
      required: true,
    },
  });

const User = mongoose.model("User", userSchema);

module.exports = User;

