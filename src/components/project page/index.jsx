import React from 'react';
import WhoBenifits from './whoBenifits/whoBenifits';
import VideoSection from './VideoSection';
import WhyVision from './WhyVision';
import Features from './features/features';
import VideoTemplate from './customerReview/VideoTemplate';


const VisionPrimeHome = () => {
  
  return (
    <div><WhoBenifits mainHeading={"Vision Prime"}/>
    <VideoSection src={"https://www.youtube.com/embed/KP-T6X74B6A"}/>
    <WhyVision/>
    <Features/>
    <VideoTemplate/>
    </div>
  )
}

export default VisionPrimeHome

