import React from "react";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <section>
      <div className="w-full h-20 bg-visionBlue">
        {/* logo */}
        <div className="flex h-full items-center justify-center sm:justify-start">
          <img className="flex items-center justify-center ml-5 mt-3 h-10" src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
