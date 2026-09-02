import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ServiceDetails from './pages/ServiceDetails'
import Home from "./pages/Home";
import Footer from './components/Footer';
import About from './pages/About';
import Contactus from './pages/Contact';
import NotFound from './pages/PageNotFound';

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
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer/>

    </>
 
   
  )
}

export default App
