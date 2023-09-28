import React from "react";
import Header from "./components/Header/Header.jsx";
import MyRoutes from "./MyRoutes.jsx";
import Footer from "./components/Footer/Footer.jsx";

const DigiLab = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className=" flex flex-col w-screen">
        <Header />
      </div>

      <div className="flex flex-col  pt-12">
        <MyRoutes />
      </div>

      <div className="flex flex-col mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default DigiLab;
