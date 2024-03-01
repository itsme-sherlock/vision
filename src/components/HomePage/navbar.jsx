import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <div className="w-full h-20 bg-visionBlue">
        {/* logo */}
        <div className="flex h-full items-center justify-center sm:justify-between">
          <img
            className="flex items-center justify-center ml-5 mt-3 h-10"
            src={logo}
            alt="logo"
          />
          <div className='sm:flex hidden items-center '>
            <ul className="text-white flex gap-5">
              <li><Link to= "/VisionFarms"><button>Projects</button></Link></li>
              <li><Link to='BOM-Landing-page'><button>Bom Page</button></Link></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
