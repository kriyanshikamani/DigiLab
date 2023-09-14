const mongoose = require("mongoose");

const testpanelSchema = new mongoose.Schema({
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
 
  tests: [
    {
        type: String,
        required: true,
    } 
  ],
});

const Testpanel = mongoose.model("Testpanel", testpanelSchema);

module.exports = Testpanel;
