import React from "react";
import whyLogo from "../../assets/whyLogo.png";

const WhyVision = () => {
  return (
    <section className="sm:flex flex-wrap ">
      <div className="sm:flex py-10 sm:pl-10 items-center">
        {/* left */}
        <div>
          <h1 className="text-3xl sm:text-6xl font-bold text-visionBlue">Why choose Vision</h1>
          <div className="flex flex-wrap overflow-x-scroll px-32 sm:px-4">
              <ul className="flex flex-grow sm:grid gap-16 pt-16 text-xs sm:text-xl">
                <li>
                  <span className="custom-span">Expertise</span> <br/>Our team has years of experience in the real estate
                  industry, providing you with the right guidance and advice.
                </li>
                <li>
                  <span className="custom-span">Trustworthy</span><br/> We are committed to building strong relationships with
                  our clients through transparency and honesty.
                </li>
                <li>
                  <span className="custom-span">Personalized Attention</span><br/> We provide personalized attention to every
                  client to ensure that they find the perfect property that matches
                  their needs.
                </li>
              </ul>
          </div>
        </div>
        {/* right */}
        <div className="hidden sm:flex">
          <img src={whyLogo} alt="logo"></img>
        </div>
      </div>
    </section>
  );
};

export default WhyVision;
