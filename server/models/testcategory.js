

const mongoose = require("mongoose");

const testcategorySchema = new mongoose.Schema({

  categoryname: {
    type: String,
    required: true,
  }
});

const Testcategory = mongoose.model("testcategory", testcategorySchema);

module.exports = Testcategory;

