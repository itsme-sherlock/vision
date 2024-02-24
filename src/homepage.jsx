import React from "react";
import QuickIntro from "./components/quickIntro";
import WhyChooseUs from "./components/whyChooseUs";
import Properties from "./components/properties/properties";
import HappyCustomers from "./components/HappyCustomers"
import Hero from './components/hero'

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