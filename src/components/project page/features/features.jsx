import React from 'react';
import Cards from './cards';
import clubHouse from '../../../assets/visionFarms/features/clubHouse.png'
const Features = () => {
  const details = [
    {
      heading: 'Club House',
      csvg: clubHouse, // Updated relative path
      content: 'Designed as an ideal homestay, the Clubhouse offers a cozy retreat for a family of six. With thoughtful amenities and spacious accommodations, it promises a comfortable and enjoyable stay experience.'
    },
    {
      heading: 'Another Feature',
      csvg: clubHouse, // Updated relative path
      content: 'Description of another feature...'
    }
  ];

  return (
    <div className='bg-visionBlue p-10 flex overflow-x-scroll gap-5'>
      {details.map((item, index) => (
        <Cards key={index} heading={item.heading} csvg={item.csvg} content={item.content} />
      ))}
    </div>
  );
};

export default Features;
