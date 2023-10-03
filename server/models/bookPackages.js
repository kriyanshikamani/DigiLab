
const mongoose = require("mongoose");

const bookpackageSchema = new mongoose.Schema({
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

const BookPackage = mongoose.model("BookPackage", bookpackageSchema);

module.exports = BookPackage;
