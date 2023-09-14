const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  BloodGroup: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  total:{
    type: Number,
    required:true,
  },
  referredBy: {
    type: String,
    required: true,
  },
  receivedBy: {
    type: String,
    required: true,
  },

  tests:[
    {
      name:{
        type: String,
        required: true,
      },
      price:{
        type: Number,
        required: true,
      },
    },
  ]
});

const Patient = mongoose.model("patient", patientSchema);

module.exports = Patient;