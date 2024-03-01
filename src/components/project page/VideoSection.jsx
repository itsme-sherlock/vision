import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const VideoSection = ({src}) => {
  const controls = useAnimation();
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      const top = videoElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger animation when the video section is approximately halfway into view
      if (top < windowHeight / 2) {
        controls.start({
          opacity: 1,
          scale: 1,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      ref={videoRef}
      initial={{ opacity: 1, scale: 1 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className=' p-10 my-10 flex justify-center items-center bg-visionBlue'
    >
      <iframe
        className='w-full h-64  sm:h-[500px] '
        src={src}
        title="Vision Forest - Project Video | Ft: Rajmohan | Farmland Project|"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
};

export default VideoSection;
