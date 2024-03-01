// VideoTemplate.js
import React from 'react';

const VideoTemplate = () => {
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
    <div className='flex gap-5 overflow-x-scroll p-5'>
      
  <>
    {videos.map((video, index) => (
      <iframe
    key={index}
    width="80%"
    height="200"
    src={video.src}
    title={video.title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
    ))}
  </>
    </div>
  );
};

export default VideoTemplate;