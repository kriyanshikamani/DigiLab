const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  registeredOn: {
    type: Date, // Store the registration date as a Date type
    default: Date.now, // Set the default value to the current date and time
  },
});

const Referral = mongoose.model("Referral", referralSchema);

module.exports = Referral;
