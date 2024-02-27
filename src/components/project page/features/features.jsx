import React from 'react';
import Cards from './cards';
import clubHouse from '../../../assets/visionFarms/features/clubHouse.png'
const Features = () => {
  const details = [
    {
      heading: 'Schools: Easy Access to Education',
      csvg: clubHouse, // Updated relative path
      content: `
In your neighborhood, numerous schools lie within a short walking distance, making it convenient for students and parents alike.Here's a selection of schools within 8 to 10 minutes walking distance:

St. Mary’s Matriculation Higher Secondary School - 8min
Kavan Kolathur Government School - 10min
Pupsazhin Givakkan School - 10min

With these options nearby, education is always within reach for the community.`
    },
    {
      heading: 'Colleges: Higher Learning Nearby',
      csvg: clubHouse, // Updated relative path
      content: `
For those pursuing higher education, nearby colleges offer diverse opportunities. Here are a few within a comfortable walking distance:

Kalaimagal Group of College - 8min
Indira Institute of Computer Application’s - 12min

With these colleges nearby, students can access quality education without the hassle of long commutes.
      
      `
    },
    {
      heading: 'Religious Places: Places of Solace Nearby',
      csvg: clubHouse, // Updated relative path
      content: `
For spiritual fulfillment, various religious places are conveniently located nearby:

Jamia Masjid - 15min
Sri Sigeeshwarar Temple
      
With these places of worship nearby, residents can nurture their spiritual well-being with ease.`
    },
    {
      heading: 'Transport Hubs: Easy Mobility Solutions',
      csvg: clubHouse, // Updated relative path
      content: `
Efficient transportation is vital for any community. Here are some key transport hubs within walking distance:

Mappedu Junction - 8min
Perambakkam Bus Depo - 10min

These hubs ensure that residents can easily access public transportation for their daily commute.`
    },
    {
      heading: 'Hospitals: Accessible Healthcare Facilities',
      csvg: clubHouse, // Updated relative path
      content: `
Healthcare is essential, and having hospitals within reach is crucial. Here are some hospitals nearby:

Saveetha Rural Health Centre - 15min
Sai Multispeciality Hospital - 15min

With these hospitals nearby, residents can access medical care promptly in case of need.`
    },
    {
      heading: 'Top Company and Commercial Places: Convenience at Your Doorstep',
      csvg: clubHouse, // Updated relative path
      content: `
For everyday needs and leisure activities, various commercial establishments are within walking distance:

Sri Devi Supermarket
Hyundai Mobis

These commercial hubs ensure that residents can conveniently access goods and services without traveling far.`
    },
  ];

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
