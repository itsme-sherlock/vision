import React from "react";
import WhoBenefits from "./whoBenifits/whoBenifits";
import VideoSection from "./VideoSection";
import WhyVision from "./WhyVision";
import Features from "./features/features";
import VideoTemplate from "./customerReview/VideoTemplate";
import clubHouse from "../../assets/club house.png";
import Title from "../title/Title";
const VisionPrimeHome = () => {
  const slides = [
    {
      heading: "STATE HIGHWAY",
      content: `Tiruvallur and Kancheepuram districts may provide a convenient route from Chennai to Karnataka as a result of this road improvement. The two-lane road from Sunguarschatram to Mappedu is currently being expanded into a four-lane road, making it simple to travel and then`,
    },
    {
      heading: "MULTI-MODAL LOGISTICS PARKS",
      content: `MMLP Chennai is India's first multi-modal logistics park (MMLP). It's
        being built on 184.27 acres of land in Mappedu, Thiruvallur district,
        Tamil Nadu. Reliance Industries Ltd (RIL) is the private developer
        building the MMLP.`,
    },
    {
      heading: "LOGISTICS CORRIDOR",
      content: `A particular region is dedicated to developing logistics
        and all other logistic oriented business and companies
        by the state and central government of India.`,
    },
    {
      heading: "GREEN FIELD AIRPORT",
      content: `The Chennai Greenfield International Airport is a proposed airport
       project for the city of Chennai, India. It will be built near Parandur
       in the Kanchipuram district, about 40 kilometers from the city
       center. The airport will serve the city alongside the existing
       Chennai International Airport.`,
    },
    {
      heading: "Green Investors",
      content:
        "Your investment isnt just about financial gain; its about making a positive impact. Generate income while contributing to reforestation and environmental well-being.",
    },
    {
      heading: "Sustainable Profiters",
      content:
        "The demand for sustainable, high-quality wood is on the rise. Your redwood trees could be a sought-after resource for eco-conscious industries, ensuring a consistent revenue stream.",
    },
  ];
  const details = [
    {
      heading: "Schools: Easy Access to Education",
      csvg: clubHouse, // Updated relative path
      content: `
In your neighborhood, numerous schools lie within a short walking distance, making it convenient for students and parents alike.Here's a selection of schools within 8 to 10 minutes walking distance:

St. Mary’s Matriculation Higher Secondary School - 8min
Kavan Kolathur Government School - 10min
Pupsazhin Givakkan School - 10min

With these options nearby, education is always within reach for the community.`,
    },
    {
      heading: "Colleges: Higher Learning Nearby",
      csvg: clubHouse, // Updated relative path
      content: `
For those pursuing higher education, nearby colleges offer diverse opportunities. Here are a few within a comfortable walking distance:

Kalaimagal Group of College - 8min
Indira Institute of Computer Application’s - 12min

With these colleges nearby, students can access quality education without the hassle of long commutes.
      
      `,
    },
    {
      heading: "Religious Places: Places of Solace Nearby",
      csvg: clubHouse, // Updated relative path
      content: `
For spiritual fulfillment, various religious places are conveniently located nearby:

Jamia Masjid - 15min
Sri Sigeeshwarar Temple
      
With these places of worship nearby, residents can nurture their spiritual well-being with ease.`,
    },
    {
      heading: "Transport Hubs: Easy Mobility Solutions",
      csvg: clubHouse, // Updated relative path
      content: `
Efficient transportation is vital for any community. Here are some key transport hubs within walking distance:

Mappedu Junction - 8min
Perambakkam Bus Depo - 10min

These hubs ensure that residents can easily access public transportation for their daily commute.`,
    },
    {
      heading: "Hospitals: Accessible Healthcare Facilities",
      csvg: clubHouse, // Updated relative path
      content: `
Healthcare is essential, and having hospitals within reach is crucial. Here are some hospitals nearby:

Saveetha Rural Health Centre - 15min
Sai Multispeciality Hospital - 15min

With these hospitals nearby, residents can access medical care promptly in case of need.`,
    },
    {
      heading:
        "Top Company and Commercial Places: Convenience at Your Doorstep",
      csvg: clubHouse, // Updated relative path
      content: `
For everyday needs and leisure activities, various commercial establishments are within walking distance:

Sri Devi Supermarket
Hyundai Mobis

These commercial hubs ensure that residents can conveniently access goods and services without traveling far.`,
    },
  ];
  const videos = [
    {
      src: "https://www.youtube.com/embed/aInhxNh8aB8",
      title: "HouseHold Worker To Realtor | Successful Journey ",
    },
    {
      src: "https://www.youtube.com/embed/r9LPajesVCE",
      title: "Flight In-charge To Successful Realtor | #VisionStories | Business Journey",
    },
    {
      src: "https://www.youtube.com/embed/D3Q9sZ1m3N8",
      title: "Bike Taxi Driver to Successful Realtor | #VisionStories | Business Journey",
    },
  ];

  return (
    <div>
      <Title mainHeading={"Vision Prime"}/>
      <WhoBenefits  slides={slides} />
      <VideoSection src={"https://www.youtube.com/embed/KP-T6X74B6A"} />
      <WhyVision />
      <Features details={details} />
      <VideoTemplate videos={videos} />
    </div>
  );
};

export default VisionPrimeHome;

<iframe width="640" height="360" src="https://www.youtube.com/embed/D3Q9sZ1m3N8" title="Bike Taxi Driver to Successful Realtor | #VisionStories | Business Journey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
