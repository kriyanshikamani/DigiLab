// // controllers/registrationController.js
// const Registration = require('../models/registration');
// const jwt = require('jsonwebtoken');


// // exports.createRegistration = async (req, res) => {
// //     try {
// //         const registration = new Registration(req.body);
// //         await registration.save();
// //         res.status(201).json({ message: 'Registration created successfully', registration });
// //     } catch (error) {
// //         if (error.name === 'MongoServerError' && error.code === 11000) {
// //             // Duplicate email
// //             return res.status(422).send({ success: false, message: 'Email address already registered!' });
// //           }
// //         else if (error.name === 'ValidationError') {
// //             // Handle validation error
// //             const errorMessages = Object.values(error.errors).map(err => err.message);
// //             return res.status(400).json({ errors: errorMessages });
// //           }
// //           res.status(500).json({ error: error.message });
// //     }
// // };

// exports.createRegistration = async (req, res) => {
//     try {
//       const { firstName, lastName, email, password, confirmPassword } = req.body;
      
//       // Check if the email is already registered (implement this logic)
//       const existingUser = await Registration.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: 'Email already registered' });
//       }
  
//       const registration = new Registration({
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//       });
  
//       await registration.save();
      
//         console.log(this._id);
//       // Generate a JWT token for the registered user
//       const token = jwt.sign({ _id: this._id }, 'mynameiskriyanshibensureshbhaikamani'); 
//       return token;
//       console.log(token);
//       // Replace 'your-secret-key' with your actual secret key
  
//       res.status(201).json({ message: 'User registered successfully', token });
//     } catch (error) {
//       console.error('Error registering user:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
// };



// exports.getRegistrations = async (req, res) => {
//     try {
//         const registration = await Registration.find();
//         res.json(registration);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.getRegistrationById = async (req, res) => {
//     try {
//         const registration = await Registration.findById(req.params.id);
//         if (!registration) {
//             return res.status(404).json({ error: 'Registration not found' });
//         }
//         res.json(registration);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.updateRegistrationById = async (req, res) => {
//     try {
//         const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true,
//         });
//         if (!registration) {
//             return res.status(404).json({ error: 'Registration not found' });
//         }
//         res.json({ message: 'Registration updated successfully', registration });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.deleteRegistrationById = async (req, res) => {
//     try {
//         const registration = await Registration.findByIdAndDelete(req.params.id);
//         if (!registration) {
//             return res.status(404).json({ error: 'Registration not found' });
//         }
//         res.json({ message: 'Registration deleted successfully', registration });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const registeredUser = await Registration.findOne({ email, password });

        
//         if (registeredUser.password !== password) {
//             return res.status(401).json({ message: 'Incorrect password' });
//           }
//           if (registeredUser) {
//             res.json({ message: 'Login successful' });
//         } 
//       else {
//             res.status(400).json({ error: 'Login failed. Please register first.' });
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };
// controllers/registrationController.js
const Registration = require('../models/registration');
const jwt = require('jsonwebtoken');


exports.createRegistration = async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json({ message: 'Registration created successfully', registration });
    } catch (error) {
        if (error.name === 'MongoServerError' && error.code === 11000) {
            // Duplicate email
            return res.status(422).send({ success: false, message: 'Email address already registered!' });
          }
        else if (error.name === 'ValidationError') {
            // Handle validation error
            const errorMessages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors: errorMessages });
          }
          res.status(500).json({ error: error.message });
    }
};

exports.getRegistrations = async (req, res) => {
    try {
        const registration = await Registration.find();
        res.json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json(registration);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json({ message: 'Registration updated successfully', registration });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRegistrationById = async (req, res) => {
    try {
        const registration = await Registration.findByIdAndDelete(req.params.id);
        if (!registration) {
            return res.status(404).json({ error: 'Registration not found' });
        }
        res.json({ message: 'Registration deleted successfully', registration });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const registeredUser = await Registration.findOne({ email, password });

        if (registeredUser) {
            // Generate a JWT token
            const token = jwt.sign({ userId: registeredUser._id }, "mynameiskriyanshibensureshbhaikamani", { expiresIn: '1h' });

            // Send the token as a response
            res.json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ message: 'Incorrect email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
