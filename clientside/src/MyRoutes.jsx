import React from 'react'
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test_Packages/Test.jsx";
import DownloadReport from "./components/Test_Packages/DownloadReport.jsx";
import Aboutus from "./components/AboutUs/Aboutus.jsx";
import Contectus from "./components/AboutUs/Contectus.jsx";
import Reviews from "./components/AboutUs/Reviews.jsx";
import Test_Discription from "./components/Test_Packages/Test_Discription.jsx";
import Mainbody from "./components/Mainbody/Mainbody.jsx";
import PayOnline from './components/PayOnline/PayOnline.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';

const MyRoutes = () => {
  return (
    <>
         <Routes>
          <Route path="/" element={<Mainbody />} />
          <Route path="/main-body" element={<Mainbody />} />
          <Route path="/book-test-packages" element={<Test />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/download-report" element={<DownloadReport />} />
          <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>} />
       
          <Route path="/pay-online" element={<PayOnline />} />
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/test-description" element={<Test_Discription/>}/>
          <Route path="*" element={<h1 className="text-4xl">Page not found</h1>} />
        </Routes>
    </>
  )
}

export default MyRoutes