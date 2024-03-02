import React, { useState, useEffect } from "react";
import SlideShowCard from "./slideShowCard";
import { motion } from "framer-motion";
import VisionButton from '../../button/button';

const WhoBenefits = ({mainHeading,slides}) => {
  

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="">
      <motion.div
        className="bg-visionGold relative overflow-hidden"
        initial={{ width: 0, opacity: 0 }} // Initial width (revealed from left) and opacity (invisible)
        animate={{ width: "100%", opacity: 1 }} // Final width (fully revealed) and opacity (visible)
        transition={{ duration: 1, delay: 2, ease: "easeInOut" }} // Animation duration, delay, and ease
      >
        <div className="text-4xl sm:text-6xl text-visionBlue text-center tracking-wider py-3">
          <motion.div
            initial={{ scale: 10, opacity: 0 }} // Initial scale (larger size)
            animate={{ scale: 1, opacity: 1 }} // Final scale (original size)
            transition={{ duration: 0.2, delay: 3, ease: "easeInOut" }} // Animation duration and delay
          >
            {mainHeading}
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{  opacity: 0 }} // Initial scale (larger size)
        animate={{  opacity: 1 }} // Final scale (original size)
        transition={{ duration: 0.5, delay: 4, ease: "easeInOut" }}
        className=" p-2 sm:p-5 h-64 flex items-center my-5 sm:my-32"
      >
        <SlideShowCard
          heading={slides[currentSlide].heading}
          content={slides[currentSlide].content}
        />
      </motion.div>
      <VisionButton/>
    </div>
  );
};

export default WhoBenefits;
