import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AboutAndFAQ from "./pages/AboutAndFAQ/AboutAndFAQ"; // Adjust the import according to your structure
import BeneficiaryDashboard from "./components/BeneficiaryDashboard/BeneficiaryDashboard";
import AuditorDashboard from "./components/AuditorDashboard/AuditorDashboard";
import GovernmentDashboard from "./components/GovernmentDashboard/GovernmentDashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/SignUp";
import ViewSchemes from "./pages/ViewSchemes/ViewSchemes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<div className="text-xl text-red-700 text-justify">Page not found!</div>} />
        <Route path="/" element={<Home />} />
        <Route path="/user-dashboard" element={<BeneficiaryDashboard />} />
        <Route path="/admin-dashboard" element={<AuditorDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-schemes" element={<ViewSchemes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/govt-dashboard" element={<GovernmentDashboard />} />
        <Route path="/about" element={<AboutAndFAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
