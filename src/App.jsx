import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ServiceDetails from './pages/ServiceDetails'
import Home from "./pages/Home";
import Footer from './components/Footer';
import About from './pages/About';
import Contactus from './pages/Contact';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
    <Route
      path="/services/:category/:service"
      element={<ServiceDetails />}
    />
  </Routes>
  <Footer/>

    </>
 
   
  )
}

export default App
