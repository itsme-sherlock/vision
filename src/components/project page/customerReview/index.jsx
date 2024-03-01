  // index.js
  import React from 'react';
  import VideoTemplate from './VideoTemplate';

  const Index = () => {
    // Define an array of objects containing video details
   
    return (
      <div className='p-5'>
        {/* Pass the videos array as a prop to the VideoTemplate component */}
        <VideoTemplate/>
      </div>
    );
  };

  export default Index;
