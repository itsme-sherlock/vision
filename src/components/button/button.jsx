import React from "react";
import { motion } from "framer-motion";

const button = () => {
  return (
    <div className="flex justify-center">
      <motion.button
        className="my-5 p-3 w-fit text-base sm:text-2xl bg-visionBlue rounded-md text-white "
        whileHover={{
          border:'solid #D4AF37 10px',
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Book your dream plot for just Rs 5000
      </motion.button>
    </div>
  );
};

export default button;
