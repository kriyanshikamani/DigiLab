import React ,{useState}from "react";
import "./main.css";
import Admin from "./Admin";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./contexts/SharedContext";
import Login from "./components/Login/Login.jsx"

export default function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const handleLogin=()=>{
    setIsLoggedIn(true);
  }
  return (
    <>
    <div>     
      {/* {isLoggedIn?( */}
      <SharedContextProvider>
        <BrowserRouter>
          <Admin />
        </BrowserRouter>
      </SharedContextProvider>
     {/* ):(
        <Login onLogin={handleLogin}/>
      )}  */}
      </div>
 
    </>
  );
}
