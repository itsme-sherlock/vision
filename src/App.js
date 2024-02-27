import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/HomePage/ContactUs";
import Navbar from "./components/HomePage/navbar";
import VisionPrimeHome from "./components/project page/index.jsx";
import HomePage from "./components/HomePage/homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visionFarms" element={<VisionPrimeHome />} />
        </Routes>
        <ContactUs /> {/* Assuming ContactUs is rendered on every page */}
      </div>
    </BrowserRouter>
  );
}



export default App;
