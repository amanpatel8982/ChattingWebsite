import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/DashBoard.jsx";
import ChatPage from "./pages/Chatpage.jsx";
import Contact from "./pages/Contact.jsx";



const App = () => {
  return (
    <>
    <BrowserRouter>                                            
    <Toaster />
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard/>} />  
        <Route path="/chat" element={<ChatPage />} />  
        <Route path="/chat" element={<ChatPage />} />
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;