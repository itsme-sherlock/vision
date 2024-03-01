import React, { useState, useEffect } from "react";
import SlideShowCard from "./slideShowCard";
import { motion } from "framer-motion";

const WhoBenefits = () => {
  const slides = [
    {
      heading: "STATE HIGHWAY",
      content: `Tiruvallur and Kancheepuram districts may provide a convenient route from Chennai to Karnataka as a result of this road improvement. The two-lane road from Sunguarschatram to Mappedu is currently being expanded into a four-lane road, making it simple to travel and then`,
    },
    {
      heading: "MULTI-MODAL LOGISTICS PARKS",
      content: `MMLP Chennai is India's first multi-modal logistics park (MMLP). It's
        being built on 184.27 acres of land in Mappedu, Thiruvallur district,
        Tamil Nadu. Reliance Industries Ltd (RIL) is the private developer
        building the MMLP.`,
    },
    {
      heading: "LOGISTICS CORRIDOR",
      content: `A particular region is dedicated to developing logistics
        and all other logistic oriented business and companies
        by the state and central government of India.`,
    },
    {
      heading: "GREEN FIELD AIRPORT",
      content: `The Chennai Greenfield International Airport is a proposed airport
       project for the city of Chennai, India. It will be built near Parandur
       in the Kanchipuram district, about 40 kilometers from the city
       center. The airport will serve the city alongside the existing
       Chennai International Airport.`,
    },
    {
      heading: "Green Investors",
      content:
        "Your investment isnt just about financial gain; its about making a positive impact. Generate income while contributing to reforestation and environmental well-being.",
    },
    {
      heading: "Sustainable Profiters",
      content:
        "The demand for sustainable, high-quality wood is on the rise. Your redwood trees could be a sought-after resource for eco-conscious industries, ensuring a consistent revenue stream.",
    },
  ];

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
        <div className="text-4xl sm:text-6xl text-visionBlue text-center tracking-wider">
          <motion.div
            initial={{ scale: 10, opacity: 0 }} // Initial scale (larger size)
            animate={{ scale: 1, opacity: 1 }} // Final scale (original size)
            transition={{ duration: 0.2, delay: 3, ease: "easeInOut" }} // Animation duration and delay
          >
            VISION’S PRIME
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
    </div>
  );
};

export default WhoBenefits;
