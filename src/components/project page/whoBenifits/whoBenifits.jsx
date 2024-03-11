import React, { useState, useEffect } from "react";
import SlideShowCard from "./slideShowCard";
import { motion } from "framer-motion";
// import VisionButton from '../../Button/Button';

const WhoBenefits = ({mainHeading,slides}) => {
  

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      
      <motion.div
        initial={{  opacity: 0 }} // Initial scale (larger size)
        animate={{  opacity: 1 }} // Final scale (original size)
        transition={{ duration: 0.5, delay: 4, ease: "easeInOut" }}
        className=" bg-visionBlue p-10"
      >
        <div className="flex text-visionGold font-playfair font-extrabold text-2xl justify-center items-center p-5">Who Gets Benefitted?</div>
        <SlideShowCard
          content={slides[currentSlide].content}
          heading={slides[currentSlide].heading}
        />
      </motion.div>
      {/* <VisionButton/> */}
    </div>
  );
};

export default WhoBenefits;
