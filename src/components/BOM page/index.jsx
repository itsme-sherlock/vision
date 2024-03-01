import React from "react";
import VideoSection from "../project page/VideoSection";
import VisionButton from "../button/button";
import WhoBenefits from "../project page/whoBenifits/whoBenifits";

const index = () => {
  return (
    <div>
      <WhoBenefits mainHeading={'Want to become a Successful Real Estate BOM'}/>
      <VideoSection src={"https://www.youtube.com/embed/MJusYxG1WoM"} />
      <VisionButton />
    </div>
  );
};

export default index;
