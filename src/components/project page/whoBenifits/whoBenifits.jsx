import React, { useState, useEffect } from 'react';
import SlideShowCard from './slideShowCard';

const WhoBenefits = () => {
  const slides = [
    {
      heading: 'Smart Investors',
      content: 'Take advantage of redwood farming\'s potential to generate substantial returns on your capital. Redwoods are prized for their pricey wood, which translates to the possibility of big profits.'
    },
    {
      heading: 'Venture Capitalists',
      content: 'Redwood is a highly valued asset with a dramatically greater return on investment (ROI) of 1OX times.Dont purchase vacant land. purchase a piece of land with passive income'
    },
    {
      heading: 'Peace Lovers',
      content: 'Escape the bustle of the city and spend some time in your own private redwood paradise. Imagine waking up to the tranquil sounds of wind rustling through majestic trees.'
    },
    {
      heading: 'Long-Term Investors',
      content: 'Watch your redwood trees grow over time, potentially producing both personal fulfillment and an attractive financial future.'
    },
    {
      heading: 'Green Investors',
      content: 'Your investment isnt just about financial gain; its about making a positive impact. Generate income while contributing to reforestation and environmental well-being.'
    },
    {
      heading: 'Sustainable Profiters',
      content: 'The demand for sustainable, high-quality wood is on the rise. Your redwood trees could be a sought-after resource for eco-conscious industries, ensuring a consistent revenue stream.'
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
    <div className=''>
      <div className='text-4xl sm:text-6xl text-visionBlue text-center'>
        Who Gets Benefits
      </div>
      <div className=''>
        <SlideShowCard heading={slides[currentSlide].heading} content={slides[currentSlide].content} />
      </div>
    </div>
  );
};

export default WhoBenefits;
