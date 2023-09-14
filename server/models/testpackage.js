const mongoose = require("mongoose");

const testpackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  topics: [
    {
        type: String,
        required: true,
    } 
  ],
});

const Testpackage = mongoose.model("Testpackage", testpackageSchema);

module.exports = Testpackage;
