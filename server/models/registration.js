// const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const registrationSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: [true, 'Email address already registered'],
//     trim: true,
//     lowercase: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function (value) {
//         return value === this.password;
//       },
//       message: 'Passwords do not match',
//     },
//   },
//   tokens: [
//     {
//       token: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
// });
// // registrationSchema.pre('save', async function (next) {
// //   if (this.isModified('password')) {
// //     this.password = await bcrypt.hash(this.password, 12);
// //     this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
// //   }
// //   next();
// // });


// // Add a method to generate a JWT token for the user
// registrationSchema.methods.generateAuthToken = async function () {
//   try {
//     console.log(this._id);
//     const token = jwt.sign({ _id: this._id.toString() }, 'mynameiskriyanshibensureshbhaikamani');
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     console.log(token);
//     return token;
//   } catch (err) {
//     // Handle errors appropriately, you can modify this part based on your error handling logic
//     console.error("Error generating auth token:", err);
//     throw err;
//   }
// };

// const Registration = mongoose.model('Registration', registrationSchema);

// module.exports = Registration;

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
registrationSchema.methods.generateAuthToken = function () {
  try{
    console.log(this._id);
  const token = jwt.sign({ _id: this._id }, 'mynameiskriyanshibensureshbhaikamani');

  
  // Add the generated token to the user's tokens array
  this.tokens = this.tokens.concat({ token : token });
  console.log(token);
   // Save the user with the updated tokens array
   return this.save().then(() => token);
  }
  catch(err){
    res.send("the error part" + err);
    console.log(err);
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