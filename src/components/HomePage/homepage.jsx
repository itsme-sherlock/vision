import React from "react";
import QuickIntro from "./quickIntro";
import WhyChooseUs from "./whyChooseUs";
import Properties from "./properties/properties"
import HappyCustomers from './HappyCustomers'
import Hero from "./hero";

function HomePage() {
    return (
      <>
        <Hero/>
        <QuickIntro />
        <WhyChooseUs />
        <Properties />
        <HappyCustomers/>
      </>
    );
  }
  export default HomePage;