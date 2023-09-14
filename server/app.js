const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Registration = require('./models/registration');

const app=express();

app.use(cors());
app.use(bodyParser.json());
dotenv.config({path:'./config.env'});


const router = express.Router();

// Define a route for creating a new user with dynamic data
router.post('/registration', async (req, res) => {
  try {
    // Fetch user data (e.g., from a request body)
    const userData = req.body;

    // Check if userData is valid and contains the required fields
    if (!userData || !userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.confirmPassword) {
      return res.status(400).json({ error: 'Invalid user data' });
    }

    // Create a new user based on the fetched data
    const user = new Registration({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
    });

    // Save the user to the database
    await user.save();

    // Generate a JWT token for the user
    const token = await user.generateAuthToken();

    return res.status(201).json({ user, token });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
  

const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');
const referralRoutes = require('./routes/referralRoutes');
const testcategoryRoutes = require('./routes/testcategoryRoutes');
const testpackageRoutes = require('./routes/testpackageRoutes');
const testpanelRoutes = require('./routes/testpanelRoutes');


const registrationRoutes = require('./routes/registrationRoutes');

require('./DB/conn');
const PORT=process.env.PORT;


// app.use('/report', reportRoutes);
app.use('/user', userRoutes);
app.use('/patient', patientRoutes);
app.use('/referral', referralRoutes);
app.use('/testcategory', testcategoryRoutes);
app.use('/testpackage', testpackageRoutes);
app.use('/registration', registrationRoutes);
app.use('/testpanel', testpanelRoutes);

// const jwt = require('jsonwebtoken');
// const createToken=async()=>{
//   const  token =await  jwt.sign({_id:"64f6c866bf20ad2b8845b73b"},"mynameiskriyanshisureshbhaikamani",
//     {expiresIn:"2 days"});
  
//     console.log(token);

//     const userVer=await jwt.verify(token,"mynameiskriyanshisureshbhaikamani"); 
//     console.log(userVer);
// }
// createToken();

app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT);
});
