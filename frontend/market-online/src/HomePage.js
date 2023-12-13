import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from "./pages/login";
import Register from "./pages/register";
import Market from "./pages/market";
import Success from "./components/success"
import Cancel from "./components/cancel"
export default function HomePage(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
        <Route path= "/Ortoshop" element={<Market/>}/>
        <Route path= "/success" element={<Success/>}/>
        <Route path= "/cancel" element={<Cancel/>}/>
      </Routes>
    </BrowserRouter>

  )
}