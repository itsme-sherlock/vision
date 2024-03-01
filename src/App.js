import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/HomePage/ContactUs";
import Navbar from "./components/HomePage/navbar";
import VisionPrimeHome from "./components/project page/index.jsx";
import HomePage from "./components/HomePage/homepage";
import BOMLanding from "./components/BOM page/index"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visionFarms" element={<VisionPrimeHome />} />
          <Route path="/BOM-Landing-Page" element={<BOMLanding/>}/>
        </Routes>
        <ContactUs /> {/* Assuming ContactUs is rendered on every page */}
      </div>
    </BrowserRouter>
  );
}



export default App;
