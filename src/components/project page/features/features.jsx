import React from 'react';
import Cards from './cards';

const Features = ({details}) => {
  
console.log(details);
  return (
    <section>
      <div className='bg-visionBlue flex overflow-x-scroll px-20 '>
        {details.map((item, index) => (
          <div key={index} className='m-2 '> {/* Add margin to create space between cards */}
            <Cards heading={item.heading} csvg={item.csvg} content={item.content} />
          </div>
        ))}
      </div>
    </section>
  );
  
};

export default Features;
