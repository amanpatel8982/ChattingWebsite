import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;