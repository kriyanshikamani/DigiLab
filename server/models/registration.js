
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email address already registered'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: 'Passwords do not match',
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],

});
registrationSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, 'mynameiskriyanshibensureshbhaikamani');
    
    // Add the generated token to the user's tokens array
    this.tokens = this.tokens.concat({ token });
    
    // Save the user with the updated tokens array
    await this.save();
    
    console.log(token);
    return token;
  } catch (err) {
    console.log("Error generating token:", err);
    throw err; // You should handle the error appropriately in your route/controller
  }
};



// registrationSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
//   }
//   next();
// });

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;