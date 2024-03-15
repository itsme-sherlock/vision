// import { useInView } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const Button = ({ content, onClick }) => {
  // Accept onClick prop
 
  return (
    <motion.div
      
      className="flex items-center justify-center my-5"
      onClick={onClick}
    >
      {" "}
      {/* Attach onClick event handler */}
      <div className="w-fit bg-visionBlue p-2 sm:p-5 text-white flex cursor-pointer rounded-lg tracking-wide items-center justify-center font-bold">
        {content}
      </div>
    </motion.div>
  );
};

export default Button;
