

const mongoose = require("mongoose");

const bookpackageSchema = new mongoose.Schema({

  patientid: {
    type: String,
    required: true,
  },
  testname:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  }
});

const Bookpackage = mongoose.model("bookpackage", bookpackageSchema);

module.exports = Bookpackage;

