import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MyRoutes from "./MyRoutes";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-200 overflow-hidden">
      <div className="sticky z-50 top-0 h-[10vh] w-screen">
        <Navbar />
      </div>

      <div className="flex flex-row h-auto">
        
        <aside className="flex flex-col w-auto bg-blue-900 border-r">
          <Sidebar />
         
        </aside>
        
        <div className="flex-auto p-6 h-[90vh] overflow-y-scroll">
          <MyRoutes />
        </div>
      </div>
      
      <div className="fixed bottom-0 w-full ">
        <Footer />
      </div>
    </div>
  );
};
export default Admin;
