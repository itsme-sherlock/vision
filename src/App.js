import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/navbar";
import VisionFarms from "./components/project page/visionFarms";
import HomePage from "./homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visionFarms" element={<VisionFarms />} />
        </Routes>
        <ContactUs /> {/* Assuming ContactUs is rendered on every page */}
      </div>
    </BrowserRouter>
  );
}



export default App;
