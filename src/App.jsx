import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ServiceDetails from './pages/ServiceDetails'
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
    <Route
      path="/services/:category/:service"
      element={<ServiceDetails />}
    />
  </Routes>

    </>
 
   
  )
}

export default App
