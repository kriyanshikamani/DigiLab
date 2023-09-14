import React from "react";
import "./main.css";
import DigiLab from "./DigiLab";
import { BrowserRouter } from "react-router-dom";
import { SharedContextProvider } from "./context/SharedContext.jsx";

export default function App() {
  return (
    <SharedContextProvider>
      <BrowserRouter>
        <DigiLab />
      </BrowserRouter>
    </SharedContextProvider>
  );
}