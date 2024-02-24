import React from "react";
import { Link } from "react-router-dom";

const PropertyCards = ({ propertyImage, propertyName }) => {
  return (
    <div className="flex items-center ">
        {/* image  */}
      <div>
        <img src={propertyImage} alt="logo" />

      </div>
      {/* text and know more */}
      <div className="flex flex-col gap-10">
        <p className="text-4xl font-bold text-white">{propertyName}</p>
        <Link to = '/visionFarms'>
            
            <button className="bg-visionGold p-2 rounded-md font-semibold">Know more about {propertyName}</button>
        </Link>

      </div>
    </div>
  );
};

export default PropertyCards;
