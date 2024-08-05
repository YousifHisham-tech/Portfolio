import React from "react";
import Introduction from "./Introduction";
import Education from "./Education";
import Skills from "./Skills";
import Job from "./Job";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/introduction" Component={Introduction} />
        <Route path="/education" Component={Education} />
        <Route path="/skills" Component={Skills} />
        <Route path="/jobSearch" Component={Job} />
      </Routes>
    </BrowserRouter>
  )
}
export default App