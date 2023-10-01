const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes=require("./routes/AuthRoutes");
const adminRoutes=require("./routes/AdminRoutes");
const app=express();
const cookieParser=require("cookie-parser");
 
app.use(cors(
    {
        origin:["http://localhost:5173"],
        method:["GET","POST"],
        credentials:true,
    }
));
app.use(express.json());
app.use(bodyParser.json());
dotenv.config({path:'./config.env'});


const router = express.Router();



module.exports = router;
  

const userRoutes = require('./routes/userRoutes');
const patientRoutes = require('./routes/patientRoutes');
const referralRoutes = require('./routes/referralRoutes');
const testcategoryRoutes = require('./routes/testcategoryRoutes');
const testpackageRoutes = require('./routes/testpackageRoutes');
const testpanelRoutes = require('./routes/testpanelRoutes');

const { default: mongoose } = require('mongoose');

require('./DB/conn');
const PORT=process.env.PORT;


// app.use('/report', reportRoutes);
app.use('/user', userRoutes);
app.use('/patient', patientRoutes);
app.use('/referral', referralRoutes);
app.use('/testcategory', testcategoryRoutes);
app.use('/testpackage', testpackageRoutes);
app.use('/testpanel', testpanelRoutes);

app.use(cookieParser());
app.use("/",authRoutes);
app.use("/",adminRoutes);

app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT);
});



//npm cache clean --force
//yarn cache clean
