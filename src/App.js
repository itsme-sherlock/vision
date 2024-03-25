import React, { useRef } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/HomePage/navbar";
import VisionPrimeHome from "./components/project page/index.jsx";
import HomePage from "./components/HomePage/homepage";
import BOMLanding from "./components/bomPage/index";
import ContactUs from "./components/HomePage/ContactUs.jsx";

function App() {
  const contactUsRef = useRef(null);

  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visionFarms" element={<VisionPrimeHome />} />
          <Route path="/BOM-Landing-Page" element={<BOMLanding />} />
        </Routes>
        <div ref={contactUsRef}>
          <ContactUs />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
