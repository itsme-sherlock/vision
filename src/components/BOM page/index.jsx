import React from "react";
import VideoSection from "../project page/VideoSection";

import WhoBenefits from "../project page/whoBenifits/whoBenifits";
import WhyVision from '../project page/WhyVision'
import Features from "../project page/features/features";
import clubHouse from '../../assets/club house.png'
import VideoTemplate from "../project page/customerReview/VideoTemplate";
const index = () => {
  const slides = [
    {
      heading: "STATE HIGHWAY",
      content: `Tiruvallur and Kancheepuram districts may provide a convenient route from Chennai to Karnataka as a result of this road improvement. The two-lane road from Sunguarschatram to Mappedu is currently being expanded into a four-lane road, making it simple to travel and then`,
    },
    {
      heading: "Aspiring Real Estate Professionals:",
      content: `deal for individuals with a passion for real estate looking to kickstart their career.                                  `,
    },
    {
      heading: "Career Seekers",
      content: `Those in search of a rewarding and impactful profession.
      Guidance Seekers: Individuals who value personalized mentorship and guidance from a seasoned real estate expert.`,
    },
    {
      heading: "Newbies to Real Estate:",
      content:
        `Tailored for those new to the field, providing a fast-track to success.
        Freelancers: Suited for those desiring the flexibility and autonomy of a freelance career.
        Career Explorers: Perfect for individuals confused about their career path or future direction.`,
    },
    
  ];
  const details = [
    {
      heading: '24/7 Personal Guidance',
      csvg: clubHouse, // Updated relative path
      content: `
      Access to 24 hours of one-on-one mentoring with a seasoned real estate expert.`
    },
    {
      heading: '2 Months FREE Training',
      csvg: clubHouse, // Updated relative path
      content: `
      Comprehensive and intensive training to equip you with the necessary skills.
      
      `
    },
    {
      heading: 'High Incentives',
      csvg: clubHouse, // Updated relative path
      content: `
      Earn more compared to others in the industry as you progress.`
    },
    {
      heading: 'Freelancer Flexibility:',
      csvg: clubHouse, // Updated relative path
      content: `
      Work on your terms and pace, providing the freedom you crave.`
    },
    {
      heading: 'Career Clarity',
      csvg: clubHouse, // Updated relative path
      content: `
      Receive guidance on your career path and future trajectory.
       .`
    },
    {
      heading: 'Team Support:',
      csvg: clubHouse, // Updated relative path
      content: `
      Be a part of a supportive team, fostering a collaborative and encouraging environment.`
    },
  ];
  const videos = [
    {
      src: 'https://www.youtube.com/embed/EyXsg6w35KI',
      title: 'Mr Karthikeyan Family about Vision Properties',
    },
    {
      src: 'https://www.youtube.com/embed/nFODZpS0er0',
      title: 'Mrs Janani about Vision Properties',
    },
    {
      src: 'https://www.youtube.com/embed/SxhuGJfsRQ4',
      title: 'Mr Vinoth about Vision Properties',
    },
  ];
  return (
    
    <div>
      <WhoBenefits mainHeading={'Want to become a Successful Real Estate BOM'} slides={slides}/>
      <VideoSection src={"https://www.youtube.com/embed/MJusYxG1WoM"} />
      <WhyVision />
      <Features details={details}/>
      <VideoTemplate videos={videos}/>
    </div>
  );
};

export default index;
